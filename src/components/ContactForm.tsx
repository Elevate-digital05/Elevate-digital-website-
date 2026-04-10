import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface ContactFormProps {
  selectedPlan?: string | null;
}

const interestOptions = [
  "Starter Website (R5,500)",
  "Business Website (R9,500)",
  "Pro Website (R14,500)",
  "Premium / Custom (R19,500+)",
  "Monthly Maintenance",
  "SEO Optimisation",
  "E-Commerce Store",
  "Booking System",
  "WhatsApp & Maps Integration",
  "Not Sure Yet — Let's Chat",
];

const ContactForm = ({ selectedPlan }: ContactFormProps) => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: selectedPlan || "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const interest = form.interest;
    let message = form.message.trim();

    if (!firstName || !email || !message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    const name = `${firstName} ${lastName}`.trim();
    const parts: string[] = [];
    if (interest) parts.push(`[Interest: ${interest}]`);
    if (phone) parts.push(`[Phone: ${phone}]`);
    if (selectedPlan && !interest) parts.push(`[Selected Plan: ${selectedPlan}]`);
    if (parts.length) message = `${parts.join(" ")}\n\n${message}`;

    setLoading(true);
    const id = crypto.randomUUID();
    const { error } = await supabase
      .from("contact_submissions")
      .insert({ id, name, email, message });

    if (error) {
      setLoading(false);
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
      return;
    }

    window.gtag?.("event", "generate_lead", {
      event_category: "Contact Form",
      event_label: "Form Submission",
    });

    await supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "contact-form-notification",
        recipientEmail: email,
        idempotencyKey: `contact-notify-${id}`,
        templateData: { name, email, message },
      },
    });

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">{t("contact.messageSent")}</h3>
        <p className="text-muted-foreground">{t("contact.inTouch")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">{t("form.firstName")} *</Label>
          <Input id="firstName" placeholder={t("form.firstName")} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} maxLength={50} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">{t("form.lastName")}</Label>
          <Input id="lastName" placeholder={t("form.lastName")} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} maxLength={50} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t("form.email")} *</Label>
        <Input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">{t("form.phone")}</Label>
        <Input id="phone" type="tel" placeholder="+27 ..." value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="interest">{t("form.interest")}</Label>
        <Select value={form.interest} onValueChange={(val) => setForm({ ...form, interest: val })}>
          <SelectTrigger>
            <SelectValue placeholder={t("form.select")} />
          </SelectTrigger>
          <SelectContent>
            {interestOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t("form.tellUs")} *</Label>
        <Textarea id="message" placeholder={t("form.tellUs") + "..."} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={2000} rows={5} required />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? t("form.sending") : <>{t("contact.sendMessage")} <Send className="ml-2 h-4 w-4" /></>}
      </Button>
    </form>
  );
};

export default ContactForm;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-up" | "slide-left" | "scale-up" | "slide-up";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-[30px]",
    visible: "opacity-100 translate-y-0",
  },
  "slide-left": {
    hidden: "opacity-0 -translate-x-[40px]",
    visible: "opacity-100 translate-x-0",
  },
  "scale-up": {
    hidden: "opacity-0 scale-[0.95]",
    visible: "opacity-100 scale-100",
  },
  "slide-up": {
    hidden: "opacity-0 translate-y-[40px]",
    visible: "opacity-100 translate-y-0",
  },
};

const AnimatedSection = ({ children, className, delay = 0, variant = "fade-up" }: AnimatedSectionProps) => {
  const { ref, visible } = useScrollAnimation();
  const styles = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform",
        visible ? styles.visible : styles.hidden,
        className
      )}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "0.7s",
        transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

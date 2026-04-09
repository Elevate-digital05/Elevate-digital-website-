import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Elevate Digital"

interface ContactNotificationProps {
  name?: string
  email?: string
  message?: string
}

const ContactFormNotificationEmail = ({ name, email, message }: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New inquiry from {name || 'a visitor'} on {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={text}>You have received a new inquiry from your website.</Text>
        <Hr style={hr} />
        <Text style={label}>Name</Text>
        <Text style={value}>{name || 'Not provided'}</Text>
        <Text style={label}>Email</Text>
        <Text style={value}>{email || 'Not provided'}</Text>
        <Text style={label}>Message</Text>
        <Text style={value}>{message || 'No message'}</Text>
        <Hr style={hr} />
        <Text style={footer}>This email was sent from the {SITE_NAME} contact form.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) => `New inquiry from ${data?.name || 'a visitor'}`,
  displayName: 'Contact form notification',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', message: 'I need a website for my business.' },
  to: 'elevatedigitalwebs@gmail.com',
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '24px 28px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1a2332', margin: '0 0 16px', fontFamily: "'Space Grotesk', Arial, sans-serif" }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 16px' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const label = { fontSize: '12px', fontWeight: 'bold' as const, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 4px' }
const value = { fontSize: '15px', color: '#1a2332', margin: '0 0 16px', lineHeight: '1.5' }
const footer = { fontSize: '12px', color: '#999999', margin: '16px 0 0' }

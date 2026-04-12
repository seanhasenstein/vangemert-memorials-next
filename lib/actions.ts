'use server';

import { redirect } from 'next/navigation';

import { createMessageId, formatPhoneNumber } from '@/utils';
import { sendEmail } from '@/utils/sendEmail';
import { createEmailTemplate } from '@/emails/contactMessage';
import { formattedPhoneNumber } from '@/constants';

export type FormState = {
  error: string | null;
  customerName: string | null;
  email: string | null;
  phone: string | null;
  message: string | null;
} | null;

async function sendContactMessage(
  _prevState: FormState | null,
  formData: FormData
) {
  const customerName = formData.get('customerName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;
  const honeypot = formData.get('website') as string;
  const formLoadedAt = formData.get('formLoadedAt') as string;

  // Honeypot check - silently reject if filled
  if (honeypot) {
    console.log('Spam blocked: honeypot field filled');
    redirect('/contact/success');
  }

  // Time-based check - reject if submitted in under 2 seconds
  if (formLoadedAt) {
    const elapsed = Date.now() - Number(formLoadedAt);
    if (elapsed < 2000) {
      console.log(`Spam blocked: form submitted in ${elapsed}ms`);
      redirect('/contact/success');
    }
  }

  // Single-word message check
  if (message.trim().split(/\s+/).length < 2) {
    return {
      error:
        'Please provide a more detailed message so we can better assist you.',
      customerName,
      email,
      phone,
      message,
    };
  }

  const messageId = createMessageId();
  try {
    const formattedMessage = {
      id: messageId,
      name: customerName.trim(),
      email: email.toLowerCase().trim(),
      phone: formatPhoneNumber(phone),
      message: message.trim(),
    };

    const { text, html } = createEmailTemplate(formattedMessage);

    await sendEmail({
      to: process.env.TO_EMAIL_ADDRESS,
      from: process.env.FROM_EMAIL_ADDRESS,
      subject: `Contact message from ${customerName} [#${messageId}]`,
      replyTo: formattedMessage.email,
      bcc: process.env.BCC_EMAIL_ADDRESS,
      text,
      html,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unknown error occurred sending the message.';
    console.error(errorMessage);
    return {
      error: `Something went wrong. Please try sending your message again. You can also email us directly at ${process.env.TO_EMAIL_ADDRESS} or call ${formattedPhoneNumber}.`,
      customerName,
      email,
      phone,
      message,
    };
  }
  redirect('/contact/success');
}

export { sendContactMessage };

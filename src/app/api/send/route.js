import { EmailTemplate } from 'src/app/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend('re_VWtReYRZ_GgBEKiru5WYW8dMrx3VxYg94');

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Isabella <no-reply@isabellaschiappa.com>',
      to: ['Isabellaschiappa@hotmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}


import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    let emailContent = '';
    Object.entries(formData).forEach(([key, value]) => {
        emailContent += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
    });

    const mailOptionsToSelf = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: "tanner.k.cottle@gmail.com",
      subject: 'New Service Request',
      text: emailContent,
    };

    const mailOptionsToUser = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: formData.email,
      subject: 'Service Request Confirmation',
      text: `Hello ${formData.name},\n\nThank you for your request! I will get back to you soon.`,
    };

    await transporter.sendMail(mailOptionsToSelf);
    await transporter.sendMail(mailOptionsToUser);

    return NextResponse.json({ message: 'Thank you for reaching out! I\'ll be in touch soon.' }, { status: 200 });
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Forgive me, the server had an issue. Please, try again.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { Name, Email, Message, Phone } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      pass: process.env.NEXT_PUBLIC_SENDER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
    to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    subject: `Message from ${Name} (${Email})`,
    html: `<h1 class="text-3xl">Message from ${Name}</h1>
    <p>Email: ${Email}</p>
    <p>Phone: ${Phone}</p>
    <p>Message: ${Message}</p>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
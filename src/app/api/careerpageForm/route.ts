import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { Name, Email, Message, Phone, Budget, Interest } =
    await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.SENDER_NAME,
    to: [
      "triciagriffin19732@gmail.com",
      "zulemavub81@yahoo.com",
      "GabrielleOPLewiswq@outlook.com",
      "JoanneNLOGreeneY@aol.com",
    ],
    subject: `Message from ${Name} (${Email})`,
    html: `<h1 class="text-3xl">Message from ${Name}</h1>
    <p>Email: ${Email}</p>
    <p>Phone: ${Phone}</p>
    <p>Interest: ${Interest}</p>
    <p>Budget: ${Budget}</p>
    <p>Message: ${Message}</p>`,
    attachments: [
      {
        filename: "resume.pdf",
        path: "https://adaired.com/resume.pdf",
      },
    ],
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

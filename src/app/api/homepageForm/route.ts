import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const formatDate = (dateString: number) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

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

  // Notification email options for the user
  const userMailOptions: Mail.Options = {
    from: process.env.SENDER_NAME,
    to: Email, // Send email to the user who filled the form
    subject: `Thank you for contacting us, ${Name}!`,
    html: `<h1 class="text-3xl">Thank you for contacting us, ${Name}!</h1>
    <p>We have received your message and will get back to you as soon as possible.</p>
    <p>Your Message: ${Message}</p>`,
  };

  // Options for the email notification you receive
  const mailOptions: Mail.Options = {
    from: process.env.SENDER_NAME,
    to: [
      "triciagriffin19732@gmail.com",
      "zulemavub81@yahoo.com",
      "GabrielleOPLewiswq@outlook.com",
      "JoanneNLOGreeneY@aol.com",
      "harsh@adaired.com"
      
    ],
    subject: `Message from ${Name} (${Email})`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
  </head>

  <body style="background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="border:1px solid rgb(0,0,0, 0.1);border-radius:3px;overflow:hidden">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%"><img src="https://react-email-demo-bdj5iju9r-resend.vercel.app/static/yelp-header.png" style="display:block;outline:none;border:none;text-decoration:none;max-width:100%" width="620" /></tr>
                      </tbody>
                    </table>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:20px;padding-bottom:0">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column">
                            <h1 style="font-size:32px;font-weight:bold;text-align:center">Hi <!-- -->Adaired<!-- -->,</h1>
                            <h2 style="font-size:26px;font-weight:bold;text-align:center">We got a new enquiry from <span style="color:blue;">${Name}</span>.</h2>
                            <p style="font-size:16px;line-height:24px;margin:16px 0"><b>Time: </b>${formatDate(
                              Date.now()
                            )}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0;margin-top:-5px"><b>Email: </b>${Email}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0;margin-top:-5px"><b>Phone: </b>${Phone}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0;margin-top:-5px"><b>Interest: </b>${Interest}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0;margin-top:-5px"><b>Message: </b>${Message}</p>
                          
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:45px 0 0 0">
              <tbody>
                <tr>
                  <td><img src="https://react-email-demo-bdj5iju9r-resend.vercel.app/static/yelp-footer.png" style="display:block;outline:none;border:none;text-decoration:none;max-width:100%" width="620" /></td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:12px;line-height:24px;margin:16px 0;text-align:center;color:rgb(0,0,0, 0.7)">© ${
              formatDate(Date.now()).split(",")[1]
            }
            | Adaired Digital Media Private Limited, B-509 Tower-B Bestech Business Tower, Sector 66, Mohali 160062, INDIA | www.adaired.com</p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>

</html>`,
  };

  // Function to send the email
  const sendMailPromise = (mailOptions: Mail.Options) =>
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
    // Send notification email to the user
    await sendMailPromise(userMailOptions);

    // Send email notification to you
    await sendMailPromise(mailOptions);

    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

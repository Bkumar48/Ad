import React, { FC } from "react";

const HomePageForm = ({
  Name,
  Email,
  Phone,
  Interest,
  Message,
}: {
  Name: string;
  Email: string;
  Phone: string;
  Interest: string;
  Message: string;
}) => {
  const formatDate = (dateString: number) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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

</html>
  `;
};

export default HomePageForm;

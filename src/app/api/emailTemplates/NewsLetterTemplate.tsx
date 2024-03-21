import Logo from "../../../../public/Logo.svg";
const NewsLetterTemplate = ({ email }: { email: string }) => {
  const formatDate = (dateString: number) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return `
  <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
      <tbody>
        <tr style="width:100%">
          <td><img alt="Adaired" height="50" src="${Logo}" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="170" />
            <p style="font-size:16px;line-height:26px;margin:16px 0">Hi <!-- -->Adaired<!-- -->,</p>
            <p style="font-size:16px;line-height:26px;margin:16px 0">We got a new subscriber.</p>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="text-align:center">
              <tbody>
                <tr>
                  <td><span style="font-size:20px; ">${email}</span></td>
                </tr>
              </tbody>
            </table>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
            <p style="font-size:12px;line-height:24px;margin:16px 0;text-align:center;color:rgb(0,0,0, 0.7)">© ${
              formatDate(Date.now()).split(",")[1]
            }
            | Adaired Digital Media Private Limited, B-509 Tower-B Bestech Business Tower, Sector 66, Mohali 160062, INDIA | www.adaired.com</p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>`;
};

export default NewsLetterTemplate;

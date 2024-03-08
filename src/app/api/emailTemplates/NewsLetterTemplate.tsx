const NewsLetterTemplate = ({ email }: { email: string }) => {
  return `
  <div>
  <div>
  <img
                              alt="AWS&#x27;s Logo"
                              height="45"
                              src="https://react-email-demo-bdj5iju9r-resend.vercel.app/static/aws-logo.png"
                              style="
                                display: block;
                                outline: none;
                                border: none;
                                text-decoration: none;
                              "
                              width="75"
                            />
  </div>
  <div>
  <h1>
  Testing Email</h1></div>
  </div>`;
};

export default NewsLetterTemplate;

// Usage: sendEmail(formData);
type FormData = {
  formId: string;
  Name: string;
  Email: string;
  Phone: string;
  Interest: string;
  Budget?: string;
  Message?: string;
  terms: boolean;
};

// export function sendEmail(data: FormData) {
//   // TODO: send email
//   console.log(data);
// }


export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
  }
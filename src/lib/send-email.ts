// Usage: sendEmail(formData);
type homePageFormData = {
  formId: string;
  Name: string;
  Email: string;
  Phone: string;
  Interest: string;
  Budget?: string;
  Message?: string;
  terms: boolean;
};

export function homePageFormSubmission(data: homePageFormData) {
  const apiEndpoint = "/api/homepageForm";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}

type getintouchFormData = {
  Name: string;
  Email: string;
  Message?: string;
};

export function getintouchFormSubmission(data: getintouchFormData) {
  const apiEndpoint = "/api/getintouchForm";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}

// type careerPageFormData = {
//   formId: string;
//   Name: string;
//   Email: string;
//   Phone: string;
//   CurrentDesignation: string;
//   Resume: string;
//   Message?: string;
// };

// export function careerPageFormSubmission(data: careerPageFormData) {
//   const apiEndpoint = "/api/careerpageForm";

//   fetch(apiEndpoint, {
//     method: "POST",
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .catch((err) => {
//       console.log(err);
//     });
// }

type contactPageFormData = {
  Name: string;
  Email: string;
  Message?: string;
  Phone: string;
};

export function contactPageFormSubmission(data: contactPageFormData) {
  const apiEndpoint = "/api/contactpageForm";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}

type newsLetterFormData = {
  Email: string;
};

export function newsLetterFormSubmission(data: newsLetterFormData) {
  const apiEndpoint = "/api/newsLetterForm";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}

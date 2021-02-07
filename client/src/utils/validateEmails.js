const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmails = (emails) => {
  emails = emails.replace(/,+$/, "");
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => {
      return re.test(email) === false;
    });
  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
  return;
};

export default validateEmails;

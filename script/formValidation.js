export function validateForm(form) {
  const formInput = {
    firstName: {
      name: form.querySelector(":scope > .name > .first-name > input"),
      span: form.querySelector(":scope > .name > .first-name > span"),
    },
    lastName: {
      name: form.querySelector(":scope > .name > .last-name > input"),
      span: form.querySelector(":scope > .name > .last-name > span"),
    },
    email: form.querySelector(":scope > .email-address"),
    queryType: form.querySelector(":scope > .query-type"),
    message: form.querySelector(":scope > .text-area-wrapper"),
    consent: form.querySelector(":scope > .consent-wrapper"),
  };

  const nameResult = validateName(formInput.firstName, formInput.lastName);
  const emailResult = validateEmail(formInput.email);
  const queryResult = validateQuery(formInput.queryType);
  const messageResult = validateMessage(formInput.message);
  const consentResult = validateConsent(formInput.consent);

  return (
    nameResult && emailResult && queryResult && messageResult && consentResult
  );
}

function setValid(input, span) {
  input.style.borderColor = "";
  span.hidden = true;
}

function setInvalid(input, span) {
  input.style.borderColor = "red";
  span.hidden = false;
}

function validateName(firstName, lastName) {
  const first = validateFirstName(firstName.name, firstName.span);
  const last = validateLastName(lastName.name, lastName.span);

  if (!first || !last) {
    return false;
  }
  return true;
}

function validateFirstName(firstName, span) {
  if (!firstName.value.trim()) {
    setInvalid(firstName, span);
    return false;
  } else {
    setValid(firstName, span);
    return true;
  }
}

function validateLastName(lastName, span) {
  if (!lastName.value.trim()) {
    setInvalid(lastName, span);
    return false;
  } else {
    setValid(lastName, span);
    return true;
  }
}

function validateEmail(email) {
  const emailInput = email.querySelector(":scope > input");
  const emailSpan = email.querySelector(":scope > span");

  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailInput.value.trim() || !regex.test(emailInput.value.trim())) {
    setInvalid(emailInput, emailSpan);
    return false;
  } else {
    setValid(emailInput, emailSpan);
    return true;
  }
}

function validateQuery(query) {
  const radioChecked = query.querySelectorAll(
    ":scope > .query-wrapper > label > input[name=query]:checked",
  );
  const span = query.querySelector(":scope > span");

  if (!radioChecked.length) {
    span.hidden = false;
    return false;
  } else {
    span.hidden = true;
    return true;
  }
}

function validateMessage(message) {
  const textArea = message.querySelector("textarea");
  const span = message.querySelector(":scope > span");

  if (!textArea.value.trim()) {
    setInvalid(textArea, span);
    return false;
  } else {
    setValid(textArea, span);
    return true;
  }
}

function validateConsent(consent) {
  const consentChecked = consent.querySelector(
    ":scope > label > input[type=checkbox]:checked",
  );
  const span = consent.querySelector(":scope > span");

  if (!consentChecked) {
    span.hidden = false;
    return false;
  } else {
    span.hidden = true;
    return true;
  }
}

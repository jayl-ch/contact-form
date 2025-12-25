export function validateForm(form) {
  const name = {
    first: {
      name: form.querySelector(":scope > .name > .first-name > input"),
      span: form.querySelector(":scope > .name > .first-name > span"),
    },
    last: {
      name: form.querySelector(":scope > .name > .last-name > input"),
      span: form.querySelector(":scope > .name > .last-name > span"),
    },
  };

  return validateName(name);
}

function validateName(name) {
  const first = validateFirstName(name.first.name, name.first.span);
  const last = validateLastName(name.last.name, name.last.span);

  if (!first || !last) {
    return false;
  }
  return true;
}

function validateFirstName(firstName, span) {
  if (!firstName.value.trim()) {
    firstName.style.borderColor = "orangered";
    span.hidden = false;
    return false;
  } else {
    firstName.style.borderColor = "";
    span.hidden = true;
    return true;
  }
}

function validateLastName(lastName, span) {
  if (!lastName.value.trim()) {
    lastName.style.borderColor = "orangered";
    span.hidden = false;
    return false;
  } else {
    lastName.style.borderColor = "";
    span.hidden = true;
    return true;
  }
}

function validateEmail() {}

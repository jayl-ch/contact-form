import { validateForm } from "./formValidation.js";
import { showToast } from "./toast.js";

const form = document.querySelector("form");
const toast = document.querySelector(".toast");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateForm(form)) return;
  showToast(toast);
});

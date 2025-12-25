function setToastMessage(t) {
  const span = t.querySelector(":scope > div > span");
  const p = t.querySelector("p");

  span.textContent = "Message sent";
  p.textContent = "Thanks for completing the form. We'll be in touch soon!";
}

export function showToast(toast) {
  toast.hidden = false;
  toast.style.top = "1rem";

  setToastMessage(toast);

  setTimeout(() => {
    toast.style.top = "-200px";
    toast.addEventListener(
      "transitionend",
      () => {
        toast.hidden = true;
      },
      { once: true },
    );
  }, 5000);
}

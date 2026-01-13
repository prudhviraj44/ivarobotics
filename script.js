const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  document.body.classList.toggle("mobile-open");
});

function handleSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  alert(`Thanks ${name}! 🚀\n\nYour message is ready.\n(Next step: connect this form to email.)`);

  // Reset form
  e.target.reset();
  return false;
}

const pass = document.getElementById("password");
const btnGenerate = document.querySelector(".btn");
const btnCopy = document.querySelector(".btncopy");
const copyMsg = document.querySelector(".copy");

function generatePass() {
  let randomChars =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
  let passLength = 8;
  let password = "";

  for (let i = 0; i < passLength; i++)
    password += randomChars[Math.floor(Math.random() * randomChars.length)];

  return password;
}
btnGenerate.addEventListener("click", function () {
  pass.value = generatePass();
});
btnCopy.addEventListener("click", function () {
  if (pass.value != "") {
    navigator.clipboard.writeText(pass.value);
    pass.classList.add("active");
    copyMsg.style.opacity = 1;
    setTimeout(() => {
      pass.classList.remove("active");
      copyMsg.style.opacity = 0;
    }, 2000);
  }
});

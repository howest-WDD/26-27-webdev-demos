const box = document.querySelector("#box");
const code = document.querySelector("#code");

document.querySelectorAll('input[name="position"]').forEach((input) => {
  input.addEventListener("change", () => {
    box.style.backgroundPosition = input.value;
    code.textContent = `background-position: ${input.value};`;
  });
});

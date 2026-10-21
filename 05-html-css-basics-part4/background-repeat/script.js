const box = document.querySelector("#box");
const code = document.querySelector("#code");

document.querySelectorAll('input[name="repeat"]').forEach((input) => {
  input.addEventListener("change", () => {
    box.style.backgroundRepeat = input.value;
    code.textContent = `background-repeat: ${input.value};`;
  });
});

const box = document.querySelector("#box");
const code = document.querySelector("#code");
const explanation = document.querySelector("#explanation");

const explanations = {
  cover:
    "De afbeelding schaalt tot het hele vak gevuld is. De korte zijde bepaalt de schaal, dus links en rechts wordt er iets afgesneden.",
  contain:
    "De afbeelding schaalt tot ze volledig zichtbaar is. De lange zijde bepaalt de schaal, dus er blijft lege ruimte boven en onder.",
  auto: "De afbeelding behoudt haar eigen grootte (400×200px). Ze is breder dan het vak, dus ze wordt afgesneden.",
  "100px 200px":
    "Vaste breedte en hoogte. De verhouding van de afbeelding wordt niet bewaard, dus ze wordt vervormd.",
  "100% 100%":
    "De afbeelding wordt uitgerekt tot de volledige breedte en hoogte van het vak. De verhouding gaat verloren.",
  "50%": "Enkel de breedte is ingesteld (150px). De hoogte volgt automatisch, zodat de verhouding behouden blijft.",
};

function update(value) {
  box.style.backgroundSize = value;
  code.textContent = `background-size: ${value};`;
  explanation.textContent = explanations[value];
}

document.querySelectorAll('input[name="size"]').forEach((input) => {
  input.addEventListener("change", () => update(input.value));
});

update(document.querySelector('input[name="size"]:checked').value);

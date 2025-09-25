let buttonDog = document.getElementById("btnDog");
let divDog = document.getElementById("outDog");

buttonDog.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(json => {
      let dog = Dog.fromRaw(json);
      dog.renderFrom(divDog);
    })
    .catch(error => renderError(error, divDog));
});

// Botão e container Cat
let buttonCat = document.getElementById("btnCat");
let divCat = document.getElementById("outCat");

buttonCat.addEventListener("click", function () {
  fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then(json => {
      let fact = PostCat.fromRaw(json);
      fact.renderFrom(divCat);
    })
    .catch(error => renderError(error, divCat));
});

// Função de erro genérica
function renderError(error, container) {
  container.innerHTML = "";

  let h2 = document.createElement("h2");
  h2.textContent = "Erro: " + error;

  container.appendChild(h2);
}

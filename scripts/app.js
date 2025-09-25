let buttonDog = document.getElementById("btnDog");
let div = document.getElementById("out");


buttonDog.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(json => {
      let dog = Dog.fromRaw(json);
      dog.renderFrom(div);
    });
});


button.addEventListener('click', function () {
 
    fetch('https://catfact.ninja/fact')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                let errorMessage = "Erro: Recurso não encontrado ou servidor não disponível. Tente novamente mais tarde.";
                throw new Error(errorMessage);
            }
        })
        .then(function (json) {
            let post = Post.fromRaw(json);
            post.renderFrom(div);
        })
        .catch(function (error) {
            renderError(error);
 
        })
});

function renderError(error) {
    div.innerHTML = "";

    let h2 = document.createElement(`h2`);
    h2.textContent = error;

    div.appendChild(h2);
}

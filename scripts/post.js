class Dog {
  constructor(image, status) {
    this.image = image;
    this.status = status;
  }

  static fromRaw(raw) {
    return new Dog(raw.message, raw.status);
  }

  renderFrom(container) {
    container.innerHTML = "";

    let img = document.createElement("img");
    img.src = this.image;
    img.alt = "Random Dog";
    img.style.maxWidth = "300px";

    container.appendChild(img);

  }
}

class PostCat {
  constructor(fact, length) {
    this.fact = fact;
    this.length = length;
  }

  static fromRaw(raw) {
    return new PostCat(raw.fact, raw.length);
  }

  renderFrom(container) {
    container.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.textContent = this.fact;

    let pBody = document.createElement("p");
    pBody.textContent = "Tamanho do texto: " + this.length;

    container.appendChild(h2);
    container.appendChild(pBody);
  }
}
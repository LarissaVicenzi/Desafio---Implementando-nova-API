class Post {
    constructor(fact, length) {
        this.fact = fact;
        this.length = length;
    }

    static fromRaw(raw) {
        return new Post(raw.fact, raw.length);
    }

    renderFrom(container) {
        container.innerHTML = "";

        let h2 = document.createElement(`h2`);
        h2.textContent = this.fact;

        let pBody = document.createElement(`p`);
        pBody.textContent =  this.length;

        container.appendChild(h2);
        container.appendChild(pBody);
    }

}
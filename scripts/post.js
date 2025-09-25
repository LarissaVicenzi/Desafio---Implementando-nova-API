class Post {
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    static fromRaw(raw) {
        return new Post(raw.userId, raw.id, raw.title, raw.body);
    }

    renderFrom(container) {
        container.innerHTML = "";

        let h2 = document.createElement(`h2`);
        h2.textContent = this.userId;

        let pTitle = document.createElement(`p`);
        pTitle.textContent = this.title;

        let pBody = document.createElement(`p`);
        pBody.textContent = this.body;

        container.appendChild(h2);
        container.appendChild(pTitle);
        container.appendChild(pBody);
    }

}
import { _img, _link, _title, _text } from "./default_values.js"

class ArticleCard extends HTMLElement {
    constructor() {
        super()
        this.card_div = document.createElement("div")
        this.container_img = document.createElement("div")
        this.img = document.createElement("img")
        this.textContainer = document.createElement("div")
        this.container_title = document.createElement("div")
        this.art_title = document.createElement("a")
        this.container_desc = document.createElement("div")
        this.desc = document.createElement("p")


        this.container_img.appendChild(this.img)
        this.container_title.appendChild(this.art_title)
        this.container_desc.appendChild(this.desc)
        this.textContainer.appendChild(this.container_title)
        this.textContainer.appendChild(this.container_desc)
        this.card_div.appendChild(this.container_img)
        this.card_div.appendChild(this.textContainer)
        this.appendChild(this.card_div)

        this.card_div.className = "article-container__div"
        this.container_img.className = "article__img"
        this.textContainer.className = "article-container-text__div"
        this.container_title.className = "article__title"
        this.container_desc.className = "article__p"
    }

    connectedCallback() {
        this.getAttribute("img") ? this.img.setAttribute("src", this.getAttribute("img")) : this.img.setAttribute("src", _img)
        this.getAttribute("title") ? this.art_title.textContent = this.getAttribute("title") : this.art_title.textContent = _title
        this.getAttribute("desc") ? this.desc.textContent = this.getAttribute("desc") : this.desc.textContent = _text
        this.getAttribute("link") ? this.art_title.setAttribute("href", this.getAttribute("link")) : this.art_title.setAttribute("href", _link)
    }
}

customElements.define("article-card", ArticleCard)
import { _link, _img, _text, _title } from "./default_values.js"

class ProductCard extends HTMLElement {
    constructor() {
        super()
        this.card_link = document.createElement("a")
        this.img = document.createElement("img")
        this.img_container = document.createElement("div")
        this.name = document.createElement("h2")
        this.name_container = document.createElement("div")
        this.description = document.createElement("p")
        this.description_container = document.createElement("div")

        this.img_container.appendChild(this.img)
        this.name_container.appendChild(this.name)
        this.description_container.appendChild(this.description)

        this.card_link.appendChild(this.img_container)
        this.card_link.appendChild(this.name_container)
        this.card_link.appendChild(this.description_container)
        this.appendChild(this.card_link);
        var main_container = document.getElementById("main__container__products")
        main_container.appendChild(this)


        this.className = "products__container";
        this.card_link.style = "text-decoration:none;"
        this.img_container.className = "container__img";
        this.name_container.className = "products__name";
        this.description_container.className = "product__descrption";

    }

    connectedCallback() {
        this.getAttribute("img") ? this.img.setAttribute("src", this.getAttribute("img")) : this.img.setAttribute("src", _img)
        this.getAttribute("product_name") ? this.name.textContent = this.getAttribute("product_name") : this.name.textContent = _title
        this.getAttribute("product_ds") ? this.description.textContent = this.getAttribute("product_ds") : this.description.textContent = _text
        this.getAttribute("product_link") ? this.card_link.setAttribute("href", this.getAttribute("product_link")) : this.card_link.setAttribute("href", _link)
    }
}

customElements.define("product-card", ProductCard)
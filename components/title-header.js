import { _img, _title } from "./default_values.js"

class TitleHeader extends HTMLElement {
    constructor() {
        super()
        let shadow = this.attachShadow({ mode: 'open' })
        this.container = document.createElement("div")
        this.box = document.createElement("div")
        this.h1 = document.createElement("h1")
        this.container.appendChild(this.box)
        this.box.appendChild(this.h1)
        shadow.appendChild(this.container)

        this.container.style = `
        position:relative;
        margin-top:6rem;
        box-sizing:border-box;
        display: flex;
        height: 100vh;
        margin: 0;
        padding: 8rem;
        place-content:center;
        `

        this.box.style = `
        margin: auto 1.5rem;
        `
        this.h1.style = `
        margin:3rem;
        font-family: Poppin, sans-serif;
        font-size: 12rem;
        text-align: center;
        color: var(--light-blue);
        outline: var(--blue) solid 1.5rem;
        outline-offset: 3rem;
        `
    }
    connectedCallback() {
        this.hasAttribute("title") ? this.h1.textContent = this.getAttribute("title") : this.h1.textContent = _title
        this.hasAttribute("img") ? this.container.style = "backgroung-url:url($(img))" : this.img.setAttribute("src", _img)

    }
}

customElements.define("title-header", TitleHeader)
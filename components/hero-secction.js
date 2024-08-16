import { _img, _title, _text } from "./default_values.js"

class HeroSection extends HTMLElement {
    constructor() {
        super()
        let shadow = this.attachShadow({ mode: 'open' })
        this.section = document.createElement("section")
        this.h2_container = document.createElement("div")
        this.h2 = document.createElement("h2")
        this.p_container = document.createElement("div")
        this.p = document.createElement("p")
        this.img_container = document.createElement("div")
        this.img = document.createElement("img")

        this.h2_container.appendChild(this.h2)
        this.p_container.appendChild(this.p)
        this.img_container.appendChild(this.img)

        this.section.appendChild(this.h2_container)
        this.section.appendChild(this.p_container)
        this.section.appendChild(this.img_container)
        shadow.appendChild(this.section)

        this.section.style = `
        position:relative;
        width:100vw;
        height:100vh;
        padding: 6rem 8rem;
        box-sizing:border-box;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        `

        this.h2_container.style = `
        padding: 4rem;
        background-color: var(--dark-blue);
        `
        this.h2.style = `
        margin:0;
        font-family: Abel, sans-serif;
        font-size:8rem;
        font-weight:normal;
        text-align: center;
        `

        this.p_container.style = `
        display:flex;
        padding: 0 12rem;
        `
        this.p.style = `
        font-family: Didactic Gothic, sans-serif;
        font-size: 3rem;
        text-align: center;
        `

        this.img_container.style = `
        display: flex;
        align-content: center;
        justify-content: center;
        object-fit: fill;
        filter: opacity(.7);
        `

        this.img.style = `
        height: 32rem;
        `
    }
    connectedCallback() {
        this.hasAttribute("s-header") ? this.h2.textContent = '- ' + this.getAttribute("s-header") + ' -' : this.h2.textContent = '- ' + _title + ' -'
        this.hasAttribute("s-content") ? this.p.textContent = this.getAttribute("s-content") : this.p.textContent = _text
        this.hasAttribute("img_src") ? this.img.setAttribute("src", this.getAttribute("img_src")) : this.img.setAttribute("src", _img)
        this.hasAttribute("img_alt") ? this.img.setAttribute("alt", this.getAttribute("img_alt")) : this.img.setAttribute("alt", 'alt_dsc')
    }
}

customElements.define("hero-section", HeroSection)
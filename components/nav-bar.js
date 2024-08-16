import { import_svg } from "./svg_loader.js"
let URLactual = window.location.pathname;
let ruta = "./icons/"
let indexLink = "./"
let pageLink = "./pages/"
if (URLactual !== '/index.html' && URLactual !== '/') {
    ruta = "." + ruta
    indexLink = "../"
    pageLink = "./"
}


let home_svg = await import_svg(ruta + "home.svg")
let pictures_svg = await import_svg(ruta + "picture.svg")
let seach_alt_svg = await import_svg(ruta + "search-alt.svg")
let shopping_cart_svg = await import_svg(ruta + "shopping-cart.svg")
let user_svg = await import_svg(ruta + "user.svg")
let users_alt_svg = await import_svg(ruta + "users-alt.svg")
let astronomy_svg = await import_svg(ruta + "astronomy.svg")

function li_content(text, link, svg_icon) {
    let li = document.createElement("li")
    let svg_container = document.createElement("div")
    let a = document.createElement("a")
    let span = document.createElement("span")
    svg_container.innerHTML = svg_icon
    let svg = svg_container.firstChild
    span.innerHTML = text

    a.setAttribute("href", link)
    a.appendChild(svg)
    a.appendChild(span)
    li.appendChild(a)

    li.style = `
    display:flex ;
    height: inherit ;
    margin: .1rem 0 ;
    list-style: none ;
    align-items: center ;
    `
    a.style = `
    display: flex ;
    font-family: Abel, sans-serif ;
    font-size: 2.5rem ;
    color: var(--light-blue) ;
    text-decoration: none ;
    align-items: center ;
    `
    svg.style = `
    fill: var(--light-blue) ;
    height: 2rem ;
    margin-right: 1rem;
    `

    return li
}

class nav_bar extends HTMLElement {
    constructor() {
        super()
        let shadow = this.attachShadow({ mode: 'open' })
        this.nav_header = document.createElement("header")
        this.nav_bar = document.createElement("nav")
        this.div_logo = document.createElement("div")
        this.div_logo.innerHTML = astronomy_svg
        this.div_login = document.createElement("div")
        this.div_login.innerHTML = user_svg

        let svg_login = this.div_login.firstChild
        let svg_logo = this.div_logo.firstChild
        this.ul_links = document.createElement("ul")
        this.ul_links.appendChild(li_content("Home", indexLink + "index.html", home_svg))
        this.ul_links.appendChild(li_content("Shop", pageLink + "shop.html", shopping_cart_svg))
        this.ul_links.appendChild(li_content("Gallery", pageLink + "gallery.html", pictures_svg))
        this.ul_links.appendChild(li_content("Articles", pageLink + "articles.html", seach_alt_svg))
        this.ul_links.appendChild(li_content("About Us", pageLink + "about_us.html", users_alt_svg))
        this.nav_bar.appendChild(this.div_logo)
        this.nav_bar.appendChild(this.ul_links)
        this.nav_bar.appendChild(this.div_login)
        this.nav_header.appendChild(this.nav_bar)
        shadow.appendChild(this.nav_header)

        this.nav_header.style = `
        position: fixed;
        height: 6rem;
        width: 100vw;
        top: 0;
        z-index: 200;
        `

        this.nav_bar.style = `
        display:flex;
        padding: 1rem 2rem;
        `

        this.div_logo.style = `
        display: flex;
        height: 4rem;
        justify-content: flex-start ;
        flex-grow:1;
        `
        this.div_login.style = `
        display: flex;
        height: 4rem;
        justify-content: flex-end;
        flex-grow:1;
        `
        svg_login.style = "fill:var(--light-blue) ; width: 2.5rem "
        svg_logo.style = "fill:var(--light-blue); "
        this.ul_links.style = `
        display: flex;
        height: 4rem;
        width: 60rem;
        margin:0;
        padding:0;
        justify-content:space-between;
        `
    }
}

customElements.define("nav-bar", nav_bar);
const unnecessary_atributes = [
    "xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
    "xmlns:svg=\"http://www.w3.org/2000/svg\"",
    "id=\"Capa_1\"",
    "style=\"enable-background:new 0 0 512 512 \"",
    "xml:space=\"preserve\"",
    "width=\"512\"",
    "height=\"512\"",
    "id=\"svg9\"",
    "width=\"128\"",
    "height=\"128\"",

]

const import_svg = async (svg_route) => {
    return await fetch(svg_route)
        .then(res => res.text()
            .then(data => data.substring(data.search("<svg")))
            .then(sub => {
                for (let index = 0; index < unnecessary_atributes.length; index++) {
                    const element = unnecessary_atributes[index]
                    sub = sub.replace(element, "")
                }
                return sub
            }
            ))
}

export { import_svg }

const actual_location = window.location.pathname
let rootDirectory = "./"
if (actual_location !== '/index.html' && actual_location !== '/') {
    rootDirectory = "../"
}

const _img = rootDirectory + "images/default.jpg"
const _link = rootDirectory + "pages/error_404.html"
const _title = "Voluptatem, dolorum?"
const _text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloremque perferendis distinctio blanditiis itaque reiciendis iure nam a veniam porro consequuntur ea, omnis qui aut sint at voluptates."


export { rootDirectory, _img, _link, _text, _title }
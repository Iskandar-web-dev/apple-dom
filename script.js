const iphonesColors = {
    blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-storage-select-202209-6-7inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660691793956",
    purple: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027938735",
    midnight: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027925267",
    starlight: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027935971",
    red: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-storage-select-202209-6-7inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660691793943"
}   

let applesBtn = document.querySelectorAll('button[data-apple]')
let img = document.querySelector('.imgg')

applesBtn.forEach(btn => {
    btn.onclick = () => {
        let key = btn.innerHTML
        img.style.backgroundImage = `url(${iphonesColors[key]})`
    }
})
let openBtns = document.querySelectorAll('.seeAll')
let modlBG = document.querySelector('.modal_bg')
let modal = document.querySelector('.modal_custom')
let closeBtns = document.querySelectorAll('.close')

function openClose(arr, func) {
    arr.forEach(btn => {
        btn.onclick = () => {
            func()
        }
    })      
}

openClose(openBtns, openModal)
openClose(closeBtns, closeModal)

function openModal() {
    modal.style.display = "block"
    modlBG.style.display = "block"
    setTimeout(() => {
        modal.style.opacity = 1
        modlBG.style.opacity = 1
        modal.style.scale = 1 
        modal.style.rotate = "0deg"
    }, 200)
}
function closeModal() {
    modal.style.opacity = 0
    modlBG.style.opacity = 0
    modal.style.scale = .1 
    setTimeout(() => {
        modal.style.display = "none"
        modlBG.style.display = "none"
    }, 200)
}

// start iphone functions
let accordion = document.querySelectorAll('.accordion')
let hr = document.querySelector('.hropen')

accordion.forEach((el) => {

el.onclick = () => {
    let ac = hr.nextElementSibling

    if(ac.style.maxHeight) {
        document.querySelectorAll('.acontent').forEach((i) => i.style.maxHeight = null)
    } else {
        document.querySelectorAll('.acontent').forEach((i) => i.style.maxHeight = null)
        ac.style.maxHeight = '1000px'
    }
  
  
}
})
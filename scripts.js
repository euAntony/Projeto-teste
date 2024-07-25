let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelector('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelector('.ul li')
let list = container.querySelector('.list')

let active = 1
let firtsPosition = 1
let lastPosition = items.length -1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotOld = indicator.querySelector('ul li.active')
    dotOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('number').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {
    list.style.setProperty()
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    active = active - 1 < firtsPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}

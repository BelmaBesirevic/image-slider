const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.slider-img')
const dots = document.querySelector('.dots')

let slideNum = 1
const length = images.length

for (let i = 0; i < length; i++) {
  const div = document.createElement('div')
  div.classList.add('dot')
  dots.appendChild(div)
}

const dot = document.querySelectorAll('.dot')
dot[0].style.backgroundColor = 'white'

const resetBg = () => {
  dot.forEach((d) => {
    d.style.backgroundColor = 'transparent'
  })
}

dot.forEach((d, i) => {
  d.addEventListener('click', () => {
    resetBg()
    slider.style.transform = `translateX(-${i * 640}px)`
    slideNum = i + 1
    d.style.backgroundColor = 'white'
  })
})

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNum * 640}px)`
  slideNum++
}
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNum - 2) * 640}px)`
  slideNum--
}
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`
  slideNum = 1
}

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 640}px)`
  slideNum = length
}

const changeColor = () => {
  resetBg()
  dot[slideNum - 1].style.backgroundColor = 'white'
}

rightArrow.addEventListener('click', () => {
  slideNum < length ? nextSlide() : getFirstSlide()
  changeColor()
})

leftArrow.addEventListener('click', () => {
  slideNum > 1 ? prevSlide() : getLastSlide()
  changeColor()
})

import './style.styl'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const approachImg = document.querySelector('.approach-sec__img-wrap')
const approachTitle = document.querySelector('.approach-sec__title-fg')
// approachTitle.style.opacity = '0.5'
let approachTitleMask = approachImg.getBoundingClientRect().left - approachTitle.getBoundingClientRect().left
// console.log(approachTitle.getBoundingClientRect().left)
// console.log(approachImg.offsetLeft, approachImg.getBoundingClientRect().left)
approachTitle.style.clipPath = 'inset(0 0 -50px ' + approachTitleMask + 'px )'

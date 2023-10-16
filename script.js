'use strict'
const onClickBurger = function () {
  document.querySelector('.menu__body').classList.toggle('menu__open')
  document.querySelector('.header__burger').classList.toggle('menu__open')
}
document.querySelector('.header__burger').addEventListener('click', onClickBurger)

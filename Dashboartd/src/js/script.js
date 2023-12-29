//БУРГЕР
let menuBtn = document.querySelector('.menu-btn');
 let menu= document.querySelector('.menu__list');

 menuBtn.addEventListener('click', function(){
 menuBtn.classList.toggle('active');
 menu.classList.toggle('active');
 })

const asideToggle = document.querySelector('.js-aside-toggle');
const aside = document.querySelector('.js-aside');
const mainContent = document.querySelector('.js-main');



asideToggle.addEventListener('click', () => {
    aside.classList.toggle('minify');   
    mainContent.classList.toggle('wide');

    
})
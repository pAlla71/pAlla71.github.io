$("img.img-svg").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

//ТАБИ
const tabNavItems = document.querySelectorAll('.tubs-portfolio__item');
const tabItems = document.querySelectorAll('.portfolio-tabs__items');

document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest('.tubs-portfolio__item')){
        tabNavItems.forEach((tabNavItems, index) => {
            if(tabNavItems.classList.contains('active')){
                currentActiveIndex = index;
                tabNavItems.classList.remove('active');
            }
            if(tabNavItems === targetElement){
                newActiveIndex = index;
            }
        });
        targetElement.classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
    }
});

//БУРГЕР
const btn = document.querySelector(".button");
const burger = document.querySelector(".header_burger");
burger.addEventListener("click",function(e){
    btn.classList.toggle("show")
   
});


 $(document).ready(function () {
   $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
       
         $('body').toggleClass('lock');
    });
 });


//MODAL
$(document).ready(function () {

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal-close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow');
    });
  
    
    });

   
    $('#consultation form').validate({
        rules: {
            name:"required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name:"Будь ласка, введіть своє ім'я",
            phone: "Будь ласка, введіть номер телефона" ,
            email: {
                required: "Будь ласка, введіть  електронну адресу",
                email: "Невірно введена адреса пошти"
            }
        }
    })

    $('input[name=phone]').mask("+38 (999) 999-99-99");
        
    $('form').submit (function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return
        }
   
    

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay').fadeIn('slow');



        $('form').trigger('reset');
    });
    return false;

    
})

// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.menu-item'),
//     hamburger = document.querySelector('.header_burger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('header_burger_active');
//         menu.classList.toggle('menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('header_burger_active');
//             menu.classList.toggle('menu_active');
//         })
//     })
// })












   
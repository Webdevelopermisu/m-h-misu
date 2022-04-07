$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $(".navbar").addClass("stycky")
        }else{
            $(".navbar").removeClass("stycky")
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // slide up script
    $(".scroll-up-btn").click(function() {
        $('html').animate({scrollTop: 0});
    });


    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    // typeing animation

    var typed = new Typed(".typing",{
        strings:["Web Desinger","Web Devoloper","Freelancer"],
        typeSpeed:150,
        backSpeed:100,
        loop:true
    });
    
    var typed = new Typed(".typing-2",{
        strings:["Web Desinger","Web Devoloper","Freelancer"],
        typeSpeed:150,
        backSpeed:100,
        loop:true
    })


    // owl carouser script

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }

    })
});


// active navbar 

const li = document.querySelectorAll('.menu-btn');
const sec = document.querySelectorAll('section');

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 100 < sec[len].offsetTop) {
        
    }
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active")
}
activeMenu();
window.addEventListener("scroll",activeMenu)

gsap.from(".bar abbr",{
    scrollTrigger:".bar",
    left:0,
    ease:Power2.easeInOut,
    duration:3,
    stagger:0.1
});
gsap.from(".bar span",{
    scrollTrigger:".bar",
    width:"0px",
    ease:Power2.easeInOut,
    duration:3,
    stagger:0.1
});







function popup(){
    let alert = new alert("Thanks. Message sent successfully");
}
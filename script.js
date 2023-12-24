const contactForm = document.getElementById('contact-form');

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
        .then(() => {
            window.location.href = "index.html";
        })
        .catch((e) => alert("Tidak Dapat Mengirim pesan, Periksa koneksi inernet anda!"));
});

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 50){
            $('.header-atas').addClass("sticky");
        }else{
            $('.header-atas').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Photographer", "Designer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
});
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

// menu hamburgers

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-btn');
    // const menu = document.querySelector('.menu');
    let menuOpen = false;

    menuIcon.addEventListener('click', function() {
        if (!menuOpen) {
            // menu.style.display = 'block';
            menuIcon.innerHTML = '<i class="fas fa-times"></i>';
            menuOpen = true;
        } else {
            // menu.style.display = 'none';
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
            menuOpen = false;
        }
    });
});

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


// dark & light mode toggle

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the current mode to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        document.getElementById('toggleButton').innerHTML = '<i class="fas fa-moon" style="color: black;"></i>';
        document.getElementById('toggleButton').classList.remove('light-mode');
        
        // Mengambil semua elemen <a> di dalam dokumen
        var links = document.getElementsByTagName("a");

        // Mengakses setiap elemen <a> satu per satu
        for(var i = 0; i < links.length; i++) {
            // Lakukan sesuatu dengan setiap elemen <a>, misalnya:
            links[i].style.color = "black";
            links[i].style.fontWeight = "500";
        }

        var kotak = document.getElementsByClassName("kotak");

        for(var k = 0; k < kotak.length; k++) {
            kotak[k].style.color = "white";
        }

        document.getElementsByClassName("text-1")[0].style.color = "black";
        document.getElementsByClassName("text-3")[0].style.color = "black";
        document.getElementsByClassName("text")[0].style.color = "black";

    } else {
        localStorage.setItem('theme', 'light');
        document.getElementById('toggleButton').innerHTML = '<i class="fas fa-sun" style="color: yellow;"></i>';
        document.getElementById('toggleButton').classList.add('light-mode');
        
        // Mengambil semua elemen <a> di dalam dokumen
        var links = document.getElementsByTagName("a");

        // Mengakses setiap elemen <a> satu per satu
        for(var i = 0; i < links.length; i++) {
            // Lakukan sesuatu dengan setiap elemen <a>, misalnya:
            links[i].style.color = "white";
        }

        var kotak = document.getElementsByClassName("kotak");

        for(var k = 0; k < kotak.length; k++) {
            kotak[k].style.color = "white";
        }

        document.getElementsByClassName("text-1")[0].style.color = "white";
        document.getElementsByClassName("text-3")[0].style.color = "white";
        document.getElementsByClassName("text")[0].style.color = "white";
    }
}

// Function to load the saved mode from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme == 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggleButton').innerHTML = '<i class="fas fa-moon" style="color: black;"></i>';
        document.getElementById('toggleButton').classList.remove('light-mode'); 
        var links = document.getElementsByTagName("a");

        for(var i = 0; i < links.length; i++) {
            links[i].style.color = "black";
            links[i].style.fontWeight = "500";
        }

        var kotak = document.getElementsByClassName("kotak");

        for(var k = 0; k < kotak.length; k++) {
            kotak[k].style.color = "white";
        }

        document.getElementsByClassName("text-1")[0].style.color = "black";
        document.getElementsByClassName("text-3")[0].style.color = "black";
        document.getElementsByClassName("text")[0].style.color = "black";
    }
}

loadTheme();
// =============================================================== //

// Event listener for the toggle button
document.getElementById('toggleButton').addEventListener('click', toggleDarkMode);

// Load the theme on page load
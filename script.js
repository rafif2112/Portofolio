document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');
    const menuIcon = document.querySelector('.menu-btn');
    const menuList = document.getElementById("menu-list");
    const toggleButton = document.getElementById('toggleButton');
    let menuOpen = false;

    // Contact Form Submission
    contactForm.addEventListener("submit", function(e) {
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
        .catch(() => {
            alert("Tidak Dapat Mengirim pesan, Periksa koneksi internet anda!");
        });
    });

    // Menu Hamburger Toggle
    menuIcon.addEventListener('click', function() {
        if (!menuOpen) {
            menuIcon.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
        }
        menuOpen = !menuOpen;
        menuList.classList.toggle("hidden");
        updateULBackground(menuOpen);
    });

    // Sticky Navbar and Scroll-up Button
    $(window).scroll(function() {
        const scrollY = this.scrollY;
        if (scrollY > 50) {
            $('.header-atas').addClass("sticky");
        } else {
            $('.header-atas').removeClass("sticky");
        }

        if (scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up Button Click
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // Typing Animation
    new Typed(".typing", {
        strings: ["Web Developer", "Photographer", "Designer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    // Dark & Light Mode Toggle
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        toggleButton.innerHTML = isDarkMode ? 
            '<i class="fas fa-moon" style="color: black;"></i>' : 
            '<i class="fas fa-sun" style="color: yellow;"></i>';
        toggleButton.classList.toggle('light-mode', !isDarkMode);
        menuIcon.style.color = isDarkMode ? 'black' : 'white';

        updateLinkColors(isDarkMode);
        updateBoxColors(isDarkMode);
        updateTextColors(isDarkMode);
        updateULBackground(menuOpen); // Update UL background based on current state
    }

    function updateLinkColors(isDarkMode) {
        const links = document.getElementsByTagName("a");
        const color = isDarkMode ? "black" : "";
        for (let link of links) {
            link.style.color = color;
            if (isDarkMode) link.style.fontWeight = "500";
        }
    }

    function updateBoxColors(isDarkMode) {
        const boxes = document.querySelectorAll(".kotak");
        const color = isDarkMode ? "#d7d7d7" : ""; // Default in dark mode, light blue in light mode
        const form = document.querySelectorAll(".nama, .imel, .subjek, .subject");
        const warna = isDarkMode ? "#d7d7d7" : "";
        const card = document.querySelectorAll(".card");
        const bg = isDarkMode ? "#d7d7d7" : "";
        boxes.forEach(box => {
            box.style.backgroundColor = color;
            box.style.color = isDarkMode ? "black" : "white";
        });

        form.forEach(form => {
            form.style.backgroundColor = warna;
            form.style.color = isDarkMode ? "black" : "white";
        });

        card.forEach(card => {
            card.style.backgroundColor = bg;
        });
    }

    function updateTextColors(isDarkMode) {
        const textColor = isDarkMode ? "black" : "";
        const color = isDarkMode ? "yellow" : "";
        const textElements = [
            document.getElementsByClassName("text-1")[0],
            document.getElementsByClassName("text-3")[0],
        ];
        for (let element of textElements) {
            element.style.color = textColor;
            element.style.fontWeight = "600";
        }
        const text = document.getElementsByClassName("text");
        for (let t of text) {
            t.style.color = textColor;
        }

        const title = document.querySelectorAll(".header-left, .span");
        for (let t of title) {
            t.style.color = color;
            t.style.webkitTextStroke = "1px #ffdd00";
        }
    }

    function updateULBackground(menuOpen) {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const ulElements = document.getElementsByTagName("ul");
        const backgroundColor = (menuOpen && isDarkMode) ? "rgba(255, 255, 255, 0.7)" : (menuOpen ? "rgba(0, 0, 0, 0.423)" : "");
        for (let ul of ulElements) {
            ul.style.backgroundColor = backgroundColor;
        }
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            toggleButton.innerHTML = '<i class="fas fa-moon" style="color: black;"></i>';
            toggleButton.classList.remove('light-mode');
            menuIcon.style.color = 'black';
            updateLinkColors(true);
            updateBoxColors(true);
            updateTextColors(true);
            updateULBackground(menuOpen); // Update UL background based on current state
        } else {
            toggleButton.innerHTML = '<i class="fas fa-sun" style="color: yellow;"></i>';
            toggleButton.classList.add('light-mode');
            menuIcon.style.color = 'white';
            updateLinkColors(false);
            updateBoxColors(false);
            updateTextColors(false);
            updateULBackground(menuOpen); // Update UL background based on current state
        }
    }

    loadTheme();
    toggleButton.addEventListener('click', toggleDarkMode);
});

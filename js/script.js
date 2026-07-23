// ANIMASI MUNCUL SAAT SCROLL

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// EFEK NAVBAR SAAT SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
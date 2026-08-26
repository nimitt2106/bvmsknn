/* =========================================================
   BVMSKN WEBSITE
   COMPLETE JAVASCRIPT ENGINE
   ========================================================= */


/* =========================================================
   LOADING SCREEN
   ========================================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hide");

            setTimeout(function () {

                loader.style.display = "none";

            }, 1000);

        }, 2500);

    }

});


/* =========================================================
   SAFETY: REMOVE LOADER EVEN IF SOMETHING GOES WRONG
   ========================================================= */

setTimeout(function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.classList.add("hide");

        setTimeout(function () {

            loader.style.display = "none";

        }, 1000);

    }

}, 7000);


/* =========================================================
   THEME SWITCH
   ========================================================= */

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeButton.innerHTML = "☀";

        } else {

            themeButton.innerHTML = "◐";

        }

    });

}


/* =========================================================
   SMOOTH SCROLL BUTTON
   ========================================================= */

const scrollButtons = document.querySelectorAll("[data-scroll]");

scrollButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const target = document.querySelector(
            button.dataset.scroll
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */

const revealElements = document.querySelectorAll(

    ".section-label, " +
    ".about-title, " +
    ".about-text, " +
    ".campus-card, " +
    ".stat, " +
    ".gallery-item, " +
    ".activity, " +
    ".staff, " +
    ".quote-section h2, " +
    ".contact-heading, " +
    ".contact-card"

);


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("show");

    });

}


/* =========================================================
   CUSTOM CURSOR
   DESKTOP ONLY
   ========================================================= */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");


if (
    cursor &&
    cursorRing &&
    window.matchMedia("(pointer: fine)").matches
) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;


    document.addEventListener("mousemove", function (event) {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

    });


    function animateCursor() {

        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        cursorRing.style.left = ringX + "px";
        cursorRing.style.top = ringY + "px";

        requestAnimationFrame(animateCursor);

    }


    animateCursor();


    const interactiveElements = document.querySelectorAll(

        "a, button, .campus-card, .gallery-item, .activity, .stat"

    );


    interactiveElements.forEach(function (element) {

        element.addEventListener("mouseenter", function () {

            cursorRing.classList.add("cursor-active");

        });


        element.addEventListener("mouseleave", function () {

            cursorRing.classList.remove("cursor-active");

        });

    });

}


/* =========================================================
   CAMPUS CARD 3D TILT
   DESKTOP ONLY
   ========================================================= */

if (window.matchMedia("(pointer: fine)").matches) {

    const cards = document.querySelectorAll(".campus-card");


    cards.forEach(function (card) {

        card.addEventListener("mousemove", function (event) {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -6;

            const rotateY =
                ((x - centerX) / centerX) * 6;


            card.style.transform =

                "perspective(1000px) " +
                "rotateX(" + rotateX + "deg) " +
                "rotateY(" + rotateY + "deg) " +
                "scale(1.02)";

        });


        card.addEventListener("mouseleave", function () {

            card.style.transform = "";

        });

    });

}


/* =========================================================
   GALLERY IMAGE TILT
   DESKTOP ONLY
   ========================================================= */

if (window.matchMedia("(pointer: fine)").matches) {

    const galleryItems =
        document.querySelectorAll(".gallery-item");


    galleryItems.forEach(function (item) {

        item.addEventListener("mousemove", function (event) {

            const rect = item.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateY =
                (x - 0.5) * 8;

            const rotateX =
                (y - 0.5) * -8;


            item.style.transform =

                "perspective(900px) " +
                "rotateX(" + rotateX + "deg) " +
                "rotateY(" + rotateY + "deg) " +
                "scale(1.02)";

        });


        item.addEventListener("mouseleave", function () {

            item.style.transform = "";

        });

    });

}


/* =========================================================
   HERO PARALLAX
   ========================================================= */

const hero = document.querySelector(".hero");
const orbs = document.querySelectorAll(".orb");


if (
    hero &&
    orbs.length > 0 &&
    window.matchMedia("(pointer: fine)").matches
) {

    hero.addEventListener("mousemove", function (event) {

        const x =
            event.clientX /
            window.innerWidth - 0.5;

        const y =
            event.clientY /
            window.innerHeight - 0.5;


        orbs.forEach(function (orb, index) {

            const strength =
                (index + 1) * 18;


            orb.style.transform =

                "translate(" +
                x * strength + "px, " +
                y * strength + "px)";

        });

    });


    hero.addEventListener("mouseleave", function () {

        orbs.forEach(function (orb) {

            orb.style.transform = "";

        });

    });

}


/* =========================================================
   HERO SCROLL EFFECT
   ========================================================= */

const heroTitle =
    document.querySelector(".hero h1");


window.addEventListener(
    "scroll",

    function () {

        if (!heroTitle) return;

        const scrollY =
            window.scrollY;


        if (
            scrollY <
            window.innerHeight
        ) {

            const scale =
                Math.max(
                    0.82,
                    1 - scrollY * 0.0002
                );


            heroTitle.style.transform =

                "translateY(" +
                scrollY * 0.18 +
                "px) scale(" +
                scale +
                ")";


            heroTitle.style.opacity =

                Math.max(
                    0,
                    1 - scrollY / 800
                );

        }

    },

    {
        passive: true
    }

);


/* =========================================================
   MAGNETIC BUTTON EFFECT
   ========================================================= */

if (window.matchMedia("(pointer: fine)").matches) {

    const magneticButtons = document.querySelectorAll(

        ".explore-button, " +
        ".funky-button"

    );


    magneticButtons.forEach(function (button) {

        button.addEventListener("mousemove", function (event) {

            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =

                "translate(" +
                x * 0.12 +
                "px, " +
                y * 0.12 +
                "px)";

        });


        button.addEventListener("mouseleave", function () {

            button.style.transform = "";

        });

    });

}


/* =========================================================
   CLICK RIPPLE
   ========================================================= */

document.addEventListener("click", function (event) {

    const ripple =
        document.createElement("div");


    ripple.className =
        "click-ripple";


    ripple.style.left =
        event.clientX + "px";


    ripple.style.top =
        event.clientY + "px";


    document.body.appendChild(ripple);


    setTimeout(function () {

        ripple.remove();

    }, 900);

});


/* =========================================================
   ACTIVITY HOVER EFFECT
   ========================================================= */

if (window.matchMedia("(pointer: fine)").matches) {

    const activities =
        document.querySelectorAll(".activity");


    activities.forEach(function (activity) {

        activity.addEventListener("mouseenter", function () {

            activity.classList.add("activity-active");

        });


        activity.addEventListener("mouseleave", function () {

            activity.classList.remove("activity-active");

        });

    });

}


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(

    "scroll",

    function () {

        if (!navbar) return;


        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    },

    {
        passive: true
    }

);


/* =========================================================
   KEYBOARD SHORTCUT
   D = DARK MODE
   ========================================================= */

document.addEventListener("keydown", function (event) {

    if (
        event.key.toLowerCase() === "d" &&
        !event.ctrlKey &&
        !event.metaKey
    ) {

        const activeElement =
            document.activeElement;


        const isTyping =

            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA"
            );


        if (!isTyping) {

            document.body.classList.toggle("dark");

        }

    }

});


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(

    "BVMSKN WEBSITE ENGINE ONLINE 🚀"

);
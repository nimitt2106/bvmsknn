/* =========================================================
   BVMSKN FUNKY WEBSITE
   MASTER JAVASCRIPT — CLEAN VERSION
   ========================================================= */


/* =========================================================
   OFFICIAL WEBSITES
   ========================================================= */

const officialSchoolWebsite =
    "https://www.bvmskn.edu.in";

const staffWebsite =
    "https://www.bvmskn.edu.in/staffs-details.php";


/* =========================================================
   LOADER
   ========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {
            loader.classList.add("hide");
        }, 2800);

    }

});


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let ringX = mouseX;
let ringY = mouseY;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    if (cursor) {

        cursor.style.left =
            mouseX + "px";

        cursor.style.top =
            mouseY + "px";

    }

});


function animateCursor() {

    if (cursorRing) {

        ringX +=
            (mouseX - ringX) * 0.12;

        ringY +=
            (mouseY - ringY) * 0.12;

        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";

    }

    requestAnimationFrame(
        animateCursor
    );

}

animateCursor();


/* =========================================================
   CURSOR HOVER EFFECT
   ========================================================= */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .campus-card, .gallery-item, .activity, .stat"
    );


interactiveElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            if (!cursorRing) return;

            cursorRing.style.width =
                "75px";

            cursorRing.style.height =
                "75px";

            cursorRing.style.background =
                "rgba(255,77,0,0.08)";

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            if (!cursorRing) return;

            cursorRing.style.width =
                "42px";

            cursorRing.style.height =
                "42px";

            cursorRing.style.background =
                "transparent";

        }
    );

});


/* =========================================================
   THEME SWITCH
   ========================================================= */

const themeButton =
    document.getElementById(
        "themeButton"
    );


if (themeButton) {

    themeButton.addEventListener(
        "click",
        (event) => {

            /*
             * Stop this click from triggering
             * any other document click effects.
             */

            event.stopPropagation();

            document.body.classList.toggle(
                "dark"
            );

        }
    );

}


/* =========================================================
   SMOOTH SCROLL BUTTONS
   ========================================================= */

const scrollButtons =
    document.querySelectorAll(
        "[data-scroll]"
    );


scrollButtons.forEach(button => {

    button.addEventListener(
        "click",
        (event) => {

            const targetSelector =
                button.dataset.scroll;

            const target =
                document.querySelector(
                    targetSelector
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-label, " +
        ".about-title, " +
        ".about-text, " +
        ".campus-card, " +
        ".stat, " +
        ".gallery-item, " +
        ".activity, " +
        ".quote-section h2, " +
        ".contact-heading, " +
        ".contact-card, " +
        ".staff-card"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    /*
                     * Stop observing after
                     * the animation happens.
                     */

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(
        element
    );

});


/* =========================================================
   3D CAMPUS CARD TILT
   ========================================================= */

const cards =
    document.querySelectorAll(
        ".campus-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) /
                    centerY) * -7;

            const rotateY =
                ((x - centerX) /
                    centerX) * 7;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                `perspective(1000px)
                 rotateX(0deg)
                 rotateY(0deg)
                 scale(1)`;

        }
    );

});


/* =========================================================
   GALLERY 3D TILT
   ========================================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


galleryItems.forEach(item => {

    item.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                item.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const rotateY =
                ((x / rect.width) -
                    0.5) * 8;

            const rotateX =
                ((y / rect.height) -
                    0.5) * -8;

            item.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.02)`;

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            item.style.transform =
                `perspective(900px)
                 rotateX(0deg)
                 rotateY(0deg)
                 scale(1)`;

        }
    );

});


/* =========================================================
   HERO PARALLAX
   ========================================================= */

const hero =
    document.querySelector(
        ".hero"
    );

const orbs =
    document.querySelectorAll(
        ".orb"
    );


if (hero) {

    hero.addEventListener(
        "mousemove",
        (event) => {

            const x =
                event.clientX /
                window.innerWidth -
                0.5;

            const y =
                event.clientY /
                window.innerHeight -
                0.5;

            orbs.forEach(
                (orb, index) => {

                    const strength =
                        (index + 1) * 25;

                    orb.style.transform =
                        `translate(
                            ${x * strength}px,
                            ${y * strength}px
                        )`;

                }
            );

        }
    );

}


/* =========================================================
   HERO SCROLL PARALLAX
   ========================================================= */

const heroTitle =
    document.querySelector(
        ".hero h1"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollY =
            window.scrollY;

        if (
            heroTitle &&
            scrollY <
                window.innerHeight
        ) {

            heroTitle.style.transform =
                `translateY(
                    ${scrollY * 0.25}px
                )
                scale(
                    ${Math.max(
                        0.8,
                        1 -
                        scrollY * 0.00025
                    )}
                )`;

            heroTitle.style.opacity =
                Math.max(
                    0,
                    1 -
                    scrollY / 650
                );

        }

    }
);


/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".explore-button, " +
        ".funky-button, " +
        ".staff-button"
    );


magneticButtons.forEach(button => {

    button.addEventListener(
        "mousemove",
        (event) => {

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
                `translate(
                    ${x * 0.15}px,
                    ${y * 0.15}px
                )`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0,0)";

        }
    );

});


/* =========================================================
   CLICK RIPPLE
   ========================================================= */

document.addEventListener(
    "click",
    (event) => {

        /*
         * Don't create ripples for
         * clicks outside the page.
         */

        const ripple =
            document.createElement(
                "div"
            );

        ripple.style.position =
            "fixed";

        ripple.style.left =
            event.clientX + "px";

        ripple.style.top =
            event.clientY + "px";

        ripple.style.width =
            "10px";

        ripple.style.height =
            "10px";

        ripple.style.border =
            "2px solid #ff4d00";

        ripple.style.borderRadius =
            "50%";

        ripple.style.pointerEvents =
            "none";

        ripple.style.zIndex =
            "99997";

        ripple.style.transform =
            "translate(-50%, -50%)";

        document.body.appendChild(
            ripple
        );


        const animation =
            ripple.animate(

                [
                    {
                        width: "10px",
                        height: "10px",
                        opacity: 1
                    },

                    {
                        width: "180px",
                        height: "180px",
                        opacity: 0
                    }

                ],

                {
                    duration: 700,
                    easing:
                        "cubic-bezier(.2,.8,.2,1)"
                }

            );


        animation.onfinish = () => {

            ripple.remove();

        };

    }
);


/* =========================================================
   ACTIVITY EFFECT
   ========================================================= */

const activities =
    document.querySelectorAll(
        ".activity"
    );


activities.forEach(activity => {

    activity.addEventListener(
        "mouseenter",
        () => {

            activity.style.transform =
                "skewX(-2deg)";

        }
    );


    activity.addEventListener(
        "mouseleave",
        () => {

            activity.style.transform =
                "skewX(0deg)";

        }
    );

});


/* =========================================================
   FLOATING NUMBERS
   ========================================================= */

const floatingElements =
    document.querySelectorAll(
        ".hero-number, .section-number"
    );


floatingElements.forEach(
    (element, index) => {

        element.animate(

            [
                {
                    transform:
                        "translateY(0px) rotate(0deg)"
                },

                {
                    transform:
                        "translateY(-15px) rotate(3deg)"
                },

                {
                    transform:
                        "translateY(0px) rotate(0deg)"
                }

            ],

            {
                duration:
                    3500 +
                    index * 500,

                iterations:
                    Infinity,

                easing:
                    "ease-in-out"
            }

        );

    }
);


/* =========================================================
   OFFICIAL WEBSITE INFORMATION LINKS
   ========================================================= */

/*
   IMPORTANT:
   
   We do NOT attach a redirect handler
   to every <a> element.

   Your HTML already contains the
   correct destinations.

   This prevents the Staff button
   from accidentally being redirected
   to the homepage.
*/


const informationElements =
    document.querySelectorAll(
        ".activity"
    );


informationElements.forEach(element => {

    element.style.cursor =
        "pointer";

});


/* =========================================================
   STAFF LINK SAFETY
   ========================================================= */

/*
   Force the Staff navigation link
   to use the official staff page.

   This is an extra safety layer.
*/

const staffLinks =
    document.querySelectorAll(
        'a[href*="staffs-details.php"]'
    );


staffLinks.forEach(link => {

    link.setAttribute(
        "href",
        staffWebsite
    );

    link.setAttribute(
        "target",
        "_blank"
    );

    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );

});


/* =========================================================
   KEYBOARD SHORTCUT
   Press D = Dark Mode
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase()
            === "d"
        ) {

            document.body.classList.toggle(
                "dark"
            );

        }

    }
);


/* =========================================================
   CONSOLE
   ========================================================= */

console.log(
`
╔══════════════════════════════════════╗
║          BVMSKN WEBSITE              ║
║                                      ║
║   CURIOUS MINDS.                     ║
║   BIG IDEAS.                         ║
║   ENDLESS POSSIBILITIES.             ║
║                                      ║
║   Website Engine: ONLINE             ║
║   Staff Link: CONNECTED              ║
╚══════════════════════════════════════╝
`
);
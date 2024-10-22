gsap.registerPlugin(ScrollTrigger);

// Animate the logo
let tl = gsap.timeline();
tl.fromTo(".logo", { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: "bounce.out", duration: 1 })
    .fromTo(".photo", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" })
    .fromTo([".hello", ".im", ".name", ".tag", ".desc", ".bg-wrapper"], { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 0.5, ease: "power2.out" })
    .fromTo(".social_icons", { x: -150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out" });

// Navigation links animation
const navLinks = document.querySelectorAll(".nav_container li");
navLinks.forEach((link, index) => {
    gsap.fromTo(link, { scale: 0, opacity: 0, y: -20 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, delay: index * 0.1, ease: "back.out(1.7)" });
});

// Hamburger menu animation
const hamburger_gsap = document.getElementById("menuIcon");
hamburger_gsap.addEventListener("click", () => {
    gsap.fromTo(navLinks, { y: 150, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1, delay: 0.7 });
});

// Second timeline (tl2)
const brand_imgs = document.querySelectorAll(".brand_img");
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "top -35%",
        scrub: true,
    },
});

tl2.fromTo(".brands h2", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
brand_imgs.forEach((img, index) => {
    tl2.fromTo(img, { scale: 0, opacity: 0, y: -20 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, delay: index * 0.1, ease: "back.out(1.7)" }, "<");
});

// Animate the about_me section
tl2.fromTo(".about_me", { x: -250, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
tl2.fromTo(".about_content", { x: 250, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

// Skills progress bars animation
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#skills",
        start: "top center",
        end: "top top",
        scrub: true,
    },
});

tl3.fromTo(".skill_txt", { x: -250, opacity: 0 }, { x: 0, opacity: 1 });

// Animate each progress bar width
document.querySelectorAll('.progress_bar .bars').forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    tl3.fromTo(bar, { width: '0%' }, { width: percentage + '%' });
});
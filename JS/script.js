/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SHOW SCROLL UP ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// Section 1
sr.reveal(".section-1-title ");
sr.reveal(".section-1-content p", { delay: 500 });
sr.reveal(".btn1", { delay: 600 });
sr.reveal(".section-1-right", { delay: 800, origin: "bottom" });

//Section 2
sr.reveal(".intro", { delay: 600 });
sr.reveal(".section-2-grid-left", { origin: "left" });
sr.reveal(".section-2-grid-right");

//Section 3
sr.reveal(".section-3-left h2", { origin: "left" });
sr.reveal(".section-3-left p", { delay: 700, origin: "left" });
sr.reveal(".html", { origin: "right" });
sr.reveal(".css", { origin: "right", delay: 300 });
sr.reveal(".js", { origin: "right", delay: 500 });
sr.reveal(".react", { origin: "right", delay: 700 });

//Section 4

sr.reveal(".section-4-head");
sr.reveal(".section-4-text", { origin: "left" });
sr.reveal(".section-4-left img", { origin: "bottom" });
sr.reveal(".section-4-right img", { origin: "bottom" });

//hire
sr.reveal(".hire", { origin: "left" });

//Section 5
sr.reveal(".blog01", { origin: "left" });
sr.reveal(".blog02", { origin: "right" });
sr.reveal(".blog03", { origin: "left" });
sr.reveal(".blog04", { origin: "right" });

//Testimonials
sr.reveal(".testimonial");

//footer
sr.reveal(".f-content h2");
sr.reveal(".f-content p", { delay: 500 });
sr.reveal(".f-contactInfo", { origin: "bottom", delay: 500 });
sr.reveal(".f-contactForm", { origin: "right", delay: 700 });
sr.reveal(".f-a");

appearOptions = {
  threshold: 0.20,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

// Execution must be after page content has been loaded
// TODO: should be based on scroll and not on time
function activateTransitions() {
  faders = document.querySelectorAll(".fade-in");
  sliders = document.querySelectorAll(".from-right");

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });
}

function displayPage() {
  const loader = document.querySelector("#preloader");
  const wrapper = document.querySelector("#wrapper");
  const navs = document.querySelectorAll("#nav");

  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";
    wrapper.style.display = "block";
    navs.forEach((entry) => {
      entry.style.display = "block";
    });

    setTimeout(() => {
      wrapper.style.opacity = 1;
      navs.forEach((entry) => {
        entry.style.opacity = 1;
      });
    }, 10);
  }, 800);
}

function activateGSAPTransitions() {
  setTimeout(() => {
    gsap.from(".fade-in-intro", {
      scrollTrigger: {
        trigger: ".fade-in-intro",
        start: "top 90%",
        end: "center 50%",
        markers: false,
        scrub: true, // Apple like scroll effect
      },
      scale: 0.96,
      opacity: 0,
    });

    gsap.from(".solid-divider", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "center 40%",
        markers: false,
        scrub: true,
      },
      scaleX: 0.1,
    });

    cinematics = document.querySelectorAll(".fade-in-cinematic");
    cinematics.forEach((cinematic) => {
      gsap.from(cinematic, {
        scrollTrigger: {
          trigger: cinematic,
          start: "top 90%",
          end: "center 50%",
          markers: false,
          scrub: true, // transition based on sroll position
        },
        scale: 0.96,
        opacity: 0,
      });
    });

    faders = document.querySelectorAll(".fade-in");
    faders.forEach((fader) => {
      gsap.from(fader, {
        scrollTrigger: {
          trigger: fader,
          start: "top 90%",
          markers: false,
          toggleActions: "play none none reverse",
        },
        opacity: 0.1,
        duration: 1.2,
      });
    });
  }, 1000);
}

const sections = document.querySelectorAll("section");

const options = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const observer = new IntersectionObserver((entries, observer) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.classList.add("in-view");
  } else {
    entry.target.classList.remove("in-view");
  }
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);
});

document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("mouseover", () => {
    document.body.style.setProperty("--cursor-bkd-big", `blue`);
    document.body.style.setProperty("--cursor-bkd-small", `white`);
  });
  a.addEventListener("mouseout", () => {
    document.body.style.setProperty("--cursor-bkd-big", `transparent`);
    document.body.style.setProperty("--cursor-bkd-small", `black`);
  });
});

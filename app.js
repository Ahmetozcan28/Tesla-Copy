const aside = document.getElementById("aside");
const menuButton = document.getElementById("menuBtn");
const closeButton = document.getElementById("closeBtn");
const backdrop = document.getElementById("backdrop");
const logo = document.getElementById("logos");
menuButton.addEventListener("click", (e) => {
  aside.className = "active";
  backdrop.className = "backdrop active";

  e.preventDefault();
});

closeButton.addEventListener("click", (e) => {
  aside.className = "";
  backdrop.className = "";
  e.preventDefault();
});

/* Section class active scroll control */
document.addEventListener("scroll", () => {
  const sections = [...document.querySelectorAll("section")];

  sections.forEach((section, index) => {
    if (window.pageYOffset === section.offsetTop) {
      section.className = "active";
      if (index === 0 || index === 5) {
        logo.className = "logo white";
      } else {
        logo.className = "logo ";
      }
    } else {
      section.className = "";
    }
  });
});

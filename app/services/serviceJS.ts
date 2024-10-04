export function addBlueOutline() {
  const sections = document.querySelectorAll("section");
  document.addEventListener("click", (event) => {
    sections.forEach((section) => {
      event.composedPath().includes(section)
        ? section.classList.add("blueBorder")
        : section.classList.remove("blueBorder");
    });
  });
}

export function goTo() {
  const arrLinks = document.querySelectorAll(".goto[data-goto]");
  const header = document.querySelector("header");
  if (arrLinks.length > 0) {
    arrLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const gotoClass = link.getAttribute("data-goto");
        if (gotoClass && header) {
          const gotoSection = document.querySelector(gotoClass) as Element;
          const gotoSectionValuePX =
            gotoSection.getBoundingClientRect().top +
            window.scrollY -
            header.offsetHeight -
            16;

          window.scrollTo({
            top: gotoSectionValuePX,
          });
          console.log(gotoSection);

          event?.preventDefault();
          // gotoSection.classList.add("blueBorder");
        }
      });
    });
  }
}

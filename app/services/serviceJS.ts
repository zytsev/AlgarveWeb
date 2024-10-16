export function addListener() {
  const arrLinks = document.querySelectorAll(".goto[data-goto]");
  const sections = document.querySelectorAll("section");

  document.addEventListener("click", (event) => {
    for (let index = 0; index < arrLinks.length; index++) {
      const link = arrLinks[index] as HTMLElement;
      if (event.composedPath().includes(link)) {
        sections.forEach((section) => section.classList.remove("blueBorder"));
        goTo(event, link);
        return;
      }
    }

    sections.forEach((section) => {
      event.composedPath().includes(section)
        ? section.classList.add("blueBorder")
        : section.classList.remove("blueBorder");
    });
  });
}

export function goTo(event: MouseEvent, link: HTMLElement) {
  const header = document.querySelector("header");
  event?.preventDefault();
  const gotoClass = link.getAttribute("data-goto");
  if (gotoClass && header) {
    const gotoSection = document.querySelector(gotoClass) as HTMLElement;
    const gotoSectionValuePX =
      gotoSection.getBoundingClientRect().top +
      window.scrollY -
      header.offsetHeight -
      19;

    window.scrollTo({
      top: gotoSectionValuePX,
    });
    gotoSection.classList.add("blueBorder");
  }
}

export function noScrollBody(activeBurger: boolean) {
  activeBurger
    ? document.body.classList.add("noScrollBody")
    : document.body.classList.remove("noScrollBody");
}

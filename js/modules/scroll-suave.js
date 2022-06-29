// SMOOTH SCROLL
export default function initScroll() {
  // SELECIONAR LINKS INTERNOS HREF COMEÇA COM "#"
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
  // FUNÇÃO SCROLL
  function scrollToSection(event) {
    // PREVINE SCROLL PADRÃO AO CLICAR
    event.preventDefault();
    // PEGAR O ATRIBUTO HREF NO CLIQUE
    const href = event.currentTarget.getAttribute("href");
    // LINKAR O HREF DO CLICK COM A SEÇÃO COM O MESMO ID
    const section = document.querySelector(href);

    // JEITO FÁCIL DE SMOOTH SCROLL
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // FORMA ALTERNATIVA DE SMOOTH SCROLL
    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

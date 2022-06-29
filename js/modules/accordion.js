export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  // VARIÁVEL PRA NÃO REPETIR A STRING 'ATIVO' TODA HORA
  const activeClass = "ativo";

  function activeAccordion() {
    // ADICIONAR ATIVO AO DD
    this.classList.toggle(activeClass);
    // ADICIONAR ATIVO AO ELEMENTO APÓS O DT - USAR nextElementSibling
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

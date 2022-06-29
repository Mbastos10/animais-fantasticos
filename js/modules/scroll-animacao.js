export default function initAnimacao() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  // VARIÁVEL PRA ANIMAÇÃO COMEÇAR EM 60% DA TELA DO USUÁRIO
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    // PEGAR CADA SEÇÃO = LOOP forEach
    sections.forEach((section) => {
      // MÉTODO PARA SABER A DISTÂNCIA DE CADA SECTION DO TOP
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      // VERIFICAR SE É A DISTÂNCIA É MENOR QUE 0 OU SEJA, SE CHEGOU ATÉ A SEÇÃO PARA ENTÃO ANIMAR
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    // CHAMAR FUNÇÃO ANTES PRA TELA NÃO INICIAR SEM A SEÇÃO
    animaScroll();
    // COMO É SCROLL O EVENTO É NA WINDOW
    window.addEventListener("scroll", animaScroll);
  }
}

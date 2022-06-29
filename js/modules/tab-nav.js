// NAVEGAÇÃO POR TABS
// FUNÇÃO PARA INICIAR E MANTER TUDO EM ESCOPO LOCAL
export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  // VARIÁVEL PRA NÃO REPETIR A STRING 'ATIVO' TODA HORA
  // const activeClass = 'ativo';

  // FUNÇÃO PARA INCLUIR A CLASSE ATIVO E REMOVER DE QUEM JÁ TEM
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  if (tabMenu.length && tabContent.length) {
    // PRIMEIRO ITEM SEMPRE TER A CLASSE ATIVO
    tabContent[0].classList.add("ativo");

    // LOOP PRA CLICAR E PEGAR QUAL ITEM TA SENDO CLICADO E ADICIONAR A activeTab
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

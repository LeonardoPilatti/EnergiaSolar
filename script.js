function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const classeAtivo = 'ativo';

    if(accordionList.length){

        accordionList[0].classList.add(classeAtivo);
        accordionList[0].nextElementSibling.classList.add(classeAtivo)

        function activeAccordion() {
            this.classList.toggle(classeAtivo);
            this.nextElementSibling.classList.toggle(classeAtivo);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click' , activeAccordion);
        })
    }
}
initAccordion();


/// Animações para scroll suave:

function initScrollSuave() {

    const linksInternos = document.querySelectorAll('a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior:'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click' , scrollToSection);
    })
}
initScrollSuave();


/// animações ao Scroll:

function initAnimacaoScroll() {

    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;  /// esse é para pegar 60% da tela do usuário

    function animaScroll() {
        sections.forEach((sectionItem) => {
            const sectionTop = sectionItem.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible) {
                sectionItem.classList.add('ativo');
            } else {
                sectionItem.classList.remove('ativo');
            }
        })
    // console.log('sim');  // para testar se está funcionando
    }

    animaScroll();

    window.addEventListener('scroll' , animaScroll);  /// tenho que falar com o window, pois o scroll é do window
    }
}
initAnimacaoScroll();
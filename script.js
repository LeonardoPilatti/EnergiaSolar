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
function programAccordion() {
  document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll('.program__accordion-item');
    const tabCards = document.querySelectorAll(".program__image-phone");

    // Открываем первый пункт по умолчанию
    if (accordions.length > 0) {
      toggleAccordion(accordions[0]);
    }

    accordions.forEach(el => {
      el.addEventListener('click', (element) => {
        const isOpen = el.classList.contains('open');
        closeAllAccordions(accordions);
        openContent(element);
        if (!isOpen) {
          toggleAccordion(el);
        }
      });
    });

    function openContent(evt) {
      const accordionTarget = evt.currentTarget; //элемент по которому нажали
      const accordion = accordionTarget.dataset.tab; //кнопка с дата-атрибутом
    
      accordions.forEach(function (item) {
        item.classList.remove("active");
      });
    
      tabCards.forEach(function (item) {
        item.classList.remove("active");
      });
    
      accordionTarget.classList.add("active");
    
      document.querySelector(`#${accordion}`).classList.add("active");
    }

    function toggleAccordion(item) {
      const control = item.querySelector('.program__accordion-control');
      const content = item.querySelector('.program__accordion-content');

      item.classList.toggle('open');
      control.setAttribute('aria-hidden', item.classList.contains('open'));
      content.setAttribute('aria-hidden', !item.classList.contains('open'));
      content.style.maxHeight = item.classList.contains('open') ? content.scrollHeight + 'px' : null;
    }

    function closeAllAccordions(items) {
      items.forEach(item => {
        if (item.classList.contains('open')) {
          toggleAccordion(item);
        }
      });
    }
  });
}

export default programAccordion;

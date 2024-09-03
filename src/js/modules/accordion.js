function accordion() {
  document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll('.faq__accordion-item, .efficiency__metods');
    accordions.forEach(el => {
      el.addEventListener('click', (e)=> {
        const self = e.currentTarget;
        const control = self.querySelector('.faq__accordion-control, .efficiency__metods-item');
        
        const content = self.querySelector('.faq__accordion-content, .efficiency__metods-content');
        
        self.classList.toggle('open');

        if (self.classList.contains('open')) {
          control.setAttribute('aria-hidden', true)
          content.setAttribute('aria-hidden', false)
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          control.setAttribute('aria-hidden', false)
          content.setAttribute('aria-hidden', true)
          content.style.maxHeight = null;

        }
      })
    })
  })
}

export default accordion;

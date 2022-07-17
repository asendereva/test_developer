AOS.init({
  duration: 1000,
});

let menuBtn = document.querySelector('.burger-mobile');
let menu = document.querySelector('.nav-item.mobile');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
        }
      }
      elHeader.parentElement.classList.toggle('accordion__item_show');
    });
  };
};

new ItcAccordion('#accordion-1');
new ItcAccordion('#accordion-2');


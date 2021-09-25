/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default class Collapse {
  constructor(elem, content) {
    if (typeof elem === 'string') {
      // eslint-disable-next-line no-param-reassign
      elem = document.querySelector(elem);
    }
    this.element = elem;
    this.content = content;
    this.button = this.element.querySelector('.collapse__button');

    this.bindToDOM = this.bindToDOM.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  bindToDOM() {
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('collaps__description');

    const descriptionText = document.createElement('p');
    descriptionText.classList.add('collaps__description-text');

    descriptionElement.appendChild(descriptionText);
    descriptionElement.style.maxHeight = 0;
    descriptionText.textContent = this.content;
    this.element.appendChild(descriptionElement);
    this.button.addEventListener('click', this.collapse);
  }

  collapse(event) {
    event.preventDefault();

    const descriptionElement = this.element.querySelector('.collaps__description');
    descriptionElement.classList.toggle('active');

    if (descriptionElement.classList.contains('active')) {
      descriptionElement.style.maxHeight = `calc(${descriptionElement.scrollHeight}px + 25px)`;
    } else {
      descriptionElement.style.maxHeight = 0;
    }
  }
}
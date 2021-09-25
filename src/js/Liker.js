/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default class Liker {
  constructor(elem) {
    if (typeof elem === 'string') {
      // eslint-disable-next-line no-param-reassign
      elem = document.querySelector(elem);
    }
    this.element = elem;
    this.button = this.element.querySelector('.liker__button');

    this.like = this.like.bind(this);
  }

  bindToDOM() {
    this.button.addEventListener('click', this.like);
  }

  like(event) {
    event.preventDefault();
    const { target } = event;

    const { top } = target.getBoundingClientRect();
    const left = target.getBoundingClientRect().x + 0.5 * target.getBoundingClientRect().width - 15;

    const like = document.createElement('div');
    like.classList.add('like');

    const random = Math.floor(1 + Math.random() * 4);
    like.style.animation = `trajectory_${random} 500ms ease-out`;

    like.style.top = `${top}px`;
    like.style.left = `${left}px`;

    this.element.appendChild(like);
    like.addEventListener('animationend', () => like.remove());
  }
}
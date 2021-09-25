/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
export default class CallbackChat {
  constructor(elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem);
    }
    this.element = elem;
    this.button = this.element.querySelector('.callback-chat__button');
    this.modal = this.element.querySelector('.callback-chat__modal');

    this.bindToDOM = this.bindToDOM.bind(this);
    this.callbackChat = this.callbackChat.bind(this);
    this.cansel = this.cansel.bind(this);
    this.modalVisible = this.modalVisible.bind(this);
  }

  bindToDOM() {
    this.button.addEventListener('mouseover', this.modalVisible);
    this.button.addEventListener('click', this.callbackChat);
    document.body.appendChild(this.modal);
  }

  modalVisible() {
    this.modal.style.display = 'block';
    this.button.removeEventListener('mouseover', this.modalVisible);
  }

  callbackChat() {
    this.button.style.transform = 'scale(0)';

    this.modal.classList.remove('hidden');
    this.modal.classList.add('active');

    this.close = this.modal.querySelector('.callback-chat__modal-btn-close');
    this.submit = this.modal.querySelector('.callback-chat__modal-btn-send');

    this.close.addEventListener('click', this.cansel);
    this.submit.addEventListener('click', this.cansel);
  }

  cansel() {
    this.modal.classList.add('hidden');
    this.modal.classList.remove('active');
    this.button.style.transform = 'scale(1)';
    this.close.removeEventListener('click', this.cansel);
    this.submit.removeEventListener('click', this.cansel);
  }
}
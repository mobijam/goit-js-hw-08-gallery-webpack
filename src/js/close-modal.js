import * as obj from'./refs-data-module.js';
import { onArrowsNavigation } from './native-slider';
import { clearImageSrc } from './modal-image-source';

obj.closeModal.addEventListener("click", onClickCloseModal);
obj.modalOverlay.addEventListener("click", onBackdropClick);

export function onClickCloseModal() {
    obj.openModal.classList.remove('is-open');
    clearImageSrc();

    window.removeEventListener('keydown', onEscKeyPress);
    window.removeEventListener('keydown', onArrowsNavigation);
}

export function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onClickCloseModal();
    }
}

export function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  
    if (event.code === ESC_KEY_CODE) {
    onClickCloseModal();
  }
}
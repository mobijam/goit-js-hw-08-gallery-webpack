import * as obj from './refs-data-module.js';
import { onArrowsNavigation } from './native-slider';
import { onEscKeyPress } from './close-modal';
import { changeLightboxImage } from './modal-image-source';

obj.modalContainer.addEventListener("click", onClickOpenModal);

export function onClickOpenModal(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    obj.openModal.classList.add('is-open');
    changeLightboxImage(event);
    
    window.addEventListener('keydown', onArrowsNavigation);
    window.addEventListener('keydown', onEscKeyPress);  
}


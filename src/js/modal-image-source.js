import * as obj from './refs-data-module.js';

export function changeLightboxImage() {
    obj.changeImage.src = event.target.dataset.src;
    obj.changeImage.alt = event.target.alt;
}

export function clearImageSrc() {
    obj.changeImage.src = '';
    obj.changeImage.alt = '';
}
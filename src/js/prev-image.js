import images from './gallery-items.js';
import * as obj from './refs-data-module.js';

export function openPreviousImage() {
    const currentImg = images.find(image => image.original === obj.changeImage.src);
    const prevImageIndex = images.indexOf(currentImg) - 1;

    if (images[prevImageIndex] === undefined) {
            obj.changeImage.src = images[images.length - 1].original;
            obj.changeImage.alt = images[images.length - 1].description;
            return;
    }

    obj.changeImage.src = images[prevImageIndex].original;
    obj.changeImage.alt = images[prevImageIndex].description;
}
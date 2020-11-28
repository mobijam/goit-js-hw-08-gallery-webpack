import images from './gallery-items.js';
import * as obj from'./refs-data-module.js';

export function openNextImage() {
    const currentImg = images.find(image => image.original === obj.changeImage.src);
    const nextImageIndex = images.indexOf(currentImg) + 1;
    
    if (images[nextImageIndex] === undefined) {
            obj.changeImage.src = images[0].original;
            obj.changeImage.alt = images[0].description;
            return;
    }

    obj.changeImage.src = images[nextImageIndex].original;
    obj.changeImage.alt = images[nextImageIndex].description;
}
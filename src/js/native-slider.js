import { openNextImage } from './next-image';
import { openPreviousImage } from './prev-image';

export function onArrowsNavigation(event) {
    if (event.code === "ArrowRight") {
        openNextImage(event);
    } else if (event.code === "ArrowLeft") {
        openPreviousImage(event);
    };
}
// if ('loading' in HTMLImageElement.prototype) {
//     const images = document.querySelectorAll('img[loading="lazy"]');
//     images.forEach(img => {
//         img.src = img.dataset.src;
//     });
// } else {
//     const script = document.createElement('script');

//     script.src =
//     'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
//      script.integrity =
//     'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
//      script.crossOrigin = 'anonymous';

//     document.body.appendChild('script');
// }
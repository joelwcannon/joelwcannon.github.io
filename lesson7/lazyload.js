const hiresPath = '/images/hires/';
const lowresPath = '/images/lowres/';

let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', hiresPath.concat(image.getAttribute('data-src')));
  
  image.onload = () => {
    image.removeAttribute('data-src');
   console.log('loaded:'.concat(image.src)) 
  };
};

const loadPreview = (image) => {
  image.setAttribute('src', lowresPath.concat(image.getAttribute('data-src')));
  image.onload = () => {
   console.log('preview loaded:'.concat(image.src)) 
   loadImages(image)
  };
};

// imagesToLoad.forEach((img) => {
//    loadImages(img);
//  });

 if('IntersectionObserver' in window) {
   const observer = new IntersectionObserver((items, observer) => {
     items.forEach((item) => {
       if(item.isIntersecting) {
         loadPreview(item.target);
         observer.unobserve(item.target);
         console.log('smart load:'.concat(item.target.src))
       }
     });
   });
   imagesToLoad.forEach((img) => {
     observer.observe(img);
   });
 } else {
   imagesToLoad.forEach((img) => {
     loadImages(img);
     console.log('bulk load:'.concat(img))
   });
 }
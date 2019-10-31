const hiresPath = '../lesson7/images/hires/';
const lowresPath = '../lesson7/images/lowres/';

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

https://github.com/joelwcannon/joelwcannon.github.io/blob/4be89f549e4ced9aa0fb1a0fd13716f51728ee10/lesson7/images/hires/blizzard-1245929_640.jpg
images\hires\blizzard-1245929_640.jpg
C:\Users\joelc\Documents\BYUI\CIT230\joelwcannon.github.io\lesson7\images\hires\blizzard-1245929_640.jpg



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
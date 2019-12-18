var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// force 0 <= i < limit
function wrap(i, limit) {
  return i % limit;
}

function showSlides(n) {
  // var i;
  var slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  var dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // if (n > slides.length) {
  //   slideIndex = 1
  // }
  // if (n < 1) {
  //   slideIndex = slides.length
  // }

  slideIndex = wrap(slideIndex, slide.length);

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
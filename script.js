const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach(image => image.style.display = 'none');
  images[index].style.display = 'block';
}

function showNextImage() {
  showImage(currentImageIndex);
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

showNextImage(); // Mostrar la primera imagen al cargar
setInterval(showNextImage, 4000); // Cambiar de imagen cada 4 segundos

var slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar o retroceder las imágenes
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Función para mostrar una imagen específica
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Función principal para mostrar las imágenes
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  
  // Si se llega al final, se regresa al principio
  if (n > slideshow.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slideshow.length}
  
  // Se ocultan todas las imágenes
  for (i = 0; i < slideshow.length; i++) {
      slideshow[i].style.display = "none";  
  }
  
  // Se remueve la clase 'active' de todos los puntos
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Se muestra la imagen actual y se marca el punto correspondiente
  slideshow[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function abrirChat() {
  var codigoPais = document.getElementById("codigo-pais").value;
  var telefono = document.getElementById("telefono").value;
  var enlace = "https://wa.me/" + codigoPais + telefono + "?";
  window.open(enlace, "_blank");
}
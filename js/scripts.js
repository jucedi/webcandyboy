// scripts.js

// Ejemplo de código para un carrusel de imágenes
document.addEventListener('DOMContentLoaded', function() {
	let slides = document.querySelectorAll('.slide');
	let currentSlide = 0;
	let slideInterval = setInterval(nextSlide, 3000);

	function nextSlide() {
		slides[currentSlide].classList.remove('active');
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].classList.add('active');
	}
});

// Ejemplo de código para un mapa interactivo (si estás usando una librería como Leaflet)
document.addEventListener('DOMContentLoaded', function() {
	if (document.getElementById('mapa')) {
		var map = L.map('mapa').setView([51.505, -0.09], 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.marker([51.5, -0.09]).addTo(map)
			.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
			.openPopup();
	}
});
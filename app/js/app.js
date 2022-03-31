import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);


// import '~/app/vendor/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// /* lazy */
	// const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]')
	// const loadMapBlock = document.querySelector('.load-map')
	// const windowHeight = document.documentElement.clientHeight

	// let lazyImagesPositions = []
	// if (lazyImages > 0) {
	// 	lazyImages.forEach(img => {
	// 		if (img.dataset.src || img.dataset.srcset) {
	// 			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset)
	// 		}
	// 	})
	// }

	const offer = new Swiper('.offer', {
		loop: true,
	
		pagination: {
			el: '.swiper-pagination',
		},
	
		navigation: {
			nextEl: '.custom-button-next',
			prevEl: '.custom-button-prev',
		}
	});

	const novelty = new Swiper('.novelty-swiper', {
		loop: true,
		slidesPerView: 6,
		spaceBetween: 30,
	
		pagination: {
			el: '.swiper-pagination',
		},
	
		navigation: {
			nextEl: '.novelty-next',
			prevEl: '.novelty-prev',
		}
	});

})
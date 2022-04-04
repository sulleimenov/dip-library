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

	function burderMenu() {
		let buttonMenu = document.querySelector('.header__mobile-burger')
		let buttonMenuContent = document.querySelector('.menu')

		buttonMenu.addEventListener('click', function () {
			if (this.classList.contains('show')) {
				this.classList.remove('show')
				buttonMenuContent.classList.remove('show')
			} else {
				this.classList.add('show')
				buttonMenuContent.classList.add('show')
			}
		})
	}
	function langButton() {
		let buttonMenu = document.querySelector('.header__language')
		let buttonMenuContent = document.querySelector('.header__language-dropdown')

		buttonMenu.addEventListener('click', function () {
			if (this.classList.contains('show')) {
				this.classList.remove('show')
				buttonMenuContent.classList.remove('show')
			} else {
				this.classList.add('show')
				buttonMenuContent.classList.add('show')
			}
		})
	}

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
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
			1400: {
				slidesPerView: 6,
			}
		},
	
		pagination: {
			el: '.swiper-pagination',
		},
	
		navigation: {
			nextEl: '.novelty-next',
			prevEl: '.novelty-prev',
		}
	});


	burderMenu()
	langButton()
})
import Swiper, { Navigation, Pagination } from 'swiper';
import MicroModal from 'micromodal';

Swiper.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', () => {

	MicroModal.init({
		awaitOpenAnimation: true,
		awaitCloseAnimation: true,
	});

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
	langButton()

	function accardionFaq() {
		const accordionItems = document.querySelectorAll(".faq__list-item");

		accordionItems.forEach(function(item) {
			item.addEventListener("click", function(event) {
				event.stopPropagation();
				item.childNodes[1].classList.toggle("show");
				item.childNodes[3].classList.toggle("show");
			});
		});
	}

	accardionFaq()

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

	function user() {
		let user = document?.querySelector('.user__auth')
		let register = document?.querySelector('.user__register')
		let registerBtn = document?.querySelector('.register')
		let auth = document?.querySelector('.auth')

		registerBtn.addEventListener('click', function () {
			user.classList.remove('show')
			register.classList.add('show')
		})
		auth.addEventListener('click', function () {
			user.classList.add('show')
			register.classList.remove('show')
		})
	}

	user()


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
})
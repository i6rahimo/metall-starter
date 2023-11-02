/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';
// import Swiper from './modules/swiper.min.js';
// import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper/bundle';
// import { log } from 'gulp-util';

// import 'swiper/css';
// import { tree } from 'gulp';
// import { log } from 'gulp-util';


BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new Tabs('tabs-example', {
	onChange: (data) => {
		console.log(data);
	},
});

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});

const header = document.querySelector('.header')
const headerArrow = document.querySelector('.header-arrow-is-sticky')
if( window.location.pathname=="/" || window.location.pathname=="/index.html" ){
	header.classList.remove('header-main');
} else {
	header.classList.add('header-main')
	headerArrow.classList.add('show')
}

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
// let body=document.querySelector('body');
// if(isMobile.any()){
// 		body.classList.add('touch');
// 		let arrow=document.querySelectorAll('.arrow');
// 	for(i=0; i<arrow.length; i++){
// 			let thisLink=arrow[i].previousElementSibling;
// 			let subMenu=arrow[i].nextElementSibling;
// 			let thisArrow=arrow[i];

// 			thisLink.classList.add('parent');
// 		arrow[i].addEventListener('click', function(){
// 			subMenu.classList.toggle('open');
// 			thisArrow.classList.toggle('active');
// 		});
// 	}
// }else{
// 	body.classList.add('mouse');
// }




const certificate = new Swiper('.certificate__slider', {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 50,
	loop: true,
	slideClass: 'certificate__slide',
	wrapperClass: 'certificate__wrapper',
	observeParents: true,
	navigation: {
	  nextEl: '.certificate-btn-next',
	  prevEl: '.certificate-btn-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		660: {
			slidesPerView: 3,
			spaceBetween: 10,

		},
		860: {
			slidesPerView: 4,
			spaceBetween: 30,

		},
		},
});


const documentation = new Swiper('.documentation__slider', {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 50,
	loop: true,
	slideClass: 'documentation__slide',
	wrapperClass: 'documentation__wrapper',

	navigation: {
	  nextEl: '.documentation-btn-next',
	  prevEl: '.documentation-btn-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		660: {
			slidesPerView: 3,
			spaceBetween: 10,

		},
		860: {
			slidesPerView: 4,
			spaceBetween: 30,

		},
		},
});



const information = new Swiper('.information__slider', {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 50,
	loop: true,
	slideClass: 'information__slide',
	wrapperClass: 'information__wrapper',

	navigation: {
	  nextEl: '.information-btn-next',
	  prevEl: '.information-btn-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		660: {
			slidesPerView: 3,
			spaceBetween: 10,

		},
		860: {
			slidesPerView: 4,
			spaceBetween: 30,

		},
		},
});


const pravo = new Swiper('.pravo__slider', {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 50,
	loop: true,
	slideClass: 'pravo__slide',
	wrapperClass: 'pravo__wrapper',

	navigation: {
	  nextEl: '.pravo-btn-next',
	  prevEl: '.pravo-btn-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		660: {
			slidesPerView: 3,
			spaceBetween: 10,

		},
		860: {
			slidesPerView: 4,
			spaceBetween: 30,

		},
		},
});


const recomendation = new Swiper('.recomendation__slider', {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 50,
	loop: true,
	slideClass: 'recomendation__slide',
	wrapperClass: 'recomendation__wrapper',

	navigation: {
	  nextEl: '.recomendation-btn-next',
	  prevEl: '.recomendation-btn-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		660: {
			slidesPerView: 3,
			spaceBetween: 10,

		},
		860: {
			slidesPerView: 4,
			spaceBetween: 30,

		},
		},
});


const company = new Swiper('.company__slider', {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 50,
	loop: true,
	slideClass: 'company__slide',
	wrapperClass: 'company__wrapper',

	navigation: {
	  nextEl: '.company-btn-next',
	  prevEl: '.company-btn-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		660: {
			slidesPerView: 3,
			spaceBetween: 10,

		},
		860: {
			slidesPerView: 4,
			spaceBetween: 30,

		},
		},
});


const partners = new Swiper('.part__wrapper', {
	// Optional parameters
	loop: false,
	slideClass: 'part__item',
	wrapperClass: 'part__items',

	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 3,
		  spaceBetween: 10
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 4,
		  spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 6,
		  spaceBetween: 20
		}
	  },
});

const reviewSlider = new Swiper('.about__reviews-slider ', {
	// Optional parameters
	loop: false,
	slideClass: 'about__reviews-slide',
	wrapperClass: 'about__reviews-wrapper',
	navigation: {
	  nextEl: '.about__reviews-btn-next',
	  prevEl: '.about__reviews-btn-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1080: {
			navigation: {
				nextEl: '.about__reviews-btn-next-mb',
				prevEl: '.about__reviews-btn-prev-mb',
			  },
			slidesPerView: 6,
			spaceBetween: 40,
		  }
	  },

});




const aboutSlider = new Swiper('.about-slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slideClass: 'about-slide',
	wrapperClass: 'about-wrapper',
	pagination: {
    	el: '.about-pagination',
  	},
	// slidesPerView: 3,
	spaceBetween: 10,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		},			
});

const stockSlider = new Swiper('.stock-slider', {
	// Optional parameters
	modules: [Navigation, Pagination],
	direction: 'horizontal',
	loop: true,
	slideClass: 'stock-slide',
	wrapperClass: 'stock-wrapper',
	pagination: {
    	el: '.stock-pagination',
  	},
	// slidesPerView: 3,
	spaceBetween: 0,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 4,
			spaceBetween: 10,

		},
		},			
});


const aboutStaff = new Swiper('.about__staff-slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slideClass: 'staff__slide',
	wrapperClass: 'about__staff-wrapper',
	spaceBetween: 10,
	// slidesPerView: 3,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		660: {
			slidesPerView: 3,
			spaceBetween: 10,

		},
		860: {
			slidesPerView: 4,
			spaceBetween: 30,

		},
		},			
});







// const aboutGallerySubmain = new Swiper('.about__gallery-submain', {
// 	// Optional parameters

// 	slideClass: 'about__gallery-main-slide',
// 	wrapperClass: 'about__gallery-main-wrapper',

// 	breakpoints: {
// 		// when window width is >= 320px
// 		320: {
// 		  slidesPerView: 2,
// 		  spaceBetween: 10
// 		},
// 		// when window width is >= 480px
// 		480: {
// 		  slidesPerView: 3,
// 		  spaceBetween: 30
// 		},
// 		// when window width is >= 640px
// 		640: {
// 		  slidesPerView: 4,
// 		  spaceBetween: 40
// 		}
// 	  },

// });


// const aboutGalleryMain = new Swiper('.about__gallery-main', {
// 	// Optional parameters

// 	slideClass: 'about__gallery-main-slide',
// 	wrapperClass: 'about__gallery-main-wrapper',

// 	navigation: {
// 	  nextEl: '.about__gallery-btn-next',
// 	  prevEl: '.about__gallery-btn-prev',
// 	},
// 	breakpoints: {
// 		// when window width is >= 320px
// 		320: {
// 		  slidesPerView: 2,
// 		  spaceBetween: 10
// 		},
// 		// when window width is >= 480px
// 		480: {
// 		  slidesPerView: 3,
// 		  spaceBetween: 30
// 		},
// 		// when window width is >= 640px
// 		640: {
// 		  slidesPerView: 1,
// 		  spaceBetween: 40
// 		}
// 	  },
// 	  thumbs: {
// 		swiper: aboutGallerySubmain,
// 	}
// });

const slider = document.querySelector('.about__gallery-main');
const sliderNav = document.querySelector('.about__gallery-submain');

let mySwiperNav = new Swiper(sliderNav, {
	modules: [Navigation, Pagination],
	slidesPerView: 5,
	spaceBetween: 10,
	loopedSlides: 5,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	direction: 'horizontal',
	slideClass: 'about__gallery-main-slide',
	wrapperClass: 'about__gallery-main-wrapper',

	pagination: {
		el: '.photo-slider-pagination',
		clickable: true,
	},
	navigation: {
	  nextEl: '.about__gallery-btn-next',
	  prevEl: '.about__gallery-btn-prev',
	},
})

let mySwiper = new Swiper(slider, {
	modules: [Navigation, Pagination],
	spaceBetween: 10,
	loopedSlides: 5,
	slideClass: 'about__gallery-main-slide',
	wrapperClass: 'about__gallery-main-wrapper',

	pagination: {
		el: '.photo-slider-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: mySwiperNav,
	}
	
})




let mainProductSlider = new Swiper('.product__images', {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 1,
	slideClass: 'product__image-slide',
	wrapperClass: 'product__image',
	pagination: {
		el: '.product__images-pagination',
	  },
	
})



const similarProductSlider = new Swiper('.similar__products', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slideClass: 'similar__product',
	wrapperClass: 'similar__products-wrapper',
	spaceBetween: 10,
	slidesPerView: 3,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		660: {
			slidesPerView: 3,
			spaceBetween: 13,

		},

		},			
});



const aboutNewsSlider = new Swiper('.about__news-slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slideClass: 'about__news-slide',
	wrapperClass: 'about__news-wrapper',

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,

		},
		460: {
			slidesPerView: 2,
			spaceBetween: 10,

		},
		660: {
			slidesPerView: 3,
			spaceBetween: 40,
		},

		},			
});

// let mySwiper = new Swiper(slider, {
// 	slidesPerView: 3,
// 	spaceBetween: 10,
// 	loop: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// })


// const product = new Swiper('.product__slider', {
// 	// Optional parameters
// 	direction: 'horizontal',
// 	loop: true,
// 	slideClass: 'product__slide',
// 	wrapperClass: 'product__slider-wrapper',
// 	// slidesPerView: 3,
// 	spaceBetween: 10,
// 	breakpoints: {
// 		// when window width is >= 320px
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 10,

// 		},
// 		460: {
// 			slidesPerView: 2,
// 			spaceBetween: 10,

// 		},
// 		},			
// });
// window.addEventListener('resize', function(event){
// 		if(window.innerWidth > 790) {
// 			product.destroy()
// 		} 

// });
const closeFilterMobile = document.querySelector('.filter__top-close');
const filterMobile = document.querySelector('.filter__mobile-popup')
closeFilterMobile.addEventListener('click', ()=> {
	filterMobile.classList.remove('is-open')
})
if( window.location.pathname=="/" || window.location.pathname=="/index.html" ){

function productsSlider() {
	
		let productSlider = document.querySelector('.products__slider')
		
		let productsSwiper;

	if (window.innerWidth <= 600 && productSlider.dataset.mobile == 'false') {
		productsSwiper = new Swiper(productSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 10,
			loop: false,
			slideClass: 'products__slide',
			wrapperClass: 'products__slider-wrapper',
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
		});

		productSlider.dataset.mobile = 'true';

	}

	if (window.innerWidth > 600) {
		productSlider.dataset.mobile = 'false';
		
		if (productSlider.classList.contains('swiper-container-initialized')) {
			productsSwiper.destroy()

		}
	}
}

productsSlider()

window.addEventListener('resize', () => {
	productsSlider();
	
});
}
if(   window.location.pathname=="/product.html" ){

	function productPhotoSlider() {
			
		let photoProductSliders = document.querySelector('.photo__slider')
		
		let mySwipers;
		
		if (window.innerWidth <= 600 && photoProductSliders.dataset.mobile == 'false') {
			mySwipers = new Swiper(photoProductSliders, {
				modules: [Navigation, Pagination],
				slidesPerView: 1,
				spaceBetween: 10,
				loop: false,
				slideClass: 'photo__slide',
				wrapperClass: 'photo__wrapper',
				pagination: {
						el: '.photo-slider-pagination',
						clickable: true,
					},
				});
				
				photoProductSliders.dataset.mobile = 'true';
				
			}
	
		if (window.innerWidth > 600) {
			photoProductSliders.dataset.mobile = 'false';
			
			if (photoProductSliders.classList.contains('swiper-container-initialized')) {
				mySwipers.destroy(true, true)
				
			}
		}
	}
	
	
	productPhotoSlider()
	
	window.addEventListener('resize', () => {
		productPhotoSlider();
	});
	

} else {

	
	// }
	
	
	
	
}

if(   window.location.pathname=="/index.html" || window.location.pathname == '/contact.html' || window.location.pathname == '/about-page.html' ) {


	
	let center = [59.908046564187565,30.324779499999977];
	
function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 17
	});
	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});
	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	map.geoObjects.add(placemark);
}

ymaps.ready(init);

}
function quantityCartItem() {
	const cartQuantity = document.querySelector('.cart-quantity'),
		  cartItemsWrapper = document.querySelector('.popup__cart-wrapper'),
		  cartItem = document.querySelectorAll('.popup__cart-product').length;
	// cartItem.forEach(e => {
	// 	let item = e;
	// 	console.log(item);
	// })
	console.log(cartItem);
	console.log(cartQuantity.innerHTML);
	cartQuantity.innerHTML = cartItem

}

quantityCartItem()


if(   window.location.pathname == '/product.html' ) {


function productQuantity() {
	const plusBtn  = document.querySelector('.product__quantity-right');
	const minusBtn = document.querySelector('.product__quantity-left');
	const result = document.querySelector('.product__quantity-result');

	plusBtn.addEventListener('click', ()=> {
		result.value++
	})
	minusBtn.addEventListener('click', ()=> {
		if(result.value < 1) {
			result.value = 1
		}
		result.value--
	})
}

productQuantity()

}


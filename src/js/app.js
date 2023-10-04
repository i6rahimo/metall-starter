/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';

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
if( window.location.pathname=="/" || window.location.pathname=="/index.html" ){
	header.classList.remove('header-main')
} else {
	header.classList.add('header-main')
}

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}




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

});



window.onresize = hamburgerMenu;
window.onresize = resize;

searchBarDropdown.addEventListener(
	'mouseover',
	showDropdown.bind(null, 'search-bar-dropdown-item'),
	false)

searchBarDropdown.addEventListener(
	'mouseout',
	hideDropdown.bind(null, 'search-bar-dropdown-item'),
	false)

document.getElementById('hamburger-menu').addEventListener(
	'click',
	hamburgerMenu,
	false)

homeMenu.addEventListener(
	'mouseover',
	showDropdown.bind(null, 'home-dropdown'),
	false)

homeMenu.addEventListener(
	'mouseout',
	hideDropdown.bind(null, 'home-dropdown'),
	false)

document.getElementById('home-menu-heading').addEventListener(
	'click',
	dropdown.bind(null, 'home-dropdown', 'home-caret'),
	false)

homeMenu3.addEventListener(
	'mouseover',
	showDropdown.bind(null, 'home-dropdown-3'),
	false)

homeMenu3.addEventListener(
	'mouseout',
	hideDropdown.bind(null, 'home-dropdown-3'),
	false)

document.getElementById('home-menu-heading-3').addEventListener(
	'click',
	dropdown.bind(null, 'home-dropdown-3', 'home-caret-3'),
	false)

homeMenu33.addEventListener(
	'mouseover',
	showDropdown.bind(null, 'home-dropdown-3-3'),
	false)

homeMenu33.addEventListener(
	'mouseout',
	hideDropdown.bind(null, 'home-dropdown-3-3'),
	false)

document.getElementById('home-menu-heading-3-3').addEventListener(
	'click',
	dropdown.bind(null, 'home-dropdown-3-3', 'home-caret-3-3'),
	false)

aboutMenu.addEventListener(
	'mouseover',
	showDropdown.bind(null, 'about-dropdown'),
	false)

aboutMenu.addEventListener(
	'mouseout',
	hideDropdown.bind(null, 'about-dropdown'),
	false)

document.getElementById('about-menu-heading').addEventListener(
	'click',
	dropdown.bind(null, 'about-dropdown', 'about-caret'),
	false)

productMenu.addEventListener(
	'mouseover',
	showDropdown.bind(null, 'product-dropdown'),
	false)

productMenu.addEventListener(
	'mouseout',
	hideDropdown.bind(null, 'product-dropdown'),
	false)

document.getElementById('product-menu-heading').addEventListener(
	'click',
	dropdown.bind(null, 'product-dropdown', 'product-caret'),
	false)

pagesMenu.addEventListener(
	'mouseover',
	showDropdown.bind(null, 'pages-dropdown'),
	false)

pagesMenu.addEventListener(
	'mouseout',
	hideDropdown.bind(null, 'pages-dropdown'),
	false)

document.getElementById('pages-menu-heading').addEventListener(
	'click',
	dropdown.bind(null, 'pages-dropdown', 'pages-caret'),
	false)

contactMenu.addEventListener(
	'mouseover',
	showDropdown.bind(null, 'contact-dropdown'),
	false)

contactMenu.addEventListener(
	'mouseout',
	hideDropdown.bind(null, 'contact-dropdown'),
	false)

document.getElementById('contact-menu-heading').addEventListener(
	'click',
	dropdown.bind(null, 'contact-dropdown', 'contact-caret'),
	false)

document.getElementById('about-footer-heading').addEventListener(
	'click',
	dropdown.bind(null, 'about-footer-content', 'about-footer-caret'),
	false)

document.getElementById('information-footer-heading').addEventListener(
	'click',
	dropdown.bind(null, 'information-footer-content', 'information-footer-caret'),
	false)

document.getElementById('account-footer-heading').addEventListener(
	'click',
	dropdown.bind(null, 'account-footer-content', 'account-footer-caret'),
	false)

document.getElementById('store-footer-heading').addEventListener(
	'click',
	dropdown.bind(null, 'store-footer-content', 'store-footer-caret'),
	false)

document.getElementById('contact-footer-heading').addEventListener(
	'click',
	dropdown.bind(null, 'contact-footer-content', 'contact-footer-caret'),
	false)
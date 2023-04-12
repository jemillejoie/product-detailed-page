function dropdown(itemID, caretID){
	const items = document.getElementById(itemID);
	const caret = document.getElementById(caretID);
	const dropdown = document.querySelectorAll('[id^='+itemID+']');
	const carets = document.querySelectorAll('[id^='+caretID+']');
	const mobile = window.matchMedia("(max-width: 767px)");

	if(mobile.matches) {
		if(items.style.display == "block"){
			items.style.display = "none";
			caret.classList.remove("expand");

			for(let i=0; i<dropdown.length; i++){
				dropdown[i].style.display = null;
			}

			for(let i=0; i<carets.length; i++){
				if(carets[i].classList.contains("expand"))
					carets[i].classList.remove("expand");
			}
		}
		else {
			items.style.display = "block";
			caret.classList.add("expand");
		}
	}
}

function showDropdown(itemID){
	const item = document.getElementById(itemID);
	if(window.matchMedia("(min-width: 767px)").matches)
		item.style.display = "block";
}

function hideDropdown(itemID){
	const item = document.getElementById(itemID);

	if(window.matchMedia("(min-width: 767px)").matches)
		item.style.display = "none";
}

function thumbnail(thumbnailID){
	const thumbnail = document.getElementById(thumbnailID);
	const idNum = thumbnailID.slice(10);
	const tv = document.getElementById('tv-'+idNum);

	for(let i=1; i<=4; i++) {
		const x = document.getElementById('thumbnail-'+i);
		const y = document.getElementById('tv-'+i);

		if(x==thumbnail)
			thumbnail.classList.add('active');
		else if(x.classList.contains('active'))
			x.classList.remove('active');
		
		if(y==tv)
			tv.style.display = "block";
		else
			y.style.display = "none";
	}
}

function sizes(sizeID){
	const size = document.getElementById(sizeID);

	for(let i=1; i<=6; i++){
		const x = document.getElementById('size-'+i);

		if(size==x)
			size.classList.add('active');
		else if(x.classList.contains('active'))
			x.classList.remove('active');
	}
}

function addQty(){
	const val = document.getElementById('qty-num').value;
	document.getElementById('qty-num').value = parseInt(val) + 1;
}

function subtractQty(){
	const val = document.getElementById('qty-num').value;

	if(parseInt(val)<=0 || val=='')
		document.getElementById('qty-num').value = 0;
	else
		document.getElementById('qty-num').value = parseInt(val) - 1;
}

function intOnly(){
	return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))
}

function noLeadingZeros(){
	const val = document.getElementById('qty-num');

	val.value = parseInt(val.value);

	if(val.value=='')
		val.value = 0;
}

function details(num){
	const title = document.getElementById('details-title-'+num);
	const text = document.getElementById('details-text-'+num);

	for(let i=1; i<=3; i++){
		const x = document.getElementById('details-title-'+i);
		const y = document.getElementById('details-text-'+i);

		if(x==title)
			title.classList.add('active');
		else if(x.classList.contains('active'))
			x.classList.remove('active');

		if(y==text)
			text.style.display = 'block';
		else
			y.style.display = 'none';
	}
}

function hamburgerMenu(){
	const container = document.getElementById('hamburger-menu-content');
	const close = document.getElementById('close-icon');
	const hamburger  = document.getElementById('hamburger');
	const body = document.getElementsByTagName('body')[0];
	const menus = document.getElementById('menus');
	const contact = document.getElementById('contact-content');
	const allMenus = document.querySelectorAll('[class*="menus"]');
	const allCaret = document.querySelectorAll('[id*="caret"]');

	if(container.style.display == "none"){
		container.style.display = "block";
		close.style.display = "block";
		hamburger.style.display = "none";
		body.style.overflow = "hidden";
		container.style.overflow = "auto";
		container.append(menus);
		container.append(contact);
	}
	else{
		container.style.display = "none";
		close.style.display = "none";
		hamburger.style.display = "block";
		body.style.overflow = "auto";
		document.getElementById('navbar-bottom-content').prepend(menus);
		document.getElementById('navbar-contact').append(contact);

		for(let i=0; i<allMenus.length; i++){
			allMenus[i].style.display = null;
		}

		for(let i=0; i<allCaret.length; i++){
			if(allCaret[i].classList.contains('expand')){
				allCaret[i].classList.remove('expand');
			}
		}
	}
}

function resize(){
	const hamburgerChild = document.getElementById('hamburger')
	const caret = document.querySelectorAll('[id*="caret"]');
	const menus = document.querySelectorAll('[class*="menus"]');
	const footer = document.querySelectorAll('[id*="footer"]');

	document.getElementById('hamburger-menu-content').style.display = "none";
	document.getElementById('close-icon').style.display = "none";
	document.getElementById('hamburger').style.display = "block";
	document.getElementsByTagName('body')[0].style.overflow = "auto";
	document.getElementById('navbar-bottom-content').prepend(document.getElementById('menus'));
	document.getElementById('navbar-contact').append(document.getElementById('contact-content'));

	for(let i=0; i<caret.length; i++){
		caret[i].style.display = null;

		if(caret[i].classList.contains('expand')){
			caret[i].classList.remove('expand');
		}
	}

	for(let i=0; i<menus.length; i++){
		menus[i].style.display = null;
	}

	for(let i=0; i<footer.length; i++){
		footer[i].style.display = null;
	}
}

window.onresize = hamburgerMenu;
window.onresize = resize;
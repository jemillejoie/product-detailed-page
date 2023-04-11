function dropdown(itemID, caretID){
	var items = document.getElementById(itemID);
	var caret = document.getElementById(caretID);
	var dropdown = document.querySelectorAll('[id^='+itemID+']');
	var carets = document.querySelectorAll('[id^='+caretID+']');
	var mobile = window.matchMedia("(max-width: 767px)");

	if(mobile.matches) {
		if(items.style.display == "block"){
			items.style.display = "none";
			caret.classList.remove("expand");

			for(var i=0; i<dropdown.length; i++){
				dropdown[i].style.display = null;
			}

			for(var i=0; i<carets.length; i++){
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
	var item = document.getElementById(itemID);
	if(window.matchMedia("(min-width: 767px)").matches)
		item.style.display = "block";
}

function hideDropdown(itemID){
	var item = document.getElementById(itemID);

	if(window.matchMedia("(min-width: 767px)").matches)
		item.style.display = "none";
}

function thumbnail(thumbnailID){
	var thumbnail = document.getElementById(thumbnailID);
	var idNum = thumbnailID.slice(10);
	var tv = document.getElementById('tv-'+idNum);

	for(var i=1; i<=4; i++) {
		var x = document.getElementById('thumbnail-'+i);
		var y = document.getElementById('tv-'+i);

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
	var size = document.getElementById(sizeID);

	for(var i=1; i<=6; i++){
		var x = document.getElementById('size-'+i);

		if(size==x)
			size.classList.add('active');
		else if(x.classList.contains('active'))
			x.classList.remove('active');
	}
}

function addQty(){
	var val = document.getElementById('qty-num').value;
	document.getElementById('qty-num').value = parseInt(val) + 1;
}

function subtractQty(){
	var val = document.getElementById('qty-num').value;

	if(parseInt(val)<=0 || val=='')
		document.getElementById('qty-num').value = 0;
	else
		document.getElementById('qty-num').value = parseInt(val) - 1;
}

function noLeadingZeros(){
	var val = document.getElementById('qty-num');

	val.value = parseInt(val.value);

	if(val.value=='')
		val.value = 0;
}

function details(num){
	var title = document.getElementById('details-title-'+num);
	var text = document.getElementById('details-text-'+num);

	for(var i=1; i<=3; i++){
		var x = document.getElementById('details-title-'+i);
		var y = document.getElementById('details-text-'+i);

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
	var container = document.getElementById('hamburger-menu-content');
	var close = document.getElementById('close-icon');
	var hamburger  = document.getElementById('hamburger');
	var body = document.getElementsByTagName('body')[0];
	var menus = document.getElementById('menus');
	var contact = document.getElementById('contact-content');
	var allMenus = document.querySelectorAll('[class*="menus"]');
	var allCaret = document.querySelectorAll('[id*="caret"]');

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

		for(var i=0; i<allMenus.length; i++){
			allMenus[i].style.display = null;
		}

		for(var i=0; i<allCaret.length; i++){
			if(allCaret[i].classList.contains('expand')){
				allCaret[i].classList.remove('expand');
			}
		}
	}
}

function resize(){
	var hamburgerChild = document.getElementById('hamburger')
	var caret = document.querySelectorAll('[id*="caret"]');
	var menus = document.querySelectorAll('[class*="menus"]');
	var footer = document.querySelectorAll('[id*="footer"]');

	document.getElementById('hamburger-menu-content').style.display = "none";
	document.getElementById('close-icon').style.display = "none";
	document.getElementById('hamburger').style.display = "block";
	document.getElementsByTagName('body')[0].style.overflow = "auto";
	document.getElementById('navbar-bottom-content').prepend(document.getElementById('menus'));
	document.getElementById('navbar-contact').append(document.getElementById('contact-content'));

	for(var i=0; i<caret.length; i++){
		caret[i].style.display = null;

		if(caret[i].classList.contains('expand')){
			caret[i].classList.remove('expand');
		}
	}

	for(var i=0; i<menus.length; i++){
		menus[i].style.display = null;
	}

	for(var i=0; i<footer.length; i++){
		footer[i].style.display = null;
	}
}

window.onresize = hamburgerMenu;
window.onresize = resize;
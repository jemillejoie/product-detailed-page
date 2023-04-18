/**
 * This is for showing and hiding the dropdown items
 * in navbar and footer on mobile view
 * 
 * @param {String} itemID - ID of the dropdown item
 * @param {String} caretID - ID of the caret icon
 */
function dropdown(itemID, caretID){
	const items = document.getElementById(itemID),
		caret = document.getElementById(caretID),
		dropdown = document.querySelectorAll(`[id^=${itemID}]`),
		carets = document.querySelectorAll(`[id^=${caretID}]`),
		mobile = window.matchMedia("(max-width: 767px)");

	if(!mobile.matches) return

	if(items.style.display === "block"){
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

/**
 * This is for showing the dropdown items
 * in navbar on desktop view
 * 
 * @param {String} itemID - ID of the dropdown item
 */
function showDropdown(itemID){
	const item = document.getElementById(itemID);

	if(!window.matchMedia("(min-width: 767px)").matches)
		return

	item.style.display = "block";
}

/**
 * This is for hiding the dropdown items
 * in navbar on desktop view
 * 
 * @param {String} itemID - ID of the dropdown item
 */
function hideDropdown(itemID){
	const item = document.getElementById(itemID);

	if(!window.matchMedia("(min-width: 767px)").matches)
		return

	item.style.display = "none";
}

/**
 * This is for showing the bigger images 
 * of the product when the thumbnail is clicked
 * 
 * @param {String} thumbnailID - ID of the thumbnail
 */
function thumbnail(thumbnailID){
	const thumbnail = document.getElementById(thumbnailID),
		tv = document.getElementById(`tv-${thumbnailID.slice(10)}`);

	for(let i=1; i<=productThumbnail.children.length; i++) {
		const x = document.getElementById(`thumbnail-${i}`),
			y = document.getElementById(`tv-${i}`);

		if(x===thumbnail)
			thumbnail.classList.add('active');
		else if(x.classList.contains('active'))
			x.classList.remove('active');
		
		if(y===tv)
			tv.style.display = "block";
		else
			y.style.display = "none";
	}
}

/**
* highlight the border and text of
* the chosen product size
* 
* @param {String} sizeID - ID of the size
*/
function sizes(sizeID){
	const size = document.getElementById(sizeID);

	for(let i=1; i<=sizeBtns.children.length; i++){
		const x = document.getElementById(`size-${i}`);

		if(size===x)
			size.classList.add('active');
		else if(x.classList.contains('active'))
			x.classList.remove('active');
	}
}

/**
* This is for the add [+] button.
* When clicked, the value in the product quantity's
* input field is incremented by one.
*/
function addQty(){
	const val = document.getElementById('qty-num').value;
	document.getElementById('qty-num').value = parseInt(val) + 1;
}

/**
* This is for the subtract [-] button.
* When clicked, the value in the product quantity's
* input field is decremented by one.
* The value should not be less than 0.
*/
function subtractQty(){
	const val = document.getElementById('qty-num').value;

	if(parseInt(val)<=0)
		document.getElementById('qty-num').value = 0;
	else
		document.getElementById('qty-num').value = parseInt(val) - 1;
}

/**
 * This is to prevent the use of non-numerical values
 * in the product quantity's input field.
 * Only charcode 48-57 are numerical values
 */
function intOnly(){
	return (event.charCode !== 8 && event.charCode === 0 || (event.charCode >= 48 && event.charCode <= 57))
}

/**
 * This is for removing the leading zeros
 * in the product quantity's input field
 */
function noLeadingZeros(){
	const val = document.getElementById('qty-num');

	if(val.value!="")
		val.value = parseInt(val.value);

	if(val.value)
		return

	val.value = 0;
}

/**
 * This is for showing the description,
 * specification, and reviews of the product.
 * When the title is clicked,
 * the corresponding content or text is shown.
 * 
 * @param {(String|Number)} num - unique number at the end of the ID
 * 
 * 1 : Description
 * 2 : Specification
 * 3 : Reviews
 */
function details(num){
	const title = document.getElementById(`details-title-${num}`),
		text = document.getElementById(`details-text-${num}`);

	for(let i=1; i<=detailsTitle.children.length; i++){
		const x = document.getElementById(`details-title-${i}`),
			y = document.getElementById(`details-text-${i}`);

		if(x===title)
			title.classList.add('active');
		else if(x.classList.contains('active'))
			x.classList.remove('active');

		if(y===text)
			text.style.display = 'block';
		else
			y.style.display = 'none';
	}
}

/**
 * This is for the hamburger menu on mobile view.
 * When the hamburger button is cliked,
 * the contents (navbar menu) are shown.
 */
function hamburgerMenu(){
	const container = document.getElementById('hamburger-menu-content'),
		close = document.getElementById('close-icon'),
		hamburger  = document.getElementById('hamburger'),
		body = document.getElementsByTagName('body')[0],
		menus = document.getElementById('menus'),
		contact = document.getElementById('contact-content'),
		allMenus = document.querySelectorAll('[class*="menus"]'),
		allCaret = document.querySelectorAll('[id*="caret"]');

	if(container.style.display === "none"){
		container.style.display = "block";
		close.style.display = "block";
		hamburger.style.display = "none";
		body.style.overflow = "hidden";
		container.style.overflow = "scroll";
		container.append(menus);
		container.append(contact);
	}
	else {
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

/**
 * This is for ensuring that the navbar, footer, and carets
 * are displayed correctly as the window resizes.
 */
function resize(){
	const caret = document.querySelectorAll('[id*="caret"]'),
		menus = document.querySelectorAll('[class*="menus"]'),
		footer = document.querySelectorAll('[id*="footer"]');

	document.getElementById('hamburger-menu-content').style.display = "none";
	document.getElementById('close-icon').style.display = "none";
	document.getElementById('hamburger').style.display = "block";
	document.getElementsByTagName('body')[0].style.overflow = "auto";
	document.getElementById('navbar-bottom-content').prepend(document.getElementById('menus'));
	document.getElementById('navbar-contact').append(document.getElementById('contact-content'));

	for(let i=0; i<caret.length; i++){
		caret[i].style.display = null;

		if(caret[i].classList.contains('expand'))
			caret[i].classList.remove('expand');
	}

	for(let i=0; i<menus.length; i++){
		menus[i].style.display = null;
	}

	for(let i=0; i<footer.length; i++){
		footer[i].style.display = null;
	}
}
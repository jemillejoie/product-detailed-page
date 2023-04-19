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
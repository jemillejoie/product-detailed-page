categories.addEventListener(
	'mouseover',
	showDropdown.bind(null, 'all-categories-dropdown-item'),
	false)

categories.addEventListener(
	'mouseout',
	hideDropdown.bind(null, 'all-categories-dropdown-item'),
	false)

for(let i=1; i<=productThumbnail.children.length; i++){
	document.getElementById(`thumbnail-${i}`).addEventListener(
		'click',
		thumbnail.bind(null, `thumbnail-${i}`),
		false)
}

for(let i=1; i<=sizeBtns.children.length; i++){
	document.getElementById(`size-${i}`).addEventListener(
		'click',
		sizes.bind(null, `size-${i}`),
		false)
}

document.getElementById('subtract').addEventListener(
	'click',
	subtractQty,
	false)

document.getElementById('add').addEventListener(
	'click',
	addQty,
	false)

productQty.addEventListener('input', noLeadingZeros, false)

for(let i=1; i<=detailsTitle.children.length; i++){
	document.getElementById(`details-title-${i}`).addEventListener(
		'click',
		details.bind(null, i),
		false)
}
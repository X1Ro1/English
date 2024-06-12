$(function() {

	// The function is getting a cross-browser offset for any element

	function offset(elem) {
		const rect = elem.getBoundingClientRect();
			let scrollLeft = window.scrollX || document.documentElement.scrollLeft; 
			let scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	} 
	// getting all hidden elements (in scroll anim)
	const hide_elems = $("._hidden")

	if (hide_elems.length > 0) {
		
		$(window).scroll(function() {
			for (let index = 0; index < hide_elems.length; index++) {
				var hide_item = hide_elems[index]
				const hide_item_height = hide_item.offsetHeight;
				const hide_item_offset = offset(hide_item).top;
				const show_start = 4

				let hide_item_point = window.innerHeight - hide_item_height / show_start
				if (hide_item_height > window.innerHeight) {
					hide_item_point = window.innerHeight - window.innerHeight / show_start
				}	

				if ((scrollY > hide_item_offset - hide_item_point) && scrollY < (hide_item_offset + hide_item_height)) {
					hide_item.classList.add("_show")
				} else {
					hide_item.classList.remove("_show")
				}
			}
		});
	}
});

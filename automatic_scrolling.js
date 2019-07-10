var scroll_step = 23;
var scrolling = false;
var scroll_function_running = false;

function scrollContentup(){
	if (scrolling == true){
		window.scrollBy(0,-scroll_step);
		scrolldelay = setTimeout('scrollContentup()',50); // scrolls every 100 milliseconds
		}
}

function scrollContentdown(){
	if (scrolling == true){
		window.scrollBy(0,scroll_step);
		scrolldelay = setTimeout('scrollContentdown()',50); // scrolls every 100 milliseconds
		}
}


function enable_scrolling(upper_boundary=100, lower_boundary=100) {
	$(document).mousemove(function(e){
		if (10 < e.clientY && e.clientY < upper_boundary){
		//Change to window height - 100
			if (scroll_function_running == false){
				scrolling = true;
				console.log("scroll up");
				scrollContentup();
				scroll_function_running = true;
			}
		} else if ( $(window).height() - lower_boundary < e.clientY && e.clientY < $(window).height() - 10) {
			if (scroll_function_running == false){
				scrolling = true;
				console.log("scroll down");
				scrollContentdown();
				scroll_function_running = true;
			}
		} else {
		scrolling = false;
		scroll_function_running = false;
		}
	});
}

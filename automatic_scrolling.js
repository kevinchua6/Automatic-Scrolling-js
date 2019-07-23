//	Copyright (C) 2019 yourally2, Rumesh Sudhaharan

// 	This program is free software: you can redistribute it and/or modify
// 	it under the terms of the GNU General Public License as published by
// 	the Free Software Foundation, either version 3 of the License, or
// 	(at your option) any later version.

// 	This program is distributed in the hope that it will be useful,
// 	but WITHOUT ANY WARRANTY; without even the implied warranty of
// 	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// 	GNU General Public License for more details.

// 	You should have received a copy of the GNU General Public License
// 	along with this program.  If not, see <https://www.gnu.org/licenses/>.

var scroll_step = 15;
var scrolling = false;
var scroll_function_running = false;
var scroll_button = false;



function scrollContentup(){
	if (scrolling == true && scroll_button == true){
		window.scrollBy(0,-scroll_step);
		scrolldelay = setTimeout('scrollContentup()',50); // scrolls every 100 milliseconds
		}
	else {
		scroll_function_running = false;
	}
}

function scrollContentdown(){
	if (scrolling == true && scroll_button == true){
		window.scrollBy(0,scroll_step);
		scrolldelay = setTimeout('scrollContentdown()',50); // scrolls every 100 milliseconds
		}
	else {
		scroll_function_running = false;
	}
}


function enable_scrolling(upper_boundary=100, lower_boundary=100) {
	$(document).mousemove(function(e){
		if (scroll_button == true){
			if (10 < e.clientY && e.clientY < upper_boundary){
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
		}
	});
}
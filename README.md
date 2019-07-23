# Automatic Scrolling
Scrolls automatically up and down when the mouse is at the top and bottom of the window respectively.  
Text is from Lovecraft's The Call of Cthulhu.  
  
## Instructions
Add the file `automatic_scrolling.js` to your html file after adding `jQuery`.

You can enable the scrolling by running `enable_scrolling(upper_boundary,lower_boundary)`.

You can also enable or disable scrolling by making a button with class `toggle_scrolling_button`. clicking the button will toggle the scrolling.


`upper_boundary` and `lower_boundary` refer to the size of the areas, in pixels, at the top and bottom of the screen where the scrolling will take place. If no values are given, a default value of 100 pixels is assumed for both.  

Refer to the example folder for more information.

Adjust `scroll_step` to change the speed of scrolling  
`scroll-behavior: smooth;` can be removed if smooth scrolling is not desired  
  
Uses jQuery.

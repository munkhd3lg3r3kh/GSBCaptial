//==== anchor starts ====
$(document).ready(function()
{
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
//anchor ends

// stick to top starts
window.onscroll = function() {myFunction()};
      
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() 
{
    if (window.pageYOffset >= sticky) 
    {
        navbar.classList.add("sticky")
    } 
    else 
    {
        navbar.classList.remove("sticky");
    }
}      
// ==== Stick to top ends ====

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(300);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(300);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
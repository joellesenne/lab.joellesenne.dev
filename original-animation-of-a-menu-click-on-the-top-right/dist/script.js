// Original animation of a menu, click on the top right

// Author Joël Lesenne <https://joellesenne.xyz>

$(document).ready(function() {
  var navMenu, navItem, navItemlength, elementBody;
	navMenu = $(".js-hamburger");
	navItem = $(".is-navItem");
	navItemlength = $(".is-navItem").length;
	elementBody = $("body");

    navMenu.on("click", function(e) {
        e.preventDefault();
		if ($(this).hasClass("active")) {
            navItem.removeClass("slideInLeft").addClass("slideOutRight");
			setTimeout(function(){
                elementBody.toggleClass("nav-open");
			}, navItemlength*150);
		} else {
            navItem.removeClass("slideOutRight").addClass("slideInLeft");
            elementBody.toggleClass("nav-open");
		}

		$(this).toggleClass("active");
		return false;
	});	
});
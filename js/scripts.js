var getWindow = {
	// Get the viewport width
	width : function() {
		var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		return width;
	},
	
	// Get the viewport heigth	
	heigth : function() {
		var heigth = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return heigth; 
	}
}

// Return the type of screen
function verifyScreenSize(screenWith) {
	if (screenWith <= 768) {
		return 'xs';
	} else if (screenWith >= 768 && screenWith < 992) {
		return 'sm';
	} else if (screenWith >= 992 && screenWith < 1200) {
		return 'md';
	} else {
		return 'lg';
	}
}

// If screen size is necessary the class collapse
function collapseOrNot() {
	var viewportWidth = getWindow.width();
	if (verifyScreenSize(viewportWidth) === 'xs') {
		$('#navbarCollapse').addClass('collapse');
	} else {
		$('#navbarCollapse').removeClass('collapse');
	}
}


// Go to specific position on HTML discounting or aditing some pixels
// Also known as Smooth scroll
function goToOffsetSmooth(offset, aditional) {
	$('html, body').animate({
		scrollTop: offset + aditional
	}, 1000);
}

// Open a link in specific target
function openLink(link, target) {
	window.open(link, target);
}
	

$(document).ready(function() {
	collapseOrNot();
	window.addEventListener("resize", function() {
		collapseOrNot();
	});

	// Go to slides by category and animate (disconting 50px of navbar size)
	$(".about-category-wrapper > a").click(function() {
		var offset = $($(this).attr('href')).offset().top;
		goToOffsetSmooth(offset, -50);
	});

	// When user click on a photo in carousel open it in new tab
	$(".item > img").click(function() {
		var link = $(this).attr('src');
		openLink(link, '_blank');
	});

	// Smooth scroll on navbar elements
	$('.navbar-nav > li > a').click(function() {
		var link = $(this).attr('href');
		var offset = $(link).offset().top;
		var isMobile
		// If is the portifolio, discount navbar size on offse 
		if (link === '#about') {
			goToOffsetSmooth(offset, -50);	
		} else {
			goToOffsetSmooth(offset, 0);
		}
	});


	
});

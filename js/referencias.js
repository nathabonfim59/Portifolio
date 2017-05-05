//Carousel
<div id="myCarousel" class="carousel slide" data-ride="carousel">
	<!-- 	Indicators -->
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
		<li data-target="#myCarousel" data-slide-to="3"></li>
		
	</ol>
	
	<!--  Wrapper for slides  -->
	<div class="carousel-inner">
		<div class="item active">
			<h1 class="text-center">Programming</h1>
		</div>
		
		<div class="item">
			<h1 class="text-center">makes</h1>
		</div>
		
		<div class="item">
			<h1 class="text-center">the world</h1>
		</div>
		
		<div class="item">
			<h1 class="text-center">Better!</h1>
		</div>
	</div>
	
	<!-- 	Left and right controls -->
	<a href="#myCarousel" class="left carousel-control" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a href="#myCarousel" class="right carousel-control" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right"></span>
		<span class="sr-only">Next</span>
	</a>
	
</div>



// Funcao que detecta o scroll do mouse (não o do touchpad nem touchscree)	

    $("#elem").on("DOMMouseScroll mousewheel", function(e) {
		if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
			//alternative options for wheelData: wheelDeltaX & wheelDeltaY
			//scroll down
			console.log("Down");
		} else {
			//scroll up
			console.log("Up");
		}
		//prevent page fom scrolling
		return false;
	});

// Funcao que anima um scroll

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});

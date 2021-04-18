var slideIndex = 1;
		slideshow(slideIndex);
		function plusSlides(n) {
			slideshow(slideIndex += n);
		}
		function currentSlide(n){
			slideshow(slideIndex = n);
		}
			function slideshow(n){
			var i;
			var slides =
	document.getElementsByClassName("mySlider1");
			if (n > slides.length) { slideIndex = 1	}
				if(n < 1) {
					slideIndex =slides.length}
					for(i=0; i < slides.length; i++){ slides[i].style.display = "none";
						slides[slideIndex-1].style.display = "block"; 

					}
				}
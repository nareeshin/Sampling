$(window).scroll(function() {
	var height = $(window).scrollTop();
  if(height > 100) {
		$('#svgTest').addClass('active');
		$('#svgBottomTest').addClass('activeBottom');
	} else {
		$('#svgTest').removeClass('active');
		$('#svgBottomTest').removeClass('activeBottom');
	}
});


// let wrap = document.documentElement; 

// height.addEventListener('scroll', function(){
//    console.log("scrollTop: ", height.scrollTop);
//    console.log("scrollHeight: ", height.scrollHeight);
//    console.log("clientHeight: ", height.clientHeight);
// })

$(window).scroll(function () {
	var height = $(document).scrollTop();
	log(height);
	console.log(height);
});

function log(str){
$('#log').text(str);
}
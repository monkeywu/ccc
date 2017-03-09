$('document').ready(function(){
	$(document).scroll(function(e){
		if($(this).scrollTop()<100){
			$('.about').css({'height':'100px'})
		}
		if($(this).scrollTop()>100){
			$('.about').css({'height':'60px'})
		}
	})
})



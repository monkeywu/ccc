$('document').ready(function(){
	$(document).scroll(function(e){
		if($(this).scrollTop()>100){
			$('#header').css({'height':'60px','background':'white'})
		}
		if($(this).scrollTop()<100){
			$('#header').css({'height':'100px','background':''})
		}
		if($(this).scrollTop()>100){
			$('.navbar').css({'height':'60px'})
		}
		if($(this).scrollTop()<100){
			$('.navbar').css({'height':'100px'})
		}
	})
})



 $(function(){
	$window = $(window);
    $returnright = $("#returnright");
	$returnright.click(function(){
	var browserIsS = /webkit/.test(navigator.userAgent.toLowerCase());
		if(browserIsS)
		{
			$('html,body').animate({scrollTop:0},300);
		}
		else
		{
			$('html,body').animate({scrollTop:0},300);
		}
	})
	$returntop = $("#returntop");
	$returntop.click(function(){
	var browserIsS = /webkit/.test(navigator.userAgent.toLowerCase());
		if(browserIsS)
		{
			$('html,body').animate({scrollTop:0},300);
		}
		else
		{
			$('html,body').animate({scrollTop:0},300);
		}
	})
})

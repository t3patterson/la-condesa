$(document).ready(function(){
	
$('.gallery li')
	.each(function(){
		$(this).hide()
	})
	.last()
		.addClass('last')
		.end() 
	.first()
		.addClass('current first')
		.show()

	
$('img.right-arrow').click(function(){
	console.log("rightclick good")
	

	if($('li.current').hasClass('last') == true)
	{
		$('ul li').last().removeClass('current').fadeOut()	
		$('ul li').first().addClass('current').fadeIn()
	} else{

	
	
	

	$('ul li.current')
			.fadeOut()
			.removeClass('current')
		.next()
			.fadeIn()
			.addClass('current')
	
		}//end else
})	//end right-arrow click

$('img.left-arrow').click(function(){
	console.log("left-click good")
		
	if($('li.current').hasClass('first') == true)
	{
		$('ul li').last().addClass('current').fadeIn()
		$('ul li').first().removeClass('current').fadeOut()	
	} else{

	$('ul li.current')
			.hide()
			.removeClass('current')
		.prev()
			.fadeIn()
			.addClass('current')
		}//end else
})	//end left-arrow click

});//end ready
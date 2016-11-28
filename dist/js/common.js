$(document).ready(function() {
	$(".contacts__call-back").click(function() {
		$(this).toggleClass("on");
		$(".call-back").slideToggle();
		return false;
	});
});

$('input').on("focus",function(){
  $(this).addClass("visited");
})

$('input').on("blur", function() {
	$('.visited:invalid').prev('.form-icons').css({"color": "#e9066b", "transition": "1s"});
	$('.visited:valid').prev('.form-icons').css({"color": "#61c25e", "transition": "1s"});
});

$(".cl__item > img").on("click",function(){
	$(".card-recomend > img").attr("src", $(this).attr("src"));
});
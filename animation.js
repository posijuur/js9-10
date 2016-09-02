(function ($) {
	$('.sub-menu').slideUp('slow');
	$('.menu-mid_item').hover(function(e) {
		$('.sub-menu').slideDown('slow');
	}, function() {
		$('.sub-menu').slideUp('slow');
	});

	$('.sub2-menu').slideUp('slow');
	$('.sub-menu_item_mod').hover(function() {
		$('.sub2-menu').slideDown('slow');
	}, function() {
		$('.sub2-menu').slideUp('slow');
	});
})(jQuery);


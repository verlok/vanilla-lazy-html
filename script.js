var lazyLoad = new LazyLoad({
	elements_selector: ".lazy-dom",
	callback_enter: function(el) {
		var urlToCall = $(el).data("url");
		$.ajax(urlToCall).done(function(asyncHtml) {
			$(el).html(asyncHtml);
		});
	}
});

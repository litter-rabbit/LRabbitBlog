$(function () {
    function render_time() {
        return moment($(this).data('timestamp')).format('lll')
    }
    $('[data-toggle="tooltip"]').tooltip(
        {title: render_time}
    );


    var OriginTitile = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
		if (document.hidden) {
			document.title = '(つェ⊂)看不到我~ ' + OriginTitile;
			clearTimeout(titleTime);
		}
		else {
			document.title = '(*´∇｀*) 又在想我啦~ ' + OriginTitile;
			titleTime = setTimeout(function() {
				document.title = OriginTitile;
			}, 2000);
		}
});

});

//click me



//网页标签





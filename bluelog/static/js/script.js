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

//音乐播放器
ap1 = new APlayer({
	container: document.getElementById('aplayer1'),
	theme: '#e9e9e9',
	fixed: true,
	lrcType: 3,
	audio: [{
		name: '光るなら',
		artist: 'Goose house',
		url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
		cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
		lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
		theme: '#ebd0c2'
	}, {
		name: 'トリカゴ',
		artist: 'XX:me',
		url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3',
		cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
		lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
		theme: '#46718b'
	}, {
		name: '前前前世',
		artist: 'RADWIMPS',
		url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
		cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
		lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
		theme: '#505d6b'
	}]
});

//click me

biu_click=document.getElementById('click-me')
biu_toclick=document.getElementsByClassName('biu-toclick')[0]
biu_toclick.addEventListener('click',function () {
		img=document.createElement('img')
		img.src='static/img/biu.gif'
		biu_toclick.removeChild(biu_click)
		biu_toclick.appendChild(img)
		biu_click.firstChild.textContent=''

})

//网页标签





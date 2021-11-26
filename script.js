//https://vk.com/video/@abiturient_urfu
//https://vk.com/club22301031 оригинальный id
//https://vk.com/video/@abiturient_urfu?z=video-22301031_456239490
//https://vk.com/club22301031?z=video-22301031_456239490

//сервисный              8286afd58286afd58286afd56682fc9eed882868286afd5e31a1edcafb45ca23f3841bb

//https://oauth.vk.com/authorize?client_id=8007992&display=page&redirect_uri=&scope=video&response_type=token&v=5.52
//https://oauth.vk.com/blank.html#access_token=8286afd58286afd58286afd56682fc9eed882868286afd5e31a1edcafb45ca23f3841bb&expires_in=86400&user_id=107712976

// $.ajax({
//     url: "https://api.vk.com/method/friends.get?v=5.81&access_token=9a9d16d29bfb97f172a7984c8a39e9cd2616080026f1e8d59a5595c8b0398a2155f62863e87069c03aeae&fields=sex,photo_50",
//     method: "GET",
//     dataType: "JSONP",
//     success: function(data) {
//         console.log(data);
//     }
// });

//video object example:
// {
//     "adding_date": 1616149898,
//     "can_comment": 1,
//     "can_like": 1,
//     "can_repost": 1,
//     "can_subscribe": 1,
//     "can_add_to_faves": 1,
//     "can_add": 1,
//     "comments": 112,
//     "date": 1616590806,
//     "description": "Регистрация на очные дни открытых дверей: urfu.ru/ru/events/10452\n\nЛичный кабинет абитуриента: priem.urfu.ru\n\nСериал «Прием, УрФУ!»: urfu.ru/priemurfu",
//     "duration": 3120,
//     "photo_130": "https://sun9-1.userapi.com/impf/gNI2DA8oRGiBoW4aHUjr8WtKAppeUSuw_OqKAw/J8lUGpYnZ8I.jpg?size=130x96&quality=96&keep_aspect_ratio=1&background=000000&sign=9bd973e5e90491e41523bcebd3c81de8&c_uniq_tag=sNsor7nJk5NU7Dp_0xiI1Ql7aB14klf3hVKEFKFJuWA&type=video_thumb",
//     "photo_320": "https://sun9-1.userapi.com/impf/gNI2DA8oRGiBoW4aHUjr8WtKAppeUSuw_OqKAw/J8lUGpYnZ8I.jpg?size=320x240&quality=96&keep_aspect_ratio=1&background=000000&sign=581ef1147735ba39f678ee554d09e69e&c_uniq_tag=30NFwrNnQ-r-fGiuOr2RHrBVWmcwmAq1gtsP9EbiOtE&type=video_thumb",
//     "photo_800": "https://sun9-1.userapi.com/impf/gNI2DA8oRGiBoW4aHUjr8WtKAppeUSuw_OqKAw/J8lUGpYnZ8I.jpg?size=800x450&quality=96&keep_aspect_ratio=1&background=000000&sign=1f09a48f4ebe20f61efba06938833c68&c_uniq_tag=9CevN4FrJejaLGj28SKTUql3zyKZptizNOS0_ayp2Tw&type=video_thumb",
//     "photo_1280": "https://sun9-1.userapi.com/impf/gNI2DA8oRGiBoW4aHUjr8WtKAppeUSuw_OqKAw/J8lUGpYnZ8I.jpg?size=1280x720&quality=96&sign=e09b41c7b1e1733a47c7cf8d2209ffaf&c_uniq_tag=mC3ZSNm3-jVD0EkQ1ES2OTfiGgVYNuolQXNMn9_KK2Q&type=video_thumb",
//     "first_frame_130": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=35&tkn=Q_qVQ2xhqMEB7lK6xT4ZK6l24Ic",
//     "first_frame_160": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=34&tkn=c0DNIrzm2QgC36HkA0nabTZaaL4",
//     "first_frame_320": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=33&tkn=XL4H3pA9GKHXMmYwrK-9vZaMtjQ",
//     "first_frame_800": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=32&tkn=OQKXUl8jHoh9zmt2GM2ZizTcs5E",
//     "first_frame_1280": "https://i.mycdn.me/getVideoPreview?id=1185499122360&idx=0&type=39&tkn=TmEczWXfck7R87FVWIFekMonqRo",
//     "width": 1920,
//     "height": 1080,
//     "id": 456239369,
//     "owner_id": -22301031,
//     "ov_id": "2171426909112",
//     "title": "Институт экономики и управления",
//     "player": "https://vk.com/video_ext.php?oid=-22301031&id=456239369&hash=e4fb4df7636e6f5b&__ref=vk.api&api_hash=1637893102f966ce29ca446195b7_GEYDONZRGI4TONQ",
//     "views": 6136
// }

//https://vk.com/club22301031?z=video-22301031_456239490


function getUrl(method, params) {
	if (!method) throw new Error('Invalid method');
	params = params || {};
	params['access_token'] = '9a9d16d29bfb97f172a7984c8a39e9cd2616080026f1e8d59a5595c8b0398a2155f62863e87069c03aeae';
	return "https://api.vk.com/method/" + method + "?" + $.param(params);
}

function sendRequest(method, params, callback) {
	$.ajax({
		url: getUrl(method, params),
		method: "GET",
		dataType: "JSONP",
		success: callback
	});
}

function loadVideos() {
	sendRequest('video.get',{v: 5.81, owner_id: -22301031, count: 22}, function(data) {
		showVideos(data.response.items);
	})
}

function showVideos(videos) {
	videos.forEach(video => {
		$('#video_stack').append($('<iframe>', {
			'class': 'video_element', 
			'id' : 'video_element',
			'src': video.player, 
			'frameborder': '0', 
			'allowfullscreen': 'allowfullscreen'
			})
		);
	})
}

loadVideos();



/*
вариант с превъюшками и ссылками(производительней, чем iframe)
let link = "https://vk.com/club22301031?z=video-22301031_" + video.id;
let imgLink = video.photo_800;
stack.append(
	$('<div>', {'class': 'video_element'}).append(
		$('<a>', {'class': 'video_link', 'href': link}).append(
			$('<img>', {'class': 'video_image', 'src': imgLink})
		)
	)
);
*/
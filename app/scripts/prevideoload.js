/* PreVideoLoad: load videos when you need. (c) Matias Pizarro. MIT Lic. http://git.io/v3dYO */
!function($){
	/*!
	*	Options:
	*	event: when to load video. Default 'click'
	*	autoPlay: true for play the video after the event is launched. Default true
	*	ytimg: quality of youtube's video thumbnail. Default 0. Can be: 0 (full-size) | 1 | 2 | 3 | default | hqdefault | mqdefault | sddefault | maxresdefault (max-resolution)
	*	vmimg: quality of vimeo's video thumbnail. Default large. Can be: small | medium | large
	*	vmcache: cache vimeo's video thumbnail
	*/
	$.fn.PreVideoLoad = function(options){
		var defaults = {
			autoPlay: true,
			event: 'click',
			ytimg: '0',
			vmimg: 'large',
			vmcache: true
		};
		options = $.extend({}, defaults, options); 
		this.each(function(){
			var a = $(this), b = a.attr('data-videoid');
			if($(this).hasClass('PreVimeo')){
				$.ajax({url:'//vimeo.com/api/v2/video/'+b+'.json',dataType:'jsonp',cache:options.vmcache,contentType:'application/json; charset=utf8',type:'GET'})
				.done(function(j){
					var t = j[0]['thumbnail_'+options.vmimg];
					a.css('background-image','url('+t+')')
				});
				a.html('<a class="PreVideoLoadPlay PreVimeoPlay" href="//vimeo.com/'+b+'" target="_blank"></a>');
				a.find('a.PreVimeoPlay').on(options.event,function(event){
					event.preventDefault();
					$(this).parent().html('<iframe class="PreVideoLoadPlayer PreVimeoPlayer" src="//player.vimeo.com/video/'+b+'?color=039be5&autoplay='+(options.autoPlay?1:0)+'" frameborder="0" allowfullscreen></iframe>');
				});
			} else if($(this).hasClass('PreYoutube')){
				a.css('background-image','url(//i3.ytimg.com/vi/'+b+'/'+options.ytimg+'.jpg)');
				a.html('<a class="PreVideoLoadPlay PreYoutubePlay" href="//www.youtube.com/watch?v='+b+'" target="_blank"></a>');
				a.find('a.PreYoutubePlay').on(options.event,function(event){
					event.preventDefault();
					$(this).parent().html('<iframe class="PreVideoLoadPlayer PreYoutubePlayer" src="//www.youtube.com/embed/'+b+'?autoplay='+(options.autoPlay?1:0)+'" frameborder="0" allowfullscreen></iframe>');
				});
			}
		});
	};
}(jQuery);

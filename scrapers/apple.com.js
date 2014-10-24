/**
 * Apple.com iTunes Chart Playgrub Scraper
 * Created by: Toby Padilla <tobypadilla AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on the Apple.com iTunes Chart Page
 */

Playgrub.source.url = 'http://.*apple\.com.*/itunes/charts/songs.*';
Playgrub.source.error = 'Tomahawklet currently supports iTunes Charts & iTunes album pages only. Please check your url.';
Playgrub.source.scrape = function() {
	if (window.location.href.indexOf("/itunes/charts/songs") !== -1)
	{ 
	    $("li").each(function () {
		var artist = $(this).children('h4').text();
		var song = $(this).children('h3').children('a').text();
		if(artist && song){
			Playgrub.playlist.add_track(artist, song);
		}
	    });
	}
	else if(window.location.href.indexOf("/album/") !== -1)
	{
		$("table.tracklist-table:first tr.song").each(function (){
			var artist = $.trim($(this).find("td.artist").text());
			var song = $.trim($(this).find("td.name").text());
			if(artist && song){
				Playgrub.playlist.add_track(artist, song);
			}
		});
		

	}
};

Playgrub.source.start();

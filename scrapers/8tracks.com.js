
/**
 * 8tracks Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on 8tracks mix pages.
 */
Playgrub.source.url = 'http://.*\.8tracks.com.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

$("li.track").each(function() {
  var song = $.trim($(this).find('span.t').text());
        var artist = $.trim($(this).find('span.a').text());
        
       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();

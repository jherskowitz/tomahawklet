/**
 * NPR World Cafe Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on NPR "rundown" pages.
 */
Playgrub.source.url = 'http://.*\.npr.org/templates/rundowns.*';
Playgrub.source.error = 'Check your NPR page - only playlist pages are supported.'
Playgrub.source.scrape = function() {

$("tr").each(function() {
        var song = $(this).find('td.song').text();
        var artist = $(this).find('td.artist').text();
        
       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();

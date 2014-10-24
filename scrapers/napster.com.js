
/**
 * Napster Playgrub Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Napster playlist pages.
 */
Playgrub.source.url = 'http://.*\.napster.com/playlist.htm.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

   $("td.trackInfo").each(function() {
       var artist = $.trim($(this).find('span.artistName a').text());
       var song = $.trim($(this).find('a.playNoButton').text());
       artist = $.trim(artist);
       song = $.trim(song);

        if (artist && song) {
            Playgrub.playlist.add_track(artist, song);
        }
    });
}

Playgrub.source.start();

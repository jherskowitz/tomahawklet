
/**
 * Ex.fm Noted Songs Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Ex.fm profile pages.
 */
Playgrub.source.url = 'http://.*\.ex.fm.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

$("div.song_row_metadata").each(function() {
 var song = $(this).find('a.song_row_title').text();
var album = $(this).find('div a.song_row_artist span').text();

var artist = $(this).find('div.song_row_artist_wrapper a.song_row_artist').text();

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();

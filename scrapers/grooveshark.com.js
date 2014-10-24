/**
 * Grooveshark Playgrub.source
 * Created by: alastairp
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on any Grooveshark playlist.
 */

Playgrub.source.url = 'http://grooveshark\.com/\#/playlist/\.*';
Playgrub.source.error = "Check your Grooveshark page, Tomahawklet only works on playlists.";
Playgrub.source.scrape = function() {
 artists = [];
 albums = [];
 songs = [];
$("div.slick-cell.album").each(function() { albums.push($(this).find('a').text())});
$("div.slick-cell.artist").each(function() { artists.push($(this).find('a').text())});
$("div.slick-cell.song").each(function() { songs.push($(this).find('a').text())});
for (var i = 0; i < albums.length; i++) { 
        Playgrub.playlist.add_track(artists[i], songs[i]);
}
}

Playgrub.source.start();


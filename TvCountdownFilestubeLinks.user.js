// ==UserScript==
// @name           TV Countdown Filestube Search
// @include        http://tvcountdown.com/*
// @namespace      http://userscripts.org/scripts/show/70335
// @copyright      2010+, kleingeist (http://github.com/kleingeist/userscripts), Based on 2011+, AliB (http://userscripts.org/scripts/show/70335) 
// @description    Search for episode from TVCD listing on FilesTube.  
// @version        0.1
// ==/UserScript==

// Change to 1 for rapidshare, 3 for megaupload, 27 for hotfile etc. Leave blank for all.
var service = '';
// Valid formats can be All , 3gp, avi, mkv, mp3, mp4, mpeg, mpg, rar, rmvb, wma, wmv, zip
var format = "avi";

var table = document.getElementsByClassName("episode_list_table")[0];
var rows = table.getElementsByTagName("tr");

var i, cols, name, ep, query;
// loop through the rows starting with the second one because the first contains the headers
for (i = 1; i < rows.length; i++) {
	// only link aired shows
	if (rows[i].className == "bc_f" || rows[i].className == "bc_fa") {
		break;
	}
	
	cols = rows[i].getElementsByTagName("td");
	ep = cols[1].innerHTML;
	name = cols[0].getElementsByTagName("a")[0].text;
	query = escape(name + " " + ep);
	
	// write link
	cols[1].innerHTML = "<a href=\"http://www.filestube.com/search.html?q=" + query + "&service=" + service + "&select=" + format + "\">" + ep + "</a>";
}


// ==UserScript==
// @name           bitload.com DDL
// @namespace      http://brainroom.ae35.de
// @description    Direct download from my bitload.com
// @version        1.0
// @copyright      2010+, kleingeist (http://github.com/kleingeist/userscripts)
// @licence        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include        http://www.bitload.com/f/*/*
// ==/UserScript==



if (unsafeWindow.url != undefined) {
	// find the download button
	var downloadBtn = document.evaluate("//div[@class='btn8']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(1);
	
	// remove inline onclick
	downloadBtn.setAttribute('onclick',null);
	// and register own onlick listener to start the download
	downloadBtn.addEventListener('click', function() { 
		window.location.href = unsafeWindow.url;
	}, false);
}
else {
	window.location.href = window.location.href + "?c=free";
}

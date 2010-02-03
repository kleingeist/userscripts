// ==UserScript==
// @name           FileBase.to NoWait
// @namespace      http://brainroom.ae35.de
// @description    Bypass the wait timer on FileBase.to. Optional redirects always to the direct download instead of the DivX streaming page.
// @version        1.0
// @copyright      2010+, kleingeist (http://ae35.de)
// @licence        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include        http://filebase.to/files/*
// @include        http://filebase.to/download/*
// ==/UserScript==

GM_registerMenuCommand('Switch Downloadmode', function() { 
	GM_setValue('forceDL', confirm('Always redirect to the direct download. DivX-Streaming will be inaccessible.'));
}, '', 'm');

// check if we are on a download or streaming page
var download = new Boolean(window.location.href.match(/\/download\//));

// if set, we are on the waiting page
var uid = document.getElementById('uid');

if (uid) {
	// get the counter submit form
	var form = uid.parentNode;

	if (download == false && GM_getValue('forceDL', false)) {
		// force form to submit to download page
		form.action = window.location.href.replace(/\/files\//, '/download/');
	}

	// enable download button
	document.getElementById('dlbutton').disabled = false;
	
	// submit form
	form.submit();
}
else if (download == true) {
	// submit to direct download
	document.getElementsByName('wait')[0].parentNode.submit();
}
else {
	// directly show divx player instead of adlayer
	document.getElementById("go2").style.display = "inline";
	document.getElementById("go1").style.display = "none";
}


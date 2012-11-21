// ==UserScript==
// @name           Download Link Expander
// @namespace      http://brainroom.ae35.de
// @include        http://hoerbuch.to/*
// ==/UserScript==

var links = document.evaluate("//div[@class='quoteBody']/a", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 

for (var i = 0; i < links.snapshotLength; i++) {
	var link = links.snapshotItem(i);
	link.innerHTML = link.href;
}

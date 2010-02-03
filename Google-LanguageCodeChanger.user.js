// ==UserScript==
// @name           Google Language Code Changer
// @namespace      http://brainroom.ae35.de
// @description    Add a select-box for the hl parameter on google result pages.
// @version        1.0
// @copyright      2010+, kleingeist (http://github.com/kleingeist/userscripts)
// @licence        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include        http://www.google.*/search?*
// ==/UserScript==



(function glcc() {
    // language list, borrowed from http://gpsgfaq.googlepages.com/google_language_codes.html
    // You can change following list few for your main using. e.g., var list = ['en', 'ja', 'xx-hacker']
    var list = 
    ['af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bh', 'xx-bork', 'bs', 'br', 'bg', 'km', 'ca',
     'zh-CN', 'zh-TW', 'co', 'hr', 'cs', 'da', 'nl', 'xx-elmer', 'en', 'eo', 'et', 'fo', 'tl', 'fi',
     'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gn', 'gu', 'xx-hacker', 'iw', 'hi', 'hu', 'is', 'id', 'ia', 'ga',
     'it', 'ja', 'jw', 'kn', 'kk', 'xx-klingon', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'ln', 'lt', 'mk',
     'ms', 'ml', 'mt', 'mr', 'mo', 'mn', 'ne', 'no', 'nn', 'oc', 'or', 'ps', 'fa', 'xx-piglatin', 'pl',
     'pt-BR', 'pt-PT', 'pa', 'qu', 'ro', 'rm', 'ru', 'gd', 'sr', 'sh', 'st', 'sn', 'sd', 'si', 'sk', 'sl',
     'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'tt', 'te', 'th', 'ti', 'to', 'tr', 'tk', 'tw', 'ug', 'uk', 'ur',
     'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu'];
	
		
	// get hl inputs
	var hl = document.getElementsByName('hl');

	var current;
	if (typeof(unsafeWindow.google) != 'undefined' && unsafeWindow.google.kHL)
		current = unsafeWindow.google.kHL;
	else if(hl.length > 0)
		current = hl[0].value;
	else
		current = myhl

	if (hl.length > 0)
		hl[0].parentNode.removeChild(hl[0]);
	
	
	function generateOption(v) {
		return '<option value="' + v + '"' + ((v == current)? ' selected="1"' : '') + '>' + v + '</option>';
	};
	
	var sel = document.createElement('select');
	sel.setAttribute('id','glccm');
	sel.setAttribute('name', 'hl');
	sel.setAttribute('STYLE', 'margin:2px 0 0 .4em;');
	sel.innerHTML = list.map(generateOption).join("\n");		
	document.getElementsByName('btnG')[0].parentNode.appendChild(sel);

	
	var parentForm = sel.parentNode;
	while(parentForm.nodeName.toUpperCase() != 'FORM') {
		parentForm = parentForm.parentNode;
	}
	sel.addEventListener("change", function (event) { parentForm.submit(); }, true);
})();
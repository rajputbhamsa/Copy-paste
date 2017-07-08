(function(){ 
	var d = document, s = 'script', id_ = 'google-js';
	var js, js = d.createElement(s); js.id = id_;
	js.src = '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
	d.head.appendChild(js); 
	var js2 = d.createElement(s); js2.id = 'achaljs';
	jQuery('body').append('<div id="achaldiv" style=" position: fixed; top: 0; left: 0; border-bottom: 1px solid #ddd; width: 100%; padding: 6px; background: #fff; z-index: 10000001;"><span><input type="checkbox" id="TitleCase" onchange="if(this.checked){lowerCase.checked=false;}"><label for="TitleCase">To Title Case</label></span>&nbsp;&nbsp;<span><input type="checkbox" id="lowerCase" onchange="if(this.checked){TitleCase.checked=false;}"><label for="lowerCase">to lower case</label></span><span><input type="button" id="activateWdgt" value="Activate" onclick="activateWidget()" style=" cursor: pointer; background: rgb(60, 140, 231); color: #fff; border-radius: 5px; padding: 4px 8px; margin-left: 15px; margin-bottom: 5px; "></span><input type="text" id="copyText" value="" style=" height: 31px; width: 97%; border: 1px solid #ddd; font-size: 17px; " placeholder="Shared By Rajput Bhamsa (:-))"><input type="button" value="X" style=" margin-left: 2px; background: #000; border: 0; color: #fff; cursor: pointer; padding: 2px 5px;" onclick="removeWidget()"></div>');
})();
var activateWidget = function() { 
		var tcase = document.getElementById('TitleCase').checked;
		var lcase = document.getElementById('lowerCase').checked;
		var a = new Array();
		var elements=$('*:not(div#achaldiv)');
		var linewrap = /(\n\r|\n|\r)/gm;
		$(elements).on('click',function(){
			a.pop(a, a.length);
			a.push($(this).html().replace(/•|\s•/gm,';').replace(/<br>/g,'\n').replace(linewrap,' ').replace(/\s+/gm, ' ').replace(/<[^>]*>?/g,'').trim());
			//console.log(a[0]);
			if(tcase) {
				document.getElementById('copyText').value=a[0].replace(linewrap, ' ').toTitleCase();
			}
			if(lcase) {
				document.getElementById('copyText').value=a[0].toLowerCase().replace(linewrap, ' ');
			}
			if(tcase == false && lcase == false) {
				if(a[0] !== ''){
					document.getElementById('copyText').value=a[0].replace(/•|\s•/gm,';');
				}
			}
			document.getElementById('copyText').select();
			document.getElementById('copyText').onchange=onselect=function(){
				if(typeof copy !== 'undefined') {
					copy(document.getElementById('copyText').value);
				} else {
					document.execCommand('copy');
				}
			};
			return false;
		});
		$('#activateWdgt').val('Activated');
		setTimeout(function(){
			$('#activateWdgt').removeAttr('onclick'); $('#activateWdgt').prop('onclick',null);$('#lowerCase').removeAttr('onclick');$('#TitleCase').removeAttr('onclick');$('#lowerCase').prop('onclick',null);$('#TitleCase').prop('onclick',null);
		},1200);
	};
var removeWidget = function(){
	$('#achaldiv').remove();
	activateWidget = function(){};
	$('#achaljs').remove();
};
	String.prototype.toTitleCase = function() {
		var i, j, str, lowers, uppers; str = this.replace(/([^\W_]+[^\s-]*) */g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }); lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With']; for (i = 0, j = lowers.length; i < j; i++) { str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), function(txt) { return txt.toLowerCase(); }); } uppers = ['Id', 'Tv']; for (i = 0, j = uppers.length; i < j; i++) { str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), uppers[i].toUpperCase()); } return str;
	}

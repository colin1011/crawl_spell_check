

$(document).ready(function(){
	web_server='http://ec2-52-66-255-188.ap-south-1.compute.amazonaws.com/crawlNspellcheck/v1/input/?q='
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
	console.log(tabs[0].url);
	pageurl=tabs[0].url;
	$('#taburl').html(pageurl)


	$('#crawlbtn').click(function(){
		chrome.tabs.create({active: true, url: web_server+pageurl});

	})

});

});
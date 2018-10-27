

$(document).ready(function(){

	chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
	console.log(tabs[0].url);
	//alert(tabs[0].url);

	$('#taburl').html(tabs[0].url)

	$('#crawlbtn').click(function(){
		chrome.tabs.create({active: true, url: 'index.html'});
	})

});

});
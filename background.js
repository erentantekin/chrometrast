// Chrometrast
//
//

var blackify = '\
var plist = document.querySelectorAll("p, article");\
for (var i = 0; i < plist.length; i++)\
    plist[i].style.color = "rgba(0, 0, 0, 1.0)";\
	//plist[i].style.cssText = "color:rgba(0, 0, 0, 1.0) !important";\
'

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		code: blackify
	});
});

// Keyboard shortcut
chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.executeScript({
		code: blackify
	});
});

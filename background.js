// Chrometrast
//
//

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		file: "blackify.js"
	});
});

// Keyboard shortcut
chrome.commands.onCommand.addListener(function(command) {
	if (command==="blackify") {
		chrome.tabs.executeScript({
			file: "blackify.js"
		});
	}
	if (command==="unblackify") {
		chrome.tabs.executeScript({
			file: "unblackify.js"
		});		
	}
});


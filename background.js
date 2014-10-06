//Pomodoro Timer
//Background Script
console.log("background script running");

chrome.runtime.onMessage.addListener( function(message, sender, response) {
	console.log("message sent");
	blockListener();
})

function blockListener(tabId, changeInfo, tab) {
	console.log("Tab blocker active");
	localStorage.setItem("blocked_sites", "www.reddit.com");

	var url = tab.url;
	//url = parseUri(url)['domain'];
	var set_url = localStorage.getItem("blocked_sites");

	//if ((url == set_url)) {
	//	chrome.tabs.remove(tabId, function() {
	//		alert("Keep Working! -Pomodoro Timer.")
	//	})
	//}
}

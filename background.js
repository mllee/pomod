//Pomodoro Timer
//Background Script

function blockListener(tabId, changeInfo, tab) {
	localStorage.setItem("blocked_sites", "www.reddit.com");

	var url = tab.url;
	url = parseUri(url)['domain'];
	var set_url = localStorage.getItem("blocked_sites");

	if ((url == set_url)) {
		chrome.tabs.remove(tabId, function() {
			alert("Keep Working! -Pomodoro Timer.")
		})
	}
}
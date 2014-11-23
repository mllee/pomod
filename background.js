//Pomodoro Timer
//Background Script
console.log("background script running");
//blockListener();


if (!chrome.tabs.onUpdated.hasListener(blocker)){
    console.log("Block listener activated");
    chrome.tabs.onUpdated.addListener(blocker);
}

function blocker(tabId, changeInfo, tab) {
    var d = new Date();
    // retrieve blocked websites in later update
    var tabUrl = tab.url;

    //wtf is going wrong here 
    console.log(date.parse(d));
    console.log(localStorage.getItem('endworktime'));
    console.log("bool debug:")
    console.log(parseInt(d) < parseInt(localStorage.getItem('endworktime')));

    if (d < localStorage.getItem('endworktime')) {
        chrome.tabs.getSelected(null, function(tab) {
            tabUrl = tab.url;
        });


        bl_nowww = stripWWW("www.reddit.com");
        bl_www = parseUri("www.reddit.com")['domain'];
        if((url == bl_nowww) || (url == bl_www))
        {
            chrome.tabs.remove(tabId, function()
            {
                alert(url + " is on your blocklist.");
            });
        }
        if (tabUrl.contains("reddit")) {
            alert("Site is blocked"); //testing fix later 
        }
    }
}

/*
chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'reddit' },
          })
        ],
        // And shows the extension's page action.
        actions: [
            console.log("actiondebug"),
            alert("Blocked!")
        ]
      }
]);
*/



//A lot of functionality in the below was learned by studying the source of
//Davy Dany's Concentrate, another productivity app.
//I had previously been using Concentrate but didnt like the format, which
//spurred me to create my Pomodoro Timer.
// Thanks for the inspiration Davy. (and helping me figure this bit out)

/*
function blockListener(tabId, changeInfo, tab)
{
    var url = tab.url;
    localStorage.setItem("blocklist", [reddit]);
    var blocklist = localStorage.getItem('blocklist');
    //^was giving me issues. implement properly later. -Matt, 10/27/14
    //var timerend = new Date(localStorage.getItem('endtime'));
    //^this wont work because im dynamically allocating time 

    //if(timerend && (url != undefined))
    if(url != undefined)
    {
        var blcontent = blocklist.split(',');
        url = parseUri(url)['domain'];

        console.log("init debug");
        for(var i = 0; i < blcontent.length; i++)
        {
            if(blcontent[i] != "")
            {
                console.log("debug1");
                bl_nowww = stripWWW(blcontent[i]);
                bl_www = parseUri(blcontent[i])['domain'];
                if((url == bl_nowww) || (url == bl_www))
                {
                    console.log("debug2");
                    chrome.tabs.remove(tabId, function()
                    {
                        alert(url + " is on your blocklist.");
                    });
                }
            }
        }
    }
}
*/




/* parseUri JS v0.1, by Steven Levithan (http://badassery.blogspot.com)
Splits any well-formed URI into the following parts (all are optional):
----------------------
• source (since the exec() method returns backreference 0 
[i.e., the entire match] as key 0, we might as well use it)
• protocol (scheme)
• authority (includes both the domain and port)
    • domain (part of the authority; can be an IP address)
    • port (part of the authority)
• path (includes both the directory path and filename)
    • directoryPath (part of the path; supports directories with periods, and without a trailing backslash)
    • fileName (part of the path)
• query (does not include the leading question mark)
• anchor (fragment)
*/
function parseUri(sourceUri){
    var uriPartNames = ["source","protocol","authority","domain","port","path","directoryPath","fileName","query","anchor"];
    var uriParts = new RegExp("^(?:([^:/?#.]+):)?(?://)?(([^:/?#]*)(?::(\\d*))?)?((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[\\?#]|$)))*/?)?([^?#/]*))?(?:\\?([^#]*))?(?:#(.*))?").exec(sourceUri);
    var uri = {};

    for(var i = 0; i < 10; i++){
        uri[uriPartNames[i]] = (uriParts[i] ? uriParts[i] : "");
    }

    // Always end directoryPath with a trailing backslash if a path was present in the source URI
    // Note that a trailing backslash is NOT automatically inserted within or appended to the "path" key
    if(uri.directoryPath.length > 0){
        uri.directoryPath = uri.directoryPath.replace(/\/?$/, "/");
    }

    return uri;
}

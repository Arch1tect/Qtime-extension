// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        responseObj = {};
        responseObj.name = document.title;
        responseObj.link = document.location.href;
        console.log(responseObj);
        sendResponse(responseObj);
    }
});


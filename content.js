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

// var socket = io('http://localhost:4321');

var chatboxIFrame  = document.createElement ("iframe");
chatboxIFrame.src  = chrome.extension.getURL ("chatbox/index.html");
chatboxIFrame.id="chatbox-iframe";


    // var iFrame = document.getElementById( 'iFrame1' );


document.body.insertBefore(chatboxIFrame, document.body.firstChild);


function resizeIFrameToFitContent() {

    chatboxIFrame.width  = chatboxIFrame.contentWindow.document.body.scrollWidth;
    chatboxIFrame.height = chatboxIFrame.contentWindow.document.body.scrollHeight;
}

resizeIFrameToFitContent();

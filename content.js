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
    

        chatboxDiv  = document.createElement ("div");
        indexURL = chrome.extension.getURL ("chatbox/index.html");

        chatboxDiv.innerHTML = '<object type="text/html" id="socket-chatbox-embeded" data="'+indexURL+'" ></object>';

        document.body.insertBefore(chatboxDiv, document.body.firstChild);
    }
});



// setTimeout(function(){ 
//             console.log('now');
//             console.log(window.location.href);

//             document.removeChild(window.chatboxIFrame);

//             window.chatboxIFrame.width  = window.chatboxIFrame.contentWindow.document.body.scrollWidth;
//             window.chatboxIFrame.height = window.chatboxIFrame.contentWindow.document.body.scrollHeight;
// }, 12000);



window.addEventListener("message", resizeIFrameToFitContent, false);





function resizeIFrameToFitContent() {

    console.log('resizing');

    // setTimeout(function(){ 

            chatboxDiv.width  = chatboxDiv.contentWindow.document.body.scrollWidth;
    //         chatboxIFrame.height = chatboxIFrame.contentWindow.document.body.scrollHeight;
     
    // }, 3000);

}

// resizeIFrameToFitContent();

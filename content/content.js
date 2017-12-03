
console.log('load', 'chrome');
var imgList = document.querySelectorAll('img');
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log(message, sender, sendResponse);
    if (message.status === 'start') {
        var imgSrcList = [];
        for (var i = 0; i < imgList.length; i++) {
            imgSrcList.push(imgList[i].getAttribute('src'));
        }
        console.log(imgSrcList);
        sendResponse({imgList: imgSrcList});
    }
})
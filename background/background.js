console.log('hello, chrome runtime');
function collectImgs() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {status: 'start'}, function(response) {
            console.log(response);
            for (var i = 0; i < response.imgList.length; i++) {
                console.log(response.imgList[i]);
                var ele = document.createElement('img');
                ele.setAttribute('src', response.imgList[i]);
                document.getElementById('container').appendChild(ele);
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tap-collect').addEventListener('click', collectImgs);
})


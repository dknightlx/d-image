function collectImgs() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {status: 'start'}, function(response) {
            for (var i = 0; i < response.imgList.length; i++) {
                var ele = document.createElement('img');
                ele.setAttribute('src', response.imgList[i]);
                document.getElementById('imgs-container').appendChild(ele);
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tap-collect').addEventListener('click', collectImgs);
})

var ImgUrlUtil = function() {
    this._url = '';
    function url(u) {
        console.log('set url', u);
        this._url = u;
    }
}
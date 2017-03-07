var webview = document.querySelector('webview');
    window.addEventListener("touchstart", handleTouchStart, false);
    window.addEventListener("touchend", handleTouchMove, false);
    window.addEventListener("touchend", handleTouchEnd, false);
    webview.addEventListener('did-stop-loading', loadstop, false);

    var touchPosition = {
        x: 0,
        y: 0
    };

    function loadstop() {
        if (webview.getURL().includes('books/reader?')) {
            console.log('Show touch divs');
            showTouchDivs();
        }
        else {
            console.log('Hide touch divs');
            hideTouchDivs();
        }
    }

    function showTouchDivs() {
        var leftDiv = document.getElementById('left-touch-zone');
        var leftDivStyle = leftDiv.getAttribute('style')
        if (leftDivStyle.includes('display: none;')){
            leftDiv.setAttribute('style', leftDivStyle.replace('display: none;','display: block;'));
        }
        
        var rightDiv = document.getElementById('right-touch-zone');
        var rightDivStyle = rightDiv.getAttribute('style');
        if (rightDivStyle.includes('display: none;')){
            rightDiv.setAttribute('style', rightDivStyle.replace('display: none;','display: block;'));
        }
    }

    function hideTouchDivs() {
        var leftDiv = document.getElementById('left-touch-zone');
        var leftDivStyle = leftDiv.getAttribute('style')
        if (leftDivStyle.includes('display: block;')){
            leftDiv.setAttribute('style', leftDivStyle.replace('display: block;', 'display: none;'));
        }
        var rightDiv = document.getElementById('right-touch-zone');
        var rightDivStyle = rightDiv.getAttribute('style')
        if (rightDivStyle.includes('display: block;')){
            rightDiv.setAttribute('style', rightDivStyle.replace('display: block;', 'display: none;'));
        }
    }

    function handleTouchEnd(e) {
        const win = require('electron').remote.BrowserWindow;
        console.log("Touch registered");
        if (touchPosition.x > window.innerHeight/2) {
            webview.sendInputEvent({
                type: "keydown",
                keyCode: "Right"
            });
            webview.sendInputEvent({
                type: "keyup",
                keyCode: "Right"
            });
        } else {
            webview.sendInputEvent({
                type: "keydown",
                keyCode: "Left"
            });
            webview.sendInputEvent({
                type: "keyup",
                keyCode: "Left"
            });
        }
    }

    function handleTouchStart(e) {
        touchPosition.x = e.changedTouches[0].pageX;
        touchPosition.y = e.changedTouches[0].pageY;
    }

    function handleTouchMove(e) {
        touchPosition.x = e.changedTouches[0].pageX;
        touchPosition.y = e.changedTouches[0].pageY;
    }
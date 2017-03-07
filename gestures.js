export default function() {
    var getGesture = function(cursorLocationStart, cursorLocationEnd) {
        deltaX = cursorLocationEnd.x - cursorLocationStart.x;
        deltaY = cursorLocationEnd.y - cursorLocationStart.y;

        switch(deltaX > deltaY){
            case true:
                switch(deltaX > 0){
                    case true:
                        return "swipeRight";
                    default:
                        return "swipeLeft";
                }
            default:
                switch(deltaY > 0){
                    case true:
                        return "swipeUp";
                    default:
                        return "swipeDown";
                }
        }
    }
}
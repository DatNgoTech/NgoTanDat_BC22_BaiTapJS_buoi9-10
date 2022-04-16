function Validation() {
    this.checkEmpty = function(value, errorId, mess) {
        if (value === "") {
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    }
    this.checklength = function(value, errorId, mess, min, max) {
        if (value.trim().length >= 4 && value.trim().length <= 6) {
            //right
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        //wrong
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }
}
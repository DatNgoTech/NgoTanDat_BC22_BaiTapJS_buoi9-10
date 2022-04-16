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
        if (value.trim().length >= min && value.trim().length <= max) {
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
    this.checklengthcharacter = function(value, errorId, mess) {
        var letter = "^[A-Za-z]+$";
        if (value.match(letter)) {
            //true
        }
    }
}
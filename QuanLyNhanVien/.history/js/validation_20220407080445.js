function Validation() {
    this.checkEmpty = function(value, mess, errorId) {
        if (value == " ") {
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    }
}
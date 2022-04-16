function Validation() {
    this.checkEmpty = function(value, errorId, mess) {
        if (value === "") {
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        } else if (value === " ") {
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
        }
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    }
}
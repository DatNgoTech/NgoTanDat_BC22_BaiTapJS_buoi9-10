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
    this.checklength = function(value, errorId, mess) {
        if (value.length >= 4 && value.length <= 10) {

        }
    }
}
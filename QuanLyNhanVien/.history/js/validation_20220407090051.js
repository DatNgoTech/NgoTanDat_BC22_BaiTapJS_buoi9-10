function Validation() {
    this.checkEmpty = function(value, errorId, mess) {
        if (value === "") {
            getEle(errorId).innerHTML = "(*)Tài khoản không được để trống";
            getEle(errorId).style.display = "block";
            return false;
        } else if (value === " ")
            getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    }
}
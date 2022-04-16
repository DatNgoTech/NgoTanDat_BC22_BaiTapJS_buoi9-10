function Validation() {
    this.checkEmpty = function(value, errorId, ) {
        if (value === "") {
            getEle(errorId).innerHTML = "(*)Tài khoản không được để trống";
            getEle(errorId).style.display = "block";
            return false;
        }
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "block";
    }
}
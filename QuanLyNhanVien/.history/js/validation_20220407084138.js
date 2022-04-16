function Validation() {
    this.checkEmpty = function(value, errorId, ) {
        if (value === "") {
            getEle(errorId).innerHTML = "(*)Tài khoản không được để trống";
        }
    }
}
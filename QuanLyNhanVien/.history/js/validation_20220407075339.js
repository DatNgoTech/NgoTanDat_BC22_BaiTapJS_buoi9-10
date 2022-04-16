function Checknumber() {
    this.checkEmpty = function(value, errorId, mess) {
        //Validation
        if (value === "") {
            //Error
            getEle(errorId).addEventListener.innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }
        // right
        getEle(errorId).addEventListener.innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    }
    this.checkleghtletter = function(value, errorId, mess, min, max) {
        if (value.length >= min && value.length <= max) {
            getEle(errorId).addEventListener.innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        getEle(errorId).addEventListener.innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }
};
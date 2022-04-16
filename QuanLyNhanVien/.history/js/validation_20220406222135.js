function checknumber() {
    var x = document.getElementById("tknv").value;
    var result = "";
    if (isNaN(x)) {
        document.getElementById("tknv").style.borderColor = "red";
        document.getElementById("tbTKNV").style.borderColor = "red";
        result = "Tài khoản không chứa ký tự chữ chỉ được nhập số";
    } else {
        document.getElementById("tknv").style.borderColor = "green";
    }
    document.getElementById("tbTKNV").innerHTML = result;
};
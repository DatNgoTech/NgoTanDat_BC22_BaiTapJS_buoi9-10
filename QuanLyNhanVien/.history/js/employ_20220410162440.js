function Employee(_account, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam) {
    this.account = _account;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = _gioLam;
    this.classifica = function() {
        if (Number(this.gioLam) >= 192) {
            return " xuất sắc";
        } else if (Number(this.gioLam) >= 192 >= 176 && Number(this.gioLam) >= 192 < 192) {
            return " giỏi";
        } else if (Number(this.gioLam) >= 192 >= 160 && Number(this.gioLam) >= 192 < 176) {
            return " khá";
        } else if (Number(this.gioLam) >= 192 < 160) {
            return " trung bình";
        }
    }
}
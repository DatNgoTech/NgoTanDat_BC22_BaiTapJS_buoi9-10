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
        var timework = this.gioLam;
        if (timework >= 192) {
            return " xuất sắc";
        } else if (timework >= 176 && timework < 192) {
            return " giỏi";
        } else if (timework >= 160 && timework < 176) {
            return " khá";
        }
        return " trung bình";

    }
}
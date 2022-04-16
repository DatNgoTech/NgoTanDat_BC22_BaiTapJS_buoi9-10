function Employee(_account, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam) {
    this.account = _account;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = Number(_gioLam);
    this.classifica = function() {
        if (_gioLam >= 192) {
            return " xuất sắc";
        } else if (_gioLam >= 176 && _gioLam < 192) {
            return " giỏi";
        } else if (_gioLam >= 160 && _gioLam < 176) {
            return " khá";
        } else if (_gioLam < 160) {
            return " trung bình";
        }
    }
}
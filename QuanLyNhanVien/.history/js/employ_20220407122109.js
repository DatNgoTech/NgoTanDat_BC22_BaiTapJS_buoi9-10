function Employee(_account, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam) {
    this.account = _account;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = _gioLam;

    this.classification = function(gioLam) {
        if (gioLam >= 192) {
            return "Nhân viên xuất sắc";
        } else if (gioLam >= 176 && gioLam < 192) {
            return "Nhân viên giỏi";
        } else if (gioLam >= 160 && gioLam < 176) {
            return "Nhân viên khá";
        } else if (gioLam < 160) {
            return "Nhân viên trung bình";
        }
    }
    this.result = this.classification(this.gioLam)
}
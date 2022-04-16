function Employee(_account, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam, worktime) {
    this.account = _account;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = _gioLam;
    this.worktime = this.gioLam;
    this.timework = function() {
        if (this.worktime >= 192) {
            return "Xuất sắc";
        } else if (this.worktime >= 176 && this.worktime < 192) {
            return "Giỏi";
        } else if (this.worktime >= 160 && this.worktime < 176) {
            return "Khá";
        } else {
            return "Trung bình";
        }
    }
}
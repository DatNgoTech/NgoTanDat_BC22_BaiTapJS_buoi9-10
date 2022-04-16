function Employee(_account, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam) {
    this.account = _account;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = _gioLam;
    this.classification = _classification;
    this.classification = function(value) {
        if (value >= 192) {
            return " xuất sắc";
        } else if (value >= 176 && value < 192) {
            return " giỏi";
        } else if (value >= 160 && value < 176) {
            return " khá";
        } else if (value < 160) {
            return " trung bình";
        }
    }

}
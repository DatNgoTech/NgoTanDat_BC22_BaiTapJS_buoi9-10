function ListEmployee() {
    this.arr = [];
    this.addEmployee = function(st) {
        this.arr.push(st);
    };
    this.findPositionEmployee = function(account) {
        // tim kiem sinh vien
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].account === account) {
                index = i;
                break;
            }
        }
        return index;
    }
    this.deleteEmployee = function(account) {
        var index = this.findPositionEmployee(account)
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };
    this._fix = function(account) {
            var index = this.findPositionEmployee(account);
            if (index !== -1) {
                var employee = this.arr[index];
                return employee;
            }
            return null;
        }
        // this.fixEmployee = function(account) {
        //     var index = this.findPositionEmployee(account);
        //     if (index !== -1) {
        //         //Lấy obj nhanVien trong ar dựa vào index
        //         var employee = this.arr[index];
        //         return employee;
        //     }
        //     return null;
        // }
    this.updateEmployee = function(employee) {
        var index = this.findPositionEmployee(employee.account);
        if (index !== -1) {
            this.arr[index] = employee;
        }
    }
    this.findEmployee = function(keyword) {
        var findArray = [];
        for (var i = 0; i < this.arr.length; i++) {
            var employee = this.arr[i];
            if (employee.classEmploy.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                findArray.push(employee);
            }
        }
        return findArray;
    }
}
function ListEmployee() {
    this.arr = [];
    this.addEmployee = function(st) {
        this.arr.push(st);
    };
    this.findPositionEmployee = function(id) {
        // tim kiem sinh vien
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
    this.deleteEmployee = function(id) {
        var index = this.findPositionEmployee(id)
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };
}
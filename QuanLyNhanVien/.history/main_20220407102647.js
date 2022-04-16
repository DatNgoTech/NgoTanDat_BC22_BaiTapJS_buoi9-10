var arr = [];
var listEmpoyee = new ListEmployee();
var validation = new Validation();

getLocalStorage();




function getEle(id) {
    return document.getElementById(id);
}

function takeinfoEmployee() {
    var account = getEle("tknv").value;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var pass = getEle("password").value;
    var datepicker = getEle("datepicker").value;
    var luongCB = getEle("luongCB").value;
    var chucvu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value;
    //flag
    var isValid = true;

    //Validation
    isValid &= validation.checkEmpty(account, "accountTB", "(*)Tài khoản không được bỏ trống") && validation.checklength(account, "accountTB", "(*)Độ dài kí tự từ 4 đến 6", 4, 6);
    isValid &= validation.checkEmpty(name, "nameTB", "(*)Tên không được bỏ trống") && validation.checklengthcharacter(name, "nameTB", "(*)Vui lòng nhập chữ");
    isValid &= validation.checkEmpty(email, "emailTB", "(*)Email không được bỏ trống");
    isValid &= validation.checkEmpty(pass, "passTB", "(*)Mật khẩu không được bỏ trống");
    isValid &= validation.checkEmpty(datepicker, "dayTB", "(*)Ngày không được bỏ trống");
    isValid &= validation.checkEmpty(luongCB, "salaryTB", "(*)Lương cơ bản không được bỏ trống") && validation.checkNumber(luongCB, "salaryTB", "(*)Vui lòng nhập số !") && validation.checklength(luongCB, "salaryTB", "(*)Lương phải từ 1 triệu đến 20 triệu", 1000000, 20.000000);
    isValid &= validation.checkEmpty(chucvu, "spTB", "(*)Chức vụ không được bỏ trống");
    isValid &= validation.checkEmpty(gioLam, "timeTB", "(*)Giờ làm không được bỏ trống") && validation.checkNumber(gioLam, "timeTB", "(*)Vui lòng nhập số !");
    //check form
    if (!isValid) { return null; };
    //Tạo đối tượng nhanVien
    var employee = new Employee(account, name, email, pass, datepicker, luongCB, chucvu, gioLam);
    return employee;
}
getEle("btnThemNV").addEventListener("click", function() {
    var employee = takeinfoEmployee();
    //add student
    listEmpoyee.addEmployee(employee);
    createTable(listEmpoyee.arr);
    setLocalStorage();
})

function createTable(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var employee = arr[i];
        content += `
        <tr>
                <td>${employee.account}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.datepicker}</td>
                <td>${employee.chucvu}</td>

        </tr>
        `
    }
    getEle("tableDanhSach").innerHTML = content;
}

function setLocalStorage() {
    //Chuyển  data từ JSON =>string
    var dataString = JSON.stringify(listEmpoyee.arr);
    //Lưu số localStorage
    localStorage.setItem("Listemployee", dataString);
}

function getLocalStorage() {
    var data = localStorage.getItem("Listemployee");
    if (data) {
        //Chuyển về String => JSON
        var dataJson = JSON.parse(data);
        listEmpoyee.arr = dataJson;
        createTable(listEmpoyee.arr);
    }

}
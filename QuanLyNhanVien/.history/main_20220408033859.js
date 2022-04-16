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
    var chucvu = getEle("chucvu").value;
    var luongCB = getEle("luongCB").value;

    var gioLam = getEle("gioLam").value;


    //flag
    var isValid = true;
    //Validation
    isValid &= validation.checkEmpty(account, "accountTB", "(*)Tài khoản không được bỏ trống") && validation.checklength(account, "accountTB", "(*)Độ dài kí tự từ 4 đến 6", 4, 6);
    isValid &= validation.checkEmpty(name, "nameTB", "(*)Tên không được bỏ trống") && validation.checklengthcharacter(name, "nameTB", "(*)Vui lòng nhập chữ");
    isValid &= validation.checkEmpty(email, "emailTB", "(*)Email không được bỏ trống") && validation.checkEmail(email, "emailTB", "(*)Vui lòng nhập đúng cú pháp email");
    isValid &= validation.checkEmpty(pass, "passTB", "(*)Mật khẩu không được bỏ trống") && validation.checkpassword(pass, "passTB", "(*)Vui lòng nhập mật khẩu có ít nhất 1 kí tự số, 1 chữ viết hoa,1 chữ viết thường và 1 kí tự đặc biệt");
    isValid &= validation.checkEmpty(luongCB, "salaryTB", "(*)Lương cơ bản không được bỏ trống") && validation.checkNumber(luongCB, "salaryTB", "(*)Vui lòng nhập số !") && validation.checkSalary(luongCB, "salaryTB", "(*)Lương cơ bản phải từ 1 triệu đến 20 triệu", 1000000, 20000000);
    isValid &= validation.checkEmpty(gioLam, "timeTB", "(*)Giờ làm không được bỏ trống") && validation.checkNumber(gioLam, "timeTB", "(*)Vui lòng nhập số !") && validation.checkSalary(gioLam, "timeTB", "(*)Số giờ làm phải từ 80 đến 200 giờ", 80, 200);
    //check form
    if (isValid) {
        var employee = new Employee(account, name, email, pass, datepicker, luongCB, gioLam);
        return employee;
    }
    //Tạo đối tượng nhanVien
};
getEle("btnThemNV").addEventListener("click", function() {
    var employee = takeinfoEmployee();

    //add employee
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
                <td>${employee.luongCB}</td>
                <td>${ employee.result}</td>
                <td>
                <button class="btn btn-info" onclick="fix('${employee.account}')">fix</button>
                    <button class="btn btn-danger" onclick="Delete('${employee.account}')">Delete</button>
                </td>
        </tr>
        `
    }
    getEle("tableDanhSach").innerHTML = content;
}
/**
 * Xóa sinh viên
 */
function Delete(account) {
    listEmpoyee.deleteEmployee(account);
    setLocalStorage();
    getLocalStorage();
}

function fix(account) {
    //Lấy thông tin chi tiết
    var employee = listEmpoyee.fixEmployee(account);

    //Show thông tin của sinh viên vào trong form
    getEle("tknv").value = employee.account;
    getEle("name").value = employee.name;
    getEle("email").value = employee.email;
    getEle("password").value = employee.pass;
    getEle("datepicker").value = employee.datepicker;
    getEle("chucvu").value = employee.chucvu;
    getEle("luongCB").value = employee.luongCB;
    getEle("gioLam").value = employee.gioLam;
}
getEle("btnCapNhat").addEventListener("click", function() {
    // Lấy lại những thông tin mới nhất từ thẻ input
    var employee = takeinfoEmployee();
    listEmpoyee.updateEmployee(employee);
    setLocalStorage();
    getLocalStorage();
})

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
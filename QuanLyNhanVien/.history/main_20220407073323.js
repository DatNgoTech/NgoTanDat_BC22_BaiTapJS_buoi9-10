var arr = [];
var listEmpoyee = new ListEmployee();
var checknumber = new Checknumber();
getLocalStorage();


function getEle(id) {
    return document.getElementById(id);
}

function takeinfoEmployee() {
    var account = getEle("tknv").value * 1;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var pass = getEle("password").value;
    var datepicker = getEle("datepicker").value;
    var luongCB = getEle("luongCB").value * 1;
    var chucvu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value * 1;

    //flag

    var isValid = true;
    //Validation MaSV
    isValid &= validation.checkEmpty(id, "divErrorMaSV", "(*) MaSV không được rỗng") && validation.checkleghtletter(id, "divErrorMaSV", "(*)Độ dài kí tự từ 4 đến 10", 4, 10);
    //Validation name
    isValid &= validation.checkEmpty(name, "divErrorTenSV", "(*) TenSV không được rỗng");
    //Validation email
    isValid &= validation.checkEmpty(email, "divErrorEmailSV", "(*) EmailSV không được rỗng");
    //Validation pass
    isValid &= validation.checkEmpty(pass, "divErrorPassSV", "(*) PassSV không được rỗng");
    //Validation dob
    isValid &= validation.checkEmpty(dob, "divErrordateSV", "(*) dobSV không được rỗng");
    //Validation mathscore
    isValid &= validation.checkEmpty(mathscore, "divErrorToanSV", "(*) Không được bỏ trống điểm");
    //Validation diemLy
    isValid &= validation.checkEmpty(diemLy, "divErrorLySV", "(*) Không được bỏ trống điểm");
    //Validation diemHoa
    isValid &= validation.checkEmpty(diemHoa, "divErrorHoaSV", "(*) Không được bỏ trống điểm");
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
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
    //chack form
    if (!isValid) return null;
    //Validation MaSV
    isValid &= checknumber.checkEmpty(account, "account", "(*) MaSV không được rỗng") && checknumber.checkleghtletter(account, "account", "(*)Độ dài kí tự từ 4 đến 10", 4, 10);
    //Validation name
    isValid &= checknumber.checkEmpty(name, "divErrorTenSV", "(*) TenSV không được rỗng");
    //checknumber email
    isValid &= checknumber.checkEmpty(email, "divErrorEmailSV", "(*) EmailSV không được rỗng");
    //checknumber pass
    isValid &= checknumber.checkEmpty(pass, "divErrorPassSV", "(*) PassSV không được rỗng");
    //checknumber dob
    isValid &= checknumber.checkEmpty(datepicker, "divErrordateSV", "(*) dobSV không được rỗng");
    //checknumber mathscore
    isValid &= checknumber.checkEmpty(luongCB, "divErrorToanSV", "(*) Không được bỏ trống điểm");
    //checknumber diemLy
    isValid &= checknumber.checkEmpty(chucvu, "divErrorLySV", "(*) Không được bỏ trống điểm");
    //checknumber diemHoa
    isValid &= checknumber.checkEmpty(gioLam, "divErrorHoaSV", "(*) Không được bỏ trống điểm");
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
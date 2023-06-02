function getID(id) {
    return document.getElementById(id);
}
function getValue(id) {
    return document.getElementById(id).value;
}

//=======================================================================//
const dsnv = new DanhSachNhanVien();

function setLocalStorage(mangNV) {
    localStorage.setItem("DSNhanVien", JSON.stringify(mangNV));
}
function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("DSNhanVien"));
    if (dataLocal !== null) {
        hienThiTable(dataLocal);
        dsnv.mangNV = dataLocal;
    }
}
getLocalStorage();

//=======================================================================//
getID("btnThemNV").onclick = function themNV() {
    var taiKhoan = getValue("tknv")
    var hoTen = getValue("name")
    var email = getValue("email")
    var pass = getValue("password")
    var ngayLam = getValue("datepicker")
    var luongCB = getValue("luongCB")
    var chucVu = getValue("chucvu")
    var gioLam = getValue("gioLam")


    var nv = new NhanVien(taiKhoan, hoTen, email, pass, ngayLam, luongCB, chucVu, gioLam)
    // console.log(taiKhoan, hoTen, email, pass, ngayLam, luongCB, chucVu, gioLam)
    nv.tongLuong();
    nv.xepLoai();
    console.log(nv)

    dsnv.themNV(nv)
    console.log(dsnv)
    console.log(dsnv.mangNV)

    hienThiTable(dsnv.mangNV)
    setLocalStorage(dsnv.mangNV)
}

//=======================================================================//
function hienThiTable(mangNV) {
    var thongTinNV = "";

    mangNV.map(function (nv, index) {
        var trNV = `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
            <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
            <button class="btn btn-warning" data-toggle="modal"
            data-target="#myModal" onclick="xemThongTin('${nv.taiKhoan}')" >Xem</button>
            </td>
        </tr>`
        thongTinNV += trNV
    })
    getID("tableDanhSach").innerHTML = thongTinNV;
}
{/* <button class="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm nhân viên</button> */}
//=======================================================================//
function xoaNhanVien(taiKhoan) {
    dsnv.xoaNV(taiKhoan);

    hienThiTable(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV);
}
//=======================================================================//
function xemThongTin(taiKhoan) {
    getID("myModal").classList.add("modal", "fade", "show");

    getID("myModal").style.display = "block";

    // var svFind = dssv.mangSV[indexFind];
    //     document.getElementById("txtMaSV").value = svFind.maSV
    //     document.getElementById("txtMaSV").disabled
    //     getID("txtTenSV").value = svFind.tenSV
    //     getID("txtEmail").value = svFind.mailSV
    //     getID("txtSDT").value = svFind.sdtSV
    //     getID("loaiSV").value = svFind.loaiSV
    //     getID("txtDiemRL").value = svFind.diemRL
    //     getID("txtDiemToan").value = svFind.diemToan
    //     getID("txtDiemLy").value = svFind.diemLy
    //     getID("txtDiemHoa").value = svFind.diemHoa
}

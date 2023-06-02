function DanhSachNhanVien() {
    this.mangNV = [];

    //Phương thức
    this.themNV = function (nv) {
        //sv: 1 sv mới cần thêm
        this.mangNV.push(nv);
    }

    this.xoaNV = function (taiKhoan) {
        var indexFind;
        this.mangNV.map(function (nv, index) {
            if (nv.taiKhoan === taiKhoan) {
                indexFind = index;
            }
            return indexFind;
        })
        this.mangNV.splice(indexFind, 1);
    }
}


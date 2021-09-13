// Tạo thể hiện class
var nvservices = new nhanvienservices();
var validation = new Validation();


function LayDSNV() {
    // then () Lấy data thành công 
    // catch () Xử Lý thất bại 
    nvservices.layds()
        .then(function (response) {
            // Thành Công
            console.log(response.data);
            hienthitable(response.data);
            return response.data;
     

        })
        .catch(function (error) {
            // Thất bại
            console.log(error)
        });

}
LayDSNV();
function hienthitable(mangNV) {
    let content = "";
    mangNV.map(function (item, index) {
        content += `
            <tr>
            <td>${index + 1}</td>
            <td>${item.tk}</td>
            <td>${item.mk}</td>
            <td>${item.hoten}</td>
            <td>${item.email}</td> 
            <td>${item.ngonngu}</td> 
            <td>${item.nguoidung}</td> 
            <td>${item.mota}</td> 
            <td>
            <button class="btn btn-danger"onclick="xoa('${item.id}');">Xóa</button>
            <button class="btn btn-info" onclick="laychitiet('${item.id}')" data-toggle="modal"
            data-target="#myModal">Xem</button>
   
                </td>

                </tr>
      
                `



    });
    document.querySelector("#tblDanhSachNguoiDung").innerHTML = content;

}
function themDS() {
    let taikhoan = document.querySelector("#TaiKhoan").value;
    let hoten = document.querySelector("#HoTen").value;
    let mk = document.querySelector("#MatKhau").value;
    let email = document.querySelector("#Email").value;
    let hinhanh = document.querySelector("#HinhAnh").value;
    let nguoidung = document.querySelector("#loaiNguoiDung").value;
    let ngongu = document.querySelector("#loaiNgonNgu").value;
    let mota = document.querySelector("#MoTa").value;
    nvservices.layds()
        .then(function (response) {
            // Thành Công

            let isValid = true;
            isValid &= validation.checkEmpty(taikhoan, "tbTK", "Tài Khoản không được để trống!") && validation.checkID(taikhoan, "tbTK", "Mã NV bị trùng!",  response.data);
          
        
            //Kiem tra tên   
            isValid &= validation.checkEmpty(hoten, "tbhoten", "Tên NV không được để trống!") && validation.checkName(hoten, "tbhoten", "Tên NV phải là ký tự chữ");
        
            //Kiem tra email   
            isValid &= validation.checkEmpty(email, "tbemail", "Email không được để trống!") && validation.checkEmail(email, "tbemail", "Email không đúng định dạng");
        
            //Kiem tra hinhanh
            isValid &= validation.checkEmpty(hinhanh, "tbhinhanh", "Hình ảnh Không được để trống");
        
            //Kiem tra pass  
            isValid &= validation.checkEmpty(mk, "tbmk", "Mat khau không được để trống!") && validation.checkPass(mk, "tbmk", "Pass chưa đúng định dạng");
        
            //Kiem tra nguoidung
            isValid &= validation.checkDropdown("loaiNguoiDung", "tbnguoidung", "Bạn chưa chọn Người Dùng!");
            //Kiem tra ngon ngu
        
            isValid &= validation.checkDropdown("loaiNgonNgu", "tbngonngu", "Bạn chưa chọn Ngôn Ngữ!");
            // kiem tra mota
            isValid &= validation.checkEmpty(mota, "tbmota", "Mô tả không được để trống!") && validation.checkkitu(mota, "tbmota", "Mô tả không được vượt quá 60 kí tự!");
        
        
        
            if (isValid) {
                console.log(taikhoan, hoten, mk, email, hinhanh, nguoidung, ngongu, mota);
                let nv = new nhanvien(taikhoan, hoten, mk, email, hinhanh, nguoidung, ngongu, mota);
        
                console.table(nv);
                nvservices.them(nv)
                    .then(function (response) {
                        // Thành Công
                        console.log(response.data);
                        LayDSNV();
                        document.querySelector("#myModal .close").click();
        
                        // hienthitable(response.data);
                    })
                    .catch(function (error) {
                        // Thất bại
                        console.log(error)
                    })
            }

        })
        .catch(function (error) {
            // Thất bại
            console.log(error)
        });
    

}
document.getElementById("btnThemNguoiDung").addEventListener("click", function () {
    document.querySelector(".modal-footer").innerHTML = `
<button class="btn btn-success" onclick="themDS();">Thêm</button>`
});

function laychitiet(id) {
    nvservices.laynv(id)
        .then(function (response) {
            // Thành Công
            document.querySelector("#TaiKhoan").disabled = true;

            document.querySelector("#TaiKhoan").value = response.data.tk;
            document.querySelector("#HoTen").value = response.data.hoten;
            document.querySelector("#MatKhau").value = response.data.mk;
            document.querySelector("#Email").value = response.data.email;
            document.querySelector("#HinhAnh").value = response.data.hinhanh;
            document.querySelector("#loaiNguoiDung").value = response.data.nguoidung;
            document.querySelector("#loaiNgonNgu").value = response.data.ngonngu;
            document.querySelector("#MoTa").value = response.data.mota;
            document.querySelector(".modal-footer").innerHTML = `
    <button class="btn btn-success" onclick="capnhat('${response.data.id}');">Cập Nhật</button>`
            // LayDSSP();
            // document.querySelector("#myModal .close").click();

            // hienthitable(response.data);
        })
        .catch(function (error) {
            // Thất bại
            console.log(error)
        })

}

function capnhat(id) {
    let taikhoan = document.querySelector("#TaiKhoan").value;
    let hoten = document.querySelector("#HoTen").value;
    let mk = document.querySelector("#MatKhau").value;
    let email = document.querySelector("#Email").value;
    let hinhanh = document.querySelector("#HinhAnh").value;
    let nguoidung = document.querySelector("#loaiNguoiDung").value;
    let ngongu = document.querySelector("#loaiNgonNgu").value;
    let mota = document.querySelector("#MoTa").value;
    let nv = new nhanvien(taikhoan, hoten, mk, email, hinhanh, nguoidung, ngongu, mota);

    nvservices.capnhat(nv, id)
        .then(function (response) {
            // Thành Công
            console.log(response.data);
            LayDSNV();
            document.querySelector("#myModal .close").click();

            // hienthitable(response.data);
        })
        .catch(function (error) {
            // Thất bại
            console.log(error)
        })


}


function xoa(id) {
    nvservices.xoaNV(id)
        .then(function (response) {
            console.log(response.data);
            LayDSNV();
        })
        .catch(function (error) {
            console.log(error);
        })
}
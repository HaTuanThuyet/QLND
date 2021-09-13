// info thông tin(Dữ liệu đã qua sử lí hiện thị lên ui cho user)
// data dữ liệu(Là những thông tin được chuyển thành jSon , là dữ liệu backend đưa cho json)
function nhanvienservices() {
    
    
    // Láy danh sách sản phẩm
    this.layds = function () {
        return axios({
            method: 'get',
            url: 'https://6131805d7287b70017e64148.mockapi.io/QLND',
           
        });
    }
    this.them = function(sp){
        return axios({
            method: 'post',
            url: 'https://6131805d7287b70017e64148.mockapi.io/QLND',
            data:sp
           
        });
    }
    this.laynv = function (id) {
        return axios({
            method: 'get',
            url: `https://6131805d7287b70017e64148.mockapi.io/QLND/${id}`,
           
        });
    }
    this.capnhat = function(sp,id){
        return axios({
            method: 'put',
            url: `https://6131805d7287b70017e64148.mockapi.io/QLND/${id}`, 
            data:sp
           
        });
    }
    this.xoaNV = function(id){
        return axios({
            method: 'delete',
            url: `https://6131805d7287b70017e64148.mockapi.io/QLND/${id}`, 

        });
       
    }
}

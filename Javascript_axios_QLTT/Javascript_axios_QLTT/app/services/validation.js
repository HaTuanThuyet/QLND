function Validation() {
    //Phương thức
   
    this.checkEmpty = function (inputval,spanID,message) {
      
        if (inputval.trim() == "") {
            //Không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            console.log(message);
            console.log(spanID);
            return false;
        } else {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }
    // kiểm tra mã trùng
    this.checkID = function (inputval, spanID, message,mang) {
        //Kiểm tra mã đã tồn tại trong mảng
        let isExist = false;
     
        isExist = mang.some(function(item) {
            return item.tk === inputval.trim();
        });
        if (isExist) {
            //mã bị trùng => không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            // console.log(spanID); 
            return false;
        } else {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }

    this.checkName=function(inputval, spanID, message){
        
        let pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");
        if(pattern.test(inputval)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }

    }

    this.checkEmail = function(inputval, spanID, message){
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputval.match(pattern)){
              //hợp lệ
              document.getElementById(spanID).innerHTML = "";
              return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            console.log(spanID); 

            return false;
        }
    }

    this.checkDropdown = function(selID,spanID, message){
        let optIndex = document.getElementById(selID).selectedIndex;
        // console.log(optIndex);
        if(optIndex != 0){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            console.log(spanID); 

            return false;
        }
    }    
    this.checkPass = function(inputval, spanID, message){
        let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(inputval.match(pattern)){
             //hợp lệ
             document.getElementById(spanID).innerHTML = "";
             return true;
        }else{
             // không hợp lệ
             document.getElementById(spanID).innerHTML = message;
             return false;
        }
    }
    this.checkkitu = function(inputval, spanID, message){
       
        if(inputval.length >= 0  && inputval.length <= 60){
             //hợp lệ
             document.getElementById(spanID).innerHTML = "";
             return true;
        }else{
             // không hợp lệ
             document.getElementById(spanID).innerHTML = message;
             return false;
        }
    }
}

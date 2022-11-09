window.onload = function () {


    function loginChange() {
        var login = document.querySelector("#login");
        var loginBoxs = login.querySelectorAll(".loginBox");
        var loginBoxImgs = login.querySelectorAll(".loginBoxImg");
        var loginBoxImgOne = loginBoxs[0].querySelector(".loginBoxImg");
        var loginBoxImgTwo = loginBoxs[1].querySelector(".loginBoxImg");
        var loginChanges = login.querySelectorAll(".loginChange");
        var as = loginBoxs[1].querySelector(".loginList").querySelectorAll("a");

        //二维码切换

        loginBoxImgOne.addEventListener("click", function () {

            for (i = 0; i < loginBoxs.length; i++) {
                loginBoxs[i].style.display = "none";
                loginBoxImgs[i].setAttribute("index", i);
            }
         
            if (this.src == "images/computer_small.png") {
             
                this.src = "images/QRCode_Small.png";
                loginBoxs[1].style.display = "block";
            }else{
                this.src = "images/computer_small.png";
                loginBoxs[1].style.display = "block";
            }


        })

        //二维码切换

        loginBoxImgTwo.addEventListener("click", function () {


            for (i = 0; i < loginBoxs.length; i++) {
                loginBoxs[i].style.display = "none";
            }

            if (this.src == "images/QRCode_Small.png") {
                this.src = "images/computer_small.png";
                loginBoxs[0].style.display = "block";
            }else{
                this.src = "images/QRCode_Small.png";
                loginBoxs[0].style.display = "block";
            }

            // loginBoxs[0].style.display = "block";

        })
        //手机号与邮箱切换
        for (i = 0; i < as.length; i++) {
            as[i].addEventListener("click", function () {
                for (i = 0; i < as.length; i++) {
                    as[i].setAttribute("index", i);
                    loginChanges[i].style.display = "none";


                    as[i].className = "";
                }
                var index = this.getAttribute("index");
                loginChanges[index].style.display = "block";


                this.className = "active";
            })

        }

















    }
    loginChange();
}
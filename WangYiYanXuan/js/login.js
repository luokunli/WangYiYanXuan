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
            } else {
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
            } else {
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
    //吸顶导航
    function indexScroll() {

        var head = document.querySelector("#head");
        var nav = head.querySelector('.nav');
        var login = head.querySelector('.login');
        var banner = document.querySelector("#banner");
        var bannerTop = 268;
        // console.log(bannerTop);

        document.addEventListener("scroll", function () {
            // console.log(window.pageYOffset);
            if (window.pageYOffset >= bannerTop) {
                nav.setAttribute("id", "navFix")
                login.style.display = "block"

            } else {
                nav.setAttribute("id", "")
                login.style.display = "none"
            }
        })

    }


    // 导航栏选项卡

    function nav_list() {
        var head = document.querySelector("#head");
        var nav = head.querySelector('.nav');
        var navBar = head.querySelector(".navBar");
        var a = navBar.querySelectorAll("a");
        var subNav = head.querySelector(".subNav");
        var ul = subNav.querySelectorAll('ul');
        var list = [];
        for (i = 0; i < a.length; i++) {
            a[i].setAttribute("index", i);


            //   鼠标移入
            a[i].addEventListener("mouseenter", function () {
                for (i = 0; i < a.length; i++) {
                    a[i].className = "";
                }
                this.className = "active";

                var index = this.getAttribute("index");

                for (i = 0; i < ul.length; i++) {
                    ul[i].style.display = "none";


                }

                ul[index].style.display = "block";

            })
            //nav鼠标移出
            nav.addEventListener("mouseleave", function () {

                for (i = 0; i < ul.length; i++) {
                    ul[i].style.display = "none";

                }

            })

        }



    }

    nav_list();
    indexScroll();
    loginChange();
}
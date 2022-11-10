window.onload = function () {
    // 导航栏选项卡

    function nav_list() {
        var head = document.querySelector("#head");
        var nav = head.querySelector('.nav');
        var navBar = head.querySelector(".navBar");
        var a = navBar.querySelectorAll("a");
        var subNav = head.querySelector(".subNav");
        var ul = subNav.querySelectorAll('ul');

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

    // scroll product
    function productScroll() {
        var product = document.querySelector("#product");

        var banner = document.querySelector("#banner");
        var head = document.querySelector("#head");
        var nav = head.querySelector('.nav');
        var login = head.querySelector('.login');
        var productTop = product.offsetTop - 90;

        // console.log(productTop);

        document.addEventListener("scroll", function () {
            // console.log(window.pageYOffset);
            if (window.pageYOffset >= productTop) {
                nav.setAttribute("id", "navFix")
                login.style.display = "block"

            } else {
                nav.setAttribute("id", "")
                login.style.display = "none"
            }


        })

    }

    //产品详情页评论选项卡
    function product_comment() {


        var details = document.querySelector("#details");
        var etitle = details.querySelector(".etitle");
        var etitleA = etitle.querySelectorAll("a");
        var contentbox = details.querySelectorAll(".contentbox");
        var commentTitles = details.querySelector(".commentTitle");
        var options = commentTitles.querySelectorAll(".option");
        
        for (i = 0; i < etitleA.length; i++) {
            etitleA[i].setAttribute("index", i);
            etitleA[i].addEventListener("click", function () {
                for (i = 0; i < etitleA.length; i++) {
                    etitleA[i].className = "";
                }

                this.className = "active";
                var index = this.getAttribute("index");

                for (j = 0; j < contentbox.length; j++) {
                    contentbox[j].style.display = "none";
                }
                contentbox[index].style.display = "block";
            })

        }
        //评价选项卡下的二级选项卡
        for(i=0;i<options.length;i++){
            options[i].addEventListener("click",function(){
                for(i=0;i<options.length;i++){
                    options[i].children[0].style.backgroundPositionY ="-15px";
                }
                this.children[0].style.backgroundPositionY ="0";
            })
        }

    }
    //大家都在看轮播
    function everyoneview() {
        var view = document.querySelector("#view");
        var viewbox = view.querySelector(".viewbox");
        var ul = viewbox.querySelector("ul");
        var li = ul.querySelectorAll("li");

        var direction = view.querySelector(".direction");
        var liWidth = li[1].offsetWidth;
        console.log(liWidth);
        var num = 0;
        //右箭头滑动
        direction.children[1].addEventListener("click", function () {
            if (num == li.length - 4) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            animation(ul, -(num * liWidth + num * 30))
        })
        //左箭头滑动
        direction.children[0].addEventListener("click", function () {
            if (num <= 0) {
                num = li.length - 3;
                ul.style.left = num * liWidth + "px";
            }
            num--;
            animation(ul, -(num * liWidth + num * 30))
        })
    }
    //产品大图点击
    function imgChange() {
        var product = document.querySelector("#product");
        var productImg = product.querySelector(".productImg");
        var bigImg = productImg.querySelector(".bigImg");
        var smallImg = productImg.querySelector(".smallImg");
        var imgs = bigImg.querySelectorAll("img");
        var lis = smallImg.querySelectorAll("li");



        for (i = 0; i < lis.length; i++) {
            //自定义index属性
            lis[i].setAttribute("index", i)
            //添加单击事件
            lis[i].addEventListener("click", function () {
                var index = this.getAttribute("index");

                for (i = 0; i < imgs.length; i++) {
                    imgs[i].style.display = "none";
                    lis[i].className = "";
                }
                this.className = "active";
                imgs[index].style.display = "block";



            })
        }

    }













    //返回顶部

    function goTop() {
        var aside = document.querySelector("#aside");
        var asideTop = document.querySelector("#aside").querySelector(".asideTop");
        asideTop.addEventListener("click", function () {
            // alert("1")
            goback(window, 0);
        })



        
    }
    imgChange()
    everyoneview()
    goTop()
    productScroll()
    // indexScroll()
    nav_list()
    product_comment();
}
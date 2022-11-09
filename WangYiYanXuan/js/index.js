window.onload = function () {



  // scroll index吸顶导航
  function indexScroll() {

    var head = document.querySelector("#head");
    var nav = head.querySelector('.nav');
    var login = head.querySelector('.login');
    var banner = document.querySelector("#banner");
    // var bannerTop = banner.offsetTop - 90;
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


  //banner轮播图
  function slideshow() {

    var banner = document.querySelector("#banner");
    var bannerPic = document.querySelector("#banner").querySelector(".bannerPic");
    var bannerPicImg = document.querySelector(".bannerPic").querySelector("img");
    var imgCon = document.querySelector("#banner").querySelector(".imgCon");
    var direction = document.querySelector("#banner").querySelector(".direction");
    var circle = document.querySelector("#banner").querySelector(".circle");
    var bannerPicImgWidth = bannerPicImg.offsetWidth;
    var num = 0;
    var circleAuto = 0;
    var flag = true;


    //鼠标移入箭头显示
    banner.addEventListener("mouseenter", function () {
      direction.style.display = "block";
      clearInterval(timer);
      timer = null;//清除定时器变量
    })

    //鼠标移出箭头隐藏
    banner.addEventListener("mouseleave", function () {
      direction.style.display = "none";
      timer = setInterval(() => {
        direction.children[1].click();
      }, 2000);

    })

    //添加小圆点
    for (let j = 0; j < imgCon.children.length; j++) {
      var i = document.createElement("i");

      i.setAttribute("index", j)
      circle.appendChild(i);

    }
    circle.children[0].className = "active";

    //清除active，加动画
    for (let i = 0; i < circle.children.length; i++) {
      circle.children[i].addEventListener("mouseenter", function () {
        for (let i = 0; i < circle.children.length; i++) {
          circle.children[i].className = "";

        }

        this.className = "active";
        var index = this.getAttribute("index");
        num = circleAuto = index;

        animation(imgCon, -(bannerPicImgWidth * index))

      })


    }
    var firstImg = imgCon.children[0].cloneNode(true);
    imgCon.appendChild(firstImg);



    //右箭头动画
    direction.children[1].addEventListener("click", function () {
      //节流阀
      if (flag) {
        flag = false;
        if (num == imgCon.children.length - 1) {
          imgCon.style.left = 0;
          num = 0;
        }
        num++;
        animation(imgCon, -(bannerPicImgWidth * num), function () {
          flag = true
        })
        circleAuto++;
        if (circleAuto == circle.children.length) {
          circleAuto = 0;
        }

        circleChange()

      }

    })




    // 左箭头动画
    direction.children[0].addEventListener("click", function () {
      if (flag) {
        flag = false;
        if (num <= 0) {
          num = imgCon.children.length - 1;
          imgCon.style.left = num * bannerPicImgWidth + "px";
        }
        num--;
        animation(imgCon, -(bannerPicImgWidth * num), function () {
          flag = true;
        })
        circleAuto--;
        if (circleAuto < 0) {
          circleAuto = circle.children.length - 1;
        }
        circleChange()
      }



    })


    //清除圆点样式函数
    function circleChange() {
      for (let i = 0; i < circle.children.length; i++) {
        circle.children[i].className = "";
      }
      circle.children[circleAuto].className = "active";
    }

    // 自动banner滑动
    var timer = setInterval(() => {
      direction.children[1].click();
    }, 2000);



  }
  //新品首发轮播图
  function newArrive() {
    var newProductArrive = document.querySelector("#newArrive");
    var content = newProductArrive.querySelector(".content");
    var ul = content.querySelector("ul");
    var li = ul.querySelectorAll("li");
    var direction = newProductArrive.querySelector(".dirction");
    var liWidth = li[0].offsetWidth;
    var num = 0;

    direction.children[1].addEventListener("click", function () {
      if (num > li.length - 5) {
        num = 0;
        ul.style.left = 0;
      }
      num++;
      animation(ul, -liWidth * num)


    })
    direction.children[0].addEventListener("click", function () {
      if (num <= 0) {
        num = li.length - 4;
        ul.style.left = -liWidth * num + "px";
      }
      num--;
      animation(ul, -liWidth * num)


    })




  }





  //大家都在说轮播
  function comments() {
    var comment = document.querySelector("#comment");
    var contentbox = comment.querySelector(".contentbox");
    var ul = contentbox.querySelector("ul");
    var li = ul.querySelectorAll("li");

    var control = comment.querySelector(".control");
    var liWidth = li[1].offsetWidth;
    // console.log(liWidth);
    var num = 0;
    //右箭头滑动
    control.children[1].addEventListener("click", function () {
      if (num == li.length - 3) {
        num = 0;
        ul.style.left = 0;
      }
      num++;
      animation(ul, -(num * liWidth + 8 * num))
    })
    //左箭头滑动
    control.children[0].addEventListener("click", function () {
      if (num <= 0) {
        num = li.length - 2;
        ul.style.left = num * liWidth + "px";
      }
      num--;
      animation(ul, -(num * liWidth + 8 * num))
    })
  }






  //人气推荐选项卡
  function recommends() {
    var recommend = document.querySelector("#recommend");
    var header = recommend.querySelector(".header");
    var as = header.querySelector("ul").querySelectorAll("a");
    var lis = header.querySelectorAll("li");
    var threeboxs = recommend.querySelectorAll(".threebox");
    console.log(as);


    //添加index属性
    for (i = 0; i < as.length; i++) {
      as[i].setAttribute("index", i);

    }

    // for(i=0;i<as.length;i++){
    //   as[i].addEventListener("click",)
    // }




    for (i = 0; i < as.length; i++) {

      as[i].addEventListener("click", function () {
        //获取index属性
        var index = this.getAttribute('index');
        //清楚active
        for (i = 0; i < as.length; i++) {
          as[i].className = "none";
        }
        this.className = "active";
        // console.log(as[i]);
        // console.log(index);
        //box盒子的显示与隐藏
        for (i = 0; i < threeboxs.length; i++) {

          threeboxs[i].style.display = "none";
        }
        threeboxs[index].style.display = "block";

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



















  recommends();
  comments();
  newArrive();
  goTop();
  slideshow();
  indexScroll();
  nav_list();
}

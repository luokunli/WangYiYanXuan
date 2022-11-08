//轮播动画
function animation(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + "px";
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }

        }
    }, 10)

}

//返回顶部动画
function goback(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // obj.style.left = obj.offsetLeft + step + "px";
        window.scroll(0, obj.pageYOffset + step);
        if (obj.pageYOffset == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }

        }
    }, 10)

}








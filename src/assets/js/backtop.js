function showbtn() {
    var div = document.querySelector(".scroll");
    if (document.documentElement.scrollTop > 400 && div.clientHeight < 500) {
        var htimer = setInterval(function() {
            var step = 10;
            if (div.clientHeight > 500) {
                clearInterval(htimer);
            }
            div.style.height = div.clientHeight + step + "px";
        }, 15);
    } else if (document.documentElement.scrollTop < 400) {
        var vtimer = setInterval(function() {
            var step = 10;
            if (div.clientHeight <= 0) {
                clearInterval(vtimer);
            }
            div.style.height = div.clientHeight - step + "px";
        }, 15);
    }
}
//键控屏幕滑动
// document.addEventListener("scroll", showbtn);

function backTop() {
    var length = document.documentElement.scrollTop;
    var timer = setInterval(function() {
        // showbtn();
        var step = -length / 20;
        if (document.documentElement.scrollTop <= 0) {
            clearInterval(timer);
        }
        document.documentElement.scrollTop = document.documentElement.scrollTop + step;
    }, 10);
}
// img.addEventListener("click", function() {

// });


export { showbtn, backTop }
function showbtn() {
    var div = document.querySelector(".scroll");
    if (document.documentElement.scrollTop > 400) {
        var htimer = setInterval(function() {
            console.log(div.clientHeight)
            var step = 5;
            if (div.clientHeight > 500) {
                clearInterval(htimer);
            }
            div.style.height = div.clientHeight + step + "px";
        }, 20);
    } else {
        var vtimer = setInterval(function() {
            var step = 5;
            if (div.clientHeight <= 0) {
                clearInterval(vtimer);
            }
            div.style.height = div.clientHeight - step + "px";
        }, 20);
    }
}
//键控屏幕滑动
// document.addEventListener("scroll", showbtn);

function backTop() {
    var length = document.documentElement.scrollTop;
    console.log(length);
    var timer = setInterval(function() {
        var step = -length / 20;
        if (document.documentElement.scrollTop == 0) {
            clearInterval(timer);
        }
        document.documentElement.scrollTop =
            document.documentElement.scrollTop + step;
    }, 15);
}
// img.addEventListener("click", function() {

// });


export { showbtn, backTop }
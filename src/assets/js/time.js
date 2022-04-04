function clock() {
    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    })
}
//倒计时
function countDown() {
    var oldtime = '2021-4-1 13:14:52'
    var nowTime = +new Date();
    var inputTime = +new Date(oldtime);
    var t = 0;
    t = (nowTime - inputTime) / 1000; //将毫秒转换为秒
    var d = parseInt(t / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    var h = parseInt(t / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    var m = parseInt(t / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = parseInt(t % 60);
    s = s < 10 ? '0' + s : s;
    var str = d + "天" + h + '时' + m + '分' + s + '秒';
    // console.log(str);
    return str;
}
//现在事件
function timeNow() {
    var mydata = new Date();
    var yy = mydata.getFullYear();
    var mm = mydata.getMonth() + 1;
    var dd = mydata.getDate();

    var h = mydata.getHours();
    h = h < 10 ? '0' + h : h;
    var m = mydata.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = mydata.getSeconds();
    s = s < 10 ? '0' + s : s;

    var timenow = yy + "/" + mm + "/" + dd + " " + h + ':' + m + ':' + s;
    return timenow;
}


export { clock, countDown, timeNow }
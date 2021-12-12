let secondNeedle = document.getElementById('second');
let minuteNeedle = document.getElementById('minute');
let hourNeedle = document.getElementById('hour');


setInterval(function (){
    let date = new Date();
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();

    let sec = ((second / 60) * 360);
    secondNeedle.style.transform = "rotate(" + (sec) + "deg)";

    let min = ((minute / 60) * 360) + (sec / 60);
    minuteNeedle.style.transform = "rotate(" + (min) + "deg)";

    let h = ((hour / 12) * 360) + (min / 60 );
    hourNeedle.style.transform = "rotate(" + (h) + "deg)";

},1000);


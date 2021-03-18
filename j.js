setInterval(() => {
    var time = document.querySelector('#time');
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day_night = "AM";
    if (hours > 12) {
        hours = hours - 12;
        day_night = 'pm';

    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});
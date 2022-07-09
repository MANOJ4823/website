setInterval(() => {
    var today = new Date();
    var time;

    if (today.getHours() <= 9) {
        time = "0" + today.getHours() + " : " + today.getMinutes() +  " : " + today.getSeconds();
    }

    if (today.getMinutes() <= 9) {
        time = today.getHours() + " : 0" + today.getMinutes() + " : " + today.getSeconds();
    }

    if (today.getSeconds() <= 9) {
        time = today.getHours() + " : " + today.getMinutes() + " : 0" + today.getSeconds();
    }

    if (today.getHours() > 9 && today.getMinutes() > 9 && today.getSeconds() > 9) {
        time = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
    }

    var block = (document.getElementById("time").innerHTML = time);
}, 1000);

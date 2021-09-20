const greeting = document.querySelector("h1#greeting");
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")

function getGreeting() {
    const date = new Date();
    const hour = date.getHours();
    var text = "";
    if (6<=hour && hour<11)
    {
        text = "Good Morning";
    }
    else if (11<=hour && hour<6)
    {
        text = "Good Afternoon";
    }
    else if (6<=hour && hour<10)
    {
        text = "Good Night";
    }
    else {
        text = "Have a sweet dream";
    }
    greeting.innerText = text;
}

function getClock() {
    const date = new Date();
    hour.innerText = `${date.getHours()}`;
    minute.innerText = `${String(date.getMinutes()).padStart(2,"0")}`;
    second.innerText = `${date.getSeconds()}`;
}

getClock();
getGreeting();
setInterval(getClock, 1000);
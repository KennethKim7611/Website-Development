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
    else if (11<=hour && hour<18)
    {
        text = "Good Afternoon";
    }
    else if (18<=hour && hour<22)
    {
        text = "Good Night";
    }
    else {
        text = "Sweet dreams";
    }
    greeting.innerText = text;
}

function getClock() {
    const date = new Date();
    hour.innerText = `${date.getHours()}`;
    minute.innerText = `${String(date.getMinutes()).padStart(2,"0")}`; // 2 characters long of 0
    second.innerText = `${date.getSeconds()}`;
}

getClock();
getGreeting();
setInterval(getClock, 1000); // Refresh every 1000ms
const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function getClock() {
    const date = new Date();
    hour.innerText = `${date.getHours()}`;
    minutes.innerText = `${date.getMinutes()}`;
    seconds.innerText = `${date.getSeconds()}`;
}

getClock();
setInterval(getClock,1000);
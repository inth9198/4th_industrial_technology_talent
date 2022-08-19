const clockChuCon = document.querySelector("#clock1")
const clockChuTitle = clockChuCon.querySelector("h1")

const clockDailyCon = document.querySelector('#clock2')
const clockDailyTitle = clockDailyCon.querySelector("h1")

function getChuTime() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();
    const left_all_sec = 24 * 60 * 60 - (hour * 3600) - (min * 60) - (sec)
    const left_hour = parseInt(left_all_sec/3600);
    const left_sec = left_all_sec % 60;
    const left_min = parseInt((left_all_sec - left_hour * 3600)/60);
    clockChuTitle.innerText = `${left_hour < 10 ? `0${left_hour}` : left_hour}:${left_min < 10 ? `0${left_min}` : left_min}:${left_sec < 10 ? `0${left_sec}` : left_sec}`
    clockDailyTitle.innerText = `${left_hour < 10 ? `0${left_hour}` : left_hour}:${left_min < 10 ? `0${left_min}` : left_min}:${left_sec < 10 ? `0${left_sec}` : left_sec}`
}

function init() {
    setInterval(getChuTime, 1000)
}
init();
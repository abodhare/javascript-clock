function stringify(number) {
    return number < 10 ? "0" + number : number;
}

function time() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session;

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (h == 0) {
        h = 12;
    } else if (h > 12) {
        h -= 12;
        session = "PM";
    } else {
        session = "AM";
    }

    [h, m, s] = [h, m, s].map(x => stringify(x));
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let time = `${h}:${m}:${s} ${session}`;
    let today = `${day} ${months[month]} ${year}`;

    document.getElementById("clock").innerHTML = `<div>${time}</div>
        <div class="date">${today}</div>
    `;
}

setInterval(time, 1000)
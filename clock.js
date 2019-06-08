function stringify(number) {
    // add '0' before numbers less than 10
    return number < 10 ? "0" + number : number;
}

function time() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session;

    let day = date.getDate(); // 1 - 31
    let month = date.getMonth(); // 0 - 11
    let year = date.getFullYear(); // full current year

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

// setTimeout used recursively within time() got null object for document.getElementById
setInterval(time, 1000)

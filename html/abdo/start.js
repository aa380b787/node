const start_iframe = document.createElement("iframe");
start_iframe.style.display = "none";
start_iframe.src = "";
start_iframe.name = "start_iframe";
document.body.appendChild(start_iframe);

const start_form = document.createElement("form");
start_form.style.display = "none";
start_form.action = "";
start_form.method = "post";
start_form.target = "start_iframe";
start_form.id = "start_form";
document.body.appendChild(start_form);

const start_time = document.createElement("input");
start_time.name = "start_time";
start_time.id = "start_time";
start_time.type = "submit";
document.getElementById("start_form").appendChild(start_time);

const start_do = document.createElement("input");
start_do.name = "do";
start_do.id = "do";
document.getElementById("start_form").appendChild(start_do)

function zero_start(x) {
    if (x.length == 1) {
        return "0" + x;
    } else {
        return x;
    }
}

function fstart_time() {
    d = new Date();
    return d.getFullYear().toString() + "-" + zero_start((d.getMonth() + 1).toString()) + "-" + zero_start(d.getDate().toString()) + " " + zero_start(d.getHours().toString()) + ":" + zero_start(d.getMinutes().toString()) + ":" + zero_start(d.getSeconds().toString()) + "." + d.getMilliseconds().toString();
}

if (localStorage.getItem("start_time") == null) {
    localStorage.setItem("start_time", fstart_time());
}

start_time.value = localStorage.getItem("start_time");

function do_(s) {
    start_do.value = s;
    start_time.click();
}

start_time.click();
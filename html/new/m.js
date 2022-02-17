var z = {
    /**Time Date */
    time_date: class {
        constructor() {
            this.date = new Date();
            this.xweekx = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
            this.xweekarx = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
        }
        /**milli*/
        get l_mse() {
            return this.date.getMilliseconds();
        }
        /**second */
        get l_se() {
            return this.date.getSeconds();
        }
        /**minute */
        get l_mi() {
            return this.date.getMinutes();
        }
        /**24 hours */
        get l_h24() {
            return this.date.getHours();
        }
        /**12 hours */
        get l_h12() {
            return (s.getHours() == 0) ? 12 : (s.getHours() >= 12) ? s.getHours() - 12 : s.getHours();
        }
        /**AM - PM*/
        get l_ampm() {
            return (s.getHours() > 12) ? "PM" : "AM";
        }
        /**ص-م*/
        get l_ampmar() {
            return (s.getHours() > 12) ? "م" : "ص";
        }
        /**Saturday*/
        get l_weekday() {
            return z.dt.a.xweekx[s.getDay()] + "day";
        }
        /**Sat*/
        get l_week() {
            return z.dt.a.xweekx[s.getDay()].substring(0, 3);
        }
        /**السبت*/
        get l_weekar() {
            return z.dt.a.xweekarx[s.getDay()];
        }
        /**1-31*/
        get l_day() {
            return this.date.getDate();
        }
        /**1-12*/
        get l_mo() {
            return this.date.getMonth() + 1;
        }
        /**2019*/
        get l_yearf() {
            return this.date.getFullYear();
        }
        /**19*/
        get l_year() {
            return JSON.stringify(s.getFullYear()).substring(2);
        }
        /**milli*/
        get u_mse() {
            return this.date.getUTCMilliseconds();
        }
        /**second */
        get u_se() {
            return this.date.getUTCSeconds();
        }
        /**minute */
        get u_mi() {
            return this.date.getUTCMinutes();
        }
        /**24 hours */
        get u_h24() {
            return this.date.getUTCHours();
        }
        /**12 hours */
        get u_h12() {
            return (s.getUTCHours() == 0) ? 12 : (s.getUTCHours() >= 12) ? s.getUTCHours() - 12 : s.getUTCHours();
        }
        /**AM - PM*/
        get u_ampm() {
            return (s.getUTCHours() > 12) ? "PM" : "AM";
        }
        /**ص-م*/
        get u_ampmar() {
            return (s.getUTCHours() > 12) ? "م" : "ص";
        }
        /**Saturday*/
        get u_weekday() {
            return z.dt.a.xweekx[s.getUTCDay()] + "day";
        }
        /**Sat*/
        get u_week() {
            return z.dt.a.xweekx[s.getUTCDay()].substring(0, 3);
        }
        /**السبت*/
        get u_weekar() {
            return z.dt.a.xweekarx[s.getUTCDay()];
        }
        /**1-31*/
        get u_day() {
            return this.date.getUTCDate();
        }
        /**1-12*/
        get u_mo() {
            return this.date.getUTCMonth() + 1;
        }
        /**2019*/
        get u_yearf() {
            return this.date.getUTCFullYear();
        }
        /**19*/
        get u_year() {
            return JSON.stringify(s.getUTCFullYear()).substring(2);
        }
    },
    math: {
        /**random
        من
        الى*/
        ran: function (x = 0, y = 1) {
            return Math.floor((Math.random() * (y - x + 1)) + x);
        },
        sin: function (x) {
            return Math.sin(x * Math.PI / 180);
        },
        cos: function (x) {
            return Math.cos(x * Math.PI / 180);
        },
        tan: function (x) {
            return Math.tan(x * Math.PI / 180);
        },
    },
    file: {
        /**
        function try_open(s1) {
            z.file.get = null;
            i_time_get = 0;
            z.file.open(s1)
            time_get = setInterval(() => {
                i_time_get++;
                if (z.file.get != null || i_time_get == 50) {
                    clearInterval(time_get);
                    //.................
                }
            }, 100);
        }
        */
        open: function (src) {
            fetch(src).then((response) => {
                return response.text();
            }).then((txt) => {
                z.file.get = txt
            });
        },
        get: null,
        /**open_file, breakLine = "<br>"*/
        text: function (open_file, breakLine = "<br>") {
            var text_to_arr = (open_file + "\n").replaceAll("\r", "").split("\n");
            if (text_to_arr[text_to_arr.length - 1] <= 1) {
                text_to_arr.pop();
                if (text_to_arr[text_to_arr.length - 1] <= 1) {
                    text_to_arr.pop();
                }
            }
            return text_to_arr.join(breakLine);
        },
        /**open_file, _split = ";", startRow = 1, notNumber = null, notBool = null*/
        csvToArr: function (open_file, _split = ";", startRow = 1, notNumber = null, notBool = null) {
            var text_to_arr = (open_file + "\n").replaceAll("\r", "").split("\n");
            var new_arr = [];
            if (text_to_arr[text_to_arr.length - 1] <= 1) {
                text_to_arr.pop();
                if (text_to_arr[text_to_arr.length - 1] <= 1) {
                    text_to_arr.pop();
                }
            }
            text_to_arr = text_to_arr.map((v) => v.split(_split));
            for (let i1 = 0; i1 < text_to_arr[0].length - 1; i1++) {
                new_arr.push([])
                for (let i2 = startRow; i2 < text_to_arr.length; i2++) {
                    var endChar = startRow == 1 ? text_to_arr[0][i1].substring(text_to_arr[0][i1].length - 1, text_to_arr[0][i1].length) : null
                    if (endChar == '.') {
                        new_arr[i1].push(isNaN(parseInt(text_to_arr[i2][i1])) ? notNumber : parseInt(text_to_arr[i2][i1]));
                    } else if (endChar == ',') {
                        new_arr[i1].push(isNaN(parseFloat(text_to_arr[i2][i1])) ? notNumber : parseFloat(text_to_arr[i2][i1]));
                    } else if (endChar == "'") {
                        if (text_to_arr[i2][i1] == 'TRUE') {
                            new_arr[i1].push(true)
                        } else if (text_to_arr[i2][i1] == 'FALSE') {
                            new_arr[i1].push(false)
                        } else {
                            new_arr[i1].push(notBool)
                        }
                    } else {
                        new_arr[i1].push(text_to_arr[i2][i1]);
                    }
                }
            }
            return new_arr;
        },
        /**arr, _split = ";", breakLine = "\r\n"*/
        arr_to_csv: function (arr, _split = ";", breakLine = "\r\n") {
            var csv = "";
            for (let i1 = 0; i1 < arr[0].length; i1++) {
                for (let i2 = 0; i2 < arr.length; i2++) {
                    csv += (arr[i2][i1] == null ? "" : arr[i2][i1].toString()) + ";"
                }
                csv += breakLine;
            }
            return "\ufeff" + csv;
        },
    },
    get: function () {
        if (location.includes("?")) {
            return JSON.parse(decodeURIComponent('{"' + location.toString().substring(location.toString().lastIndexOf("?") + 1).replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, '%20') + '"}'));
        } else {
            return "";
        }
    },
    /**_href, rename = ""*/
    download: function (_href, rename = "") {
        xxdownload = document.createElement("a");
        xxdownload.href = _href;
        xxdownload.download = rename;
        xxdownload.click();
    },
    /**Number Line*/
    code: function () {
        return Error().stack.match(/:\d{1,}(?=:)/g)[1].substring(1);
    },
    slide: class {
        constructor({ img,
            div = "slide",
            show = 1,
            button = 1,
            point = 1,
        }) {
            this.show = show - 1;
            this.img = img;
            this.nu = 0;
            this.nup = 0;
            this.timer_nu = 0;
            this.div = document.getElementById(div);
            this.button = button - 1;
            this.point = point - 1;
        }
        style() {
            this.div.innerHTML = `
                <style>
                    #`+ this.div.id + ` {
                        display: inlin-block;
                        height: 50vmin;
                        width: 50vmin;
                        overflow: hidden;
                        position: relative;
                    }
                    #`+ this.div.id + ` .slide_img{
                        `+ this.get_style[this.show][0] + `
                        position: absolute;
                        backface-visibility:hidden;
                        width:100%;
                    }
                    #`+ this.div.id + ` input{
                        visibility: `+ (this.point == 0 ? `hidden` : `visible`) + `;
                    }
                    #`+ this.div.id + ` #slide_prev,#slide_next{
                        position: absolute;
                        bottom: 50%;
                        transform: translateY(-50%);
                    }
                    #`+ this.div.id + ` #slide_prev{
                        left: 0;
                    }
                    #`+ this.div.id + ` #slide_next{
                        right: 0;
                    }
                    #`+ this.div.id + ` .point{
                        display:inline-block;
                    }
                    #`+ this.div.id + ` #slide_point{
                        position: absolute;
                        left: 50%;
                        bottom: 0;
                        transform: translateX(-50%);
                    }
                    #`+ this.div.id + ` .slide_new{
                        animation: slide_new 1s linear 0s 1 alternate forwards;
                    }
                    #`+ this.div.id + ` .slide_old{
                        animation: slide_old 1s linear 0s 1 alternate forwards;
                    }
                    @keyframes slide_new {
                        0% {
                            `+ this.get_style[this.show][0] + `
                        }
                        100% {
                            `+ this.get_style[this.show][1] + `
                        }
                    }
                    @keyframes slide_old {
                        0% {
                            `+ this.get_style[this.show][1] + `
                        }
                        100% {
                            `+ this.get_style[this.show][0] + `
                        }
                    }
                </style>
            `;
        }
        slide_prev() {
            this.nup = this.nu;
            this.nu--;
            if (this.nu == -1) this.nu = this.img.length - 1;
            this.img_v_h()
        }
        slide_next() {
            this.nup = this.nu;
            this.nu++;
            if (this.nu == this.img.length) this.nu = 0;
            this.img_v_h();
        }
        button_prev() {
            var tag = document.createElement("div");
            tag.id = "slide_prev";
            tag.innerHTML = this.get_button[this.button];
            this.div.innerHTML += tag.outerHTML;
        }
        button_next() {
            var tag = document.createElement("div");
            tag.id = "slide_next";
            tag.innerHTML = this.get_button[this.button];
            tag.style.transform = 'rotateY(180deg)';
            this.div.innerHTML += tag.outerHTML;
        }
        img_create() {
            for (let i = 0; i < this.img.length; i++) {
                var tag = document.createElement("img");
                tag.src = this.img[i];
                tag.className = "slide_img"
                this.div.innerHTML += tag.outerHTML;
            }
        }
        slide_point() {
            this.div.innerHTML += '<div id="slide_point"></div>';
            for (let i = 0; i < this.img.length; i++) {
                document.getElementById("slide_point").innerHTML += '<div class="point">' + this.get_point[this.point][0] + '</div>';
            }
        }
        slide_point_i(s) {
            this.nup = this.nu;
            this.nu = s;
            this.img_v_h();
        }
        img_v_h() {
            this.timer_nu = 0;
            for (let i = 0; i < this.img.length; i++) {
                if (this.nu == i) {
                    document.getElementsByClassName("slide_img")[i].classList.remove('slide_old');
                    document.getElementsByClassName("slide_img")[i].classList.add('slide_new');
                    document.getElementsByClassName("point")[i].innerHTML = this.get_point[this.point][1];
                } else if (this.nup == i) {
                    document.getElementsByClassName("slide_img")[i].classList.remove('slide_new');
                    document.getElementsByClassName("slide_img")[i].classList.add('slide_old');
                    document.getElementsByClassName("point")[i].innerHTML = this.get_point[this.point][0];
                }
            }
        }
        timer() {
            setInterval(() => {
                if (this.timer_nu > 20) {
                    this.slide_next();
                }
                this.timer_nu++;
            }, 100);
        }
        get get_style() {
            return [['opacity: 0%;', 'opacity: 100%;'], ['transform: scale(0);', 'transform: scale(1);'], ['transform: rotateX(180deg);', 'transform: rotateX(0deg);'],
            ['transform: rotateY(180deg);', 'transform: rotateY(0deg);'], [`transform: rotate(360deg) scale(0);`, `transform: rotate(0deg) scale(1);`]];
        }
        get get_button() {
            return [``, `<button style='border-radius:100%;width:4vmin;height:4vmin;font-size:3vmin;font-weight:bold;padding:0;'>&#8630;</button>`];
        }
        get get_point() {
            return [['', ''], ['<div style="margin:1vmin;display:inline-block;width:1vmin;height:1vmin;background:grey;border-radius:100%;"></div>', '<div style="animation: slide_new 1s linear 0s 1 alternate forwards;margin:1vmin;display:inline-block;width:1vmin;height:1vmin;background:blue;border-radius:100%;"></div>']];
        }
        create() {
            this.style();
            this.img_create();
            this.button_prev();
            this.button_next();
            this.slide_point();
            document.getElementById("slide_prev").addEventListener('click', event => { this.slide_prev(); });
            document.getElementById("slide_next").addEventListener('click', event => { this.slide_next(); });
            for (let i = 0; i < this.img.length; i++) {
                document.getElementsByClassName("point")[i].addEventListener('click', event => { this.slide_point_i(i); });

            }
            this.img_v_h();
            this.timer();
        }
    },
    button: class {
        constructor({
            text = '',
            radius = '25px',
            text_r = '',
            text_l = '',
            att = '',
            blue = 'blue',
            red = 'red',
            yellow = 'yellow',
            bg2 = 'transparent',
            height = 10,
            width = 30,
            style = '',
            show = 1,
            anm = 1
        }) {
            this.style = style;
            this.text = text;
            this.radius = radius;
            this.text_l = text_l;
            this.text_r = text_r;
            this.att = att;
            this.red = red;
            this.blue = blue;
            this.yellow = yellow;
            this.bg2 = bg2;
            this.height = height;
            this.width = width;
            this.show = show - 1;
            this.anm = anm - 1;
        }
        get_show() {
            return [`linear-gradient(0deg,  ` + this.blue + `,` + this.blue + `, ` + this.yellow + `, ` + this.red + `, ` + this.red + ` 100%);`,
            `radial-gradient(circle, ` + this.red + `, ` + this.yellow + `, ` + this.blue + ` 20%);`];
        }
        get_anm() {
            return [
                [`transform='scale(1.25)'`, `transform='scale(1)'`, `transform='scale(0.7)'`],
                [`transform= 'rotate(10deg)'`, `transform= 'rotate(0deg)'`, `transform='rotate(-10deg)'`],
            ];
        }
        create() {
            return `
                <style>
                    @keyframes x55x {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                </style>
                <div `+ this.att + `
                    style='
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: `+ this.height + `vmin;
                        width: `+ this.width + `vmin;
                        border-radius: `+ this.radius + `;
                        overflow: hidden;
                        color: blue;
                        transition: all 0.2s;`+ this.style + `;
                    onmousemove="this.style.`+ this.get_anm()[this.anm][0] + `"
                    onmouseover="this.style.`+ this.get_anm()[this.anm][0] + `"
                    onmouseup="this.style.`+ this.get_anm()[this.anm][0] + `"
                    onmouseout="this.style.`+ this.get_anm()[this.anm][1] + `"
                    onmousedown="this.style.`+ this.get_anm()[this.anm][2] + `">
                <img
                    style="
                        height: `+ this.height * 5 + `vmin;
                        width: `+ this.width * 5 + `vmin;
                        position: absolute;
                        z-index: 1;
                        top: -200%;
                        background: `+ this.get_show()[this.show] + `
                        animation: x55x 1s linear 0s infinite normal forwards;
                    "
                >
                <div class="inner_div"
                    style="
                        display: inline-block;
                        height: 70%;
                        width: 90%;
                        background: `+ this.bg2 + `;
                        position: absolute;
                        z-index: 2;
                        border-radius: `+ this.radius + `;
                    "
                >
                    <span
                        style="
                            align-self: center;
                            position: relative;
                            z-index: 3;
                            left: 12vmin;
                            -ms-transform: translateX(-50%);
                            transform: translateX(-50%);
                            font-size: 6vmin;
                            font-weight: bold;
                        "
                    >
                            `+ this.text_r + `
                        </span>
                        <span
                            style="
                                align-self: center;
                                position: relative;
                                z-index: 3;
                                -ms-transform: translateX(-50%);
                                transform: translateX(-50%);
                                font-size: 6vmin;
                                font-weight: bold;
                            "
                        >
                            `+ this.text + `
                        </span>
                        <span
                            style="
                                align-self: center;
                                position: relative;
                                z-index: 3;
                                right: 12vmin;
                                -ms-transform: translateX(-50%);
                                transform: translateX(-50%);
                                font-size: 6vmin;
                                font-weight: bold;
                            "
                        >
                            `+ this.text_l + `
                        </span>
                    </div>
                </div>
            `;
        }
    }
}
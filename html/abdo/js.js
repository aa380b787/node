//طبقاً لاحكام القران والسنة
//ما يتماشى مع مقتضى القانون
//ضمان الحقوق الموثقة فى التعاقد
//محاولات الاصلاح وإعادة شأن الأسرة
//الإلمام بأحكام الأسرة وما يترتب عليها

//new z.slide({ img: ['img/abdo/1.jpg', 'img/abdo/2.jpg', 'img/abdo/3.jpg', 'img/abdo/4.jpg', 'img/abdo/5.jpg', 'img/abdo/6.jpg', 'img/abdo/7.jpg', 'img/abdo/8.jpg', 'img/abdo/9.jpg', 'img/abdo/10.jpg', 'img/abdo/11.jpg',], div: "abdo", show: 6, second: 3,second_move:2,  radius: "100%" }).create();

var img_dec = [
    'img/10.png',
    'img/1.png',
    'img/3.png',
    'img/15.png',
    'img/16.png',
    'img/2.png',
    'img/17.png',
];
var img_abdo = [
    'img/abdo/1.jpg',
    'img/abdo/2.jpg',
    'img/abdo/3.jpg',
    'img/abdo/4.jpg',
    'img/abdo/5.jpg',
    'img/abdo/6.jpg',
    'img/abdo/7.jpg',
/*'img/abdo/8.jpg',
    'img/abdo/9.jpg',
    'img/abdo/10.jpg',
'img/abdo/11.jpg'*/];
const nu_l = 7;
var nu_now = nu_l - 1;
var nu_old = nu_l - 2;
var slide_text = [
    'المأذون الشرعى الرسمى',
    'إنشاء الله حياتك الجديدة تبدأ من عندنا',
    'طبقاً لاحكام القران والسنة',
    'ما يتماشى مع مقتضى القانون',
    'ضمان الحقوق الموثقة فى التعاقد',
    'محاولات الاصلاح وإعادة شأن الأسرة',
    'الإلمام بأحكام الأسرة وما يترتب عليها',
];
var slide_img = ['img/4.jpg',
    'img/7.jpg',
    'img/18.jpg',
    'img/19.jpg',
    'img/3.jpg',
    'img/14.jpg',
    'img/16.jpg'
];
for (let i = 0; i < nu_l; i++) {
    document.getElementById('abdo').innerHTML += '<img class="slide_div" src="' + img_abdo[i] + '">';
    document.getElementById('slide').innerHTML += '<div class="slide_div"><img class="slide_img" src="' + slide_img[i] + '"><img class="img_dec" src="'+img_dec[i]+'"><p class="slide_divp"><br>' + slide_text[i] + '</p></div>';
}
slid();
function slid() {
    nu_now++;
    if (nu_now == nu_l) nu_now = 0;
    for (let i = 0; i < nu_l; i++) {
        if (nu_now == i) {
            document.getElementsByClassName("img_dec")[i].classList.add('slide_newdec');
            document.getElementsByClassName("img_dec")[i].classList.remove('slide_old');
            document.getElementsByClassName("slide_div")[i].classList.add('slide_new');
            document.getElementsByClassName("slide_div")[i].classList.remove('slide_old');
            document.getElementsByClassName("slide_div")[i + nu_l].classList.add('slide_new');
            document.getElementsByClassName("slide_div")[i + nu_l].classList.remove('slide_old');
            document.getElementsByClassName("slide_divp")[i].classList.remove('slide_old');
            document.getElementsByClassName("slide_divp")[i].classList.add('slide_newp');
        } else {
            document.getElementsByClassName("img_dec")[i].classList.remove('slide_newdec');
            document.getElementsByClassName("img_dec")[i].classList.add('slide_old');
            document.getElementsByClassName("slide_divp")[i].classList.remove('slide_newp');
            document.getElementsByClassName("slide_divp")[i].classList.add('slide_old');
            document.getElementsByClassName("slide_div")[i + nu_l].classList.add('slide_old');
            document.getElementsByClassName("slide_div")[i + nu_l].classList.remove('slide_new');
            document.getElementsByClassName("slide_div")[i].classList.remove('slide_new');
            document.getElementsByClassName("slide_div")[i].classList.add('slide_old');
        }
    }
}

setInterval(() => {
    slid();
}, 3000);

var de1;
document.getElementById("su1").onclick = function () {
    if (de1) {
        de1 = false;
        document.getElementById("in1").classList.remove('on');
        document.getElementById("in1").classList.add('off');
    } else {
        de1 = true;
        document.getElementById("in1").classList.remove('off');
        document.getElementById("in1").classList.add('on');
    }
}
var de2;
document.getElementById("su2").onclick = function () {
    if (de2) {
        de2 = false;
        document.getElementById("in2").classList.remove('on');
        document.getElementById("in2").classList.add('off');
    } else {
        de2 = true;
        document.getElementById("in2").classList.remove('off');
        document.getElementById("in2").classList.add('on');
    }
}
var de3;
document.getElementById("su3").onclick = function () {
    if (de3) {
        de3 = false;
        document.getElementById("in3").classList.remove('on');
        document.getElementById("in3").classList.add('off');
    } else {
        de3 = true;
        document.getElementById("in3").classList.remove('off');
        document.getElementById("in3").classList.add('on');
    }
}


function alert_hide() {
    document.getElementById("alert").classList.remove("alert_show");
    document.getElementById("alert").classList.add("alert_hide");
    setTimeout(() => {
    document.getElementById("alert").style.display="none";
    }, 1000);
}

function alert_show() {
    setTimeout(() => {
        document.getElementById("alert").style.display="block";
    document.getElementById("alert").classList.remove("alert_hide");
    document.getElementById("alert").classList.add("alert_show");
    }, 100);
}
document.getElementById("close").onclick=alert_hide;

document.getElementById("su4").onclick = function () {
    document.getElementById("fixed_text").innerHTML=document.getElementById("in4").innerHTML;
    alert_show();
}
document.getElementById("su5").onclick = function () {
    document.getElementById("fixed_text").innerHTML=document.getElementById("in5").innerHTML;
    alert_show();
}
document.getElementById("father").onclick = function () {
    document.getElementById("fixed_text").innerHTML=`
    <div id='father_article'>
    <img src='img/6.jpg'><br>
    كان الوالد من زات السمعة الطيبة فى هذا المجال.
    <br>
    اللهم ارحمه واغفر له وارفعه الدرجات العلى من الجنه
    <br>
    وجعله من أهل القرآن الذين هم أهلك وخاصتك.
    </div>
    `;
    alert_show();
}
window.addEventListener('click', function(e){
    if (document.getElementById('alert').style.getPropertyValue('display')=='block' && !document.getElementById('fixed_text').contains(e.target)){
      // Clicked in box
      alert_hide();
    } else{
      // Clicked outside the box
    }
  });
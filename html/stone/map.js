var xe;
var ye;
var xmax=29.983077;
var ymax=31.391676;
var xmin=29.975131;
var ymin=31.379573;
var id;
var m= document.getElementById("po").style;
function ti(){
  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition);
  }
}
function ti2(){
  //if(navigator.geolocation){
  id = navigator.geolocation.watchPosition(showPosition);
//}
}
function gps() {
  setInterval(ti, 5000); 
}
function showPosition(position) {
  xe = position.coords.latitude;
  ye = position.coords.longitude;
  wx = document.querySelector("[c1]").clientWidth;
  hx = document.querySelector("[c1]").clientHeight;
  if(xe>xmax)xe=xmax;
  if(ye<ymin)ye=ymin;
  if(xe<xmin)xe=xmin;
  if(ye>ymax)ye=ymax;
  xxe=(hx-((xe-xmin)*hx)/(xmax-xmin));
  yye=(((ye-ymin)*wx)/(ymax-ymin));
  wtr=Math.sqrt((xxe**2)+(yye**2));
  xxxe=Math.sin(53 * Math.PI / 180)*wtr;
  yyye=Math.cos(53 * Math.PI / 180)*wtr;
  /*xe=xmax;
  ye=ymin;*/
  m.top=(xxe-5).toString()+"px";
m.left=(yye-5).toString()+"px";
}
//gps();
//ti();

function myFunction(event){
  document.getElementById("po").style.transform="rotate("+(360-event.alpha)+"deg)";
}
    setInterval(function() {
      window.addEventListener('deviceorientation', myFunction);
      setTimeout(function() {
        window.removeEventListener("deviceorientation", myFunction);
        
      }, 100);
    }, 2000);
    
setTimeout(function() {ti2();}, 1000);
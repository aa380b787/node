s11=document.getElementById('i2');
s3 = document.querySelectorAll("[bm2]");
s33 = 2;
zzoom=true;
/*function f1(){
  s1=document.getElementById('i1');
  s2="";
  for (var i = 0; i < pos.length; i++) {
    s2+='<a href="https://www.google.com.eg/maps/place/'+pos[i][0]+'N+'+pos[i][1]+'E/@29.9788942,31.3849223,15z/data=!3m1!1e3?hl=ar">'+(i+1)+'</a><br><br>';
  }
  s1.innerHTML=s2;
}*/
function f2(x){
  if (x=="0" && s11.innerHTML=='') {
    //f4();
  }
  else if (x==''){s11.innerHTML='';
  document.getElementById('x').style.visibility = "hidden";}
  /*else if ((s11.innerHTML.length == 3 && s33==0) || (s11.innerHTML.length == 2 && s33==1) || (s11.innerHTML.length == 1 && s33==2)) {
    f4();
  }*/
  else {
    s11.innerHTML+=x;
    document.getElementById('x').style.visibility = "visible";
    if (parseInt(s11.innerHTML)>pos[s33].length){
    f4();
  }
  }
}
function f3(){
  if (s11.innerHTML=='') {
    alert(
     "ادخل عدد !!!"
     +"\n Enter number !!!"
      );
  }else{
  do_(s33.toString()+'-'+s11.innerHTML);
  window.location.href = 'https://www.google.com.eg/maps/place/'+pos[s33][parseInt(s11.innerHTML)-1][0]+'N+'+pos[s33][parseInt(s11.innerHTML)-1][1]+'E/@29.9788942,31.3849223,15z/data=!3m1!1e3?hl=ar';
}}
function f4(){
  s11.innerHTML='';
  document.getElementById('x').style.visibility = "hidden";
    alert(
      "يجب ألا يزيد العدد عن "
      + (pos[s33].length.toString())+
      "\n The number should not be more than "
      + (pos[s33].length.toString()));
}
//f1();
f11(0);
function f11(x){
 if (x==s33) {
   f3();
 }else{
 for (var i = 0; i < s3.length; i++) {
   s11.innerHTML='';
   document.getElementById('x').style.visibility = "hidden";
   s33=x;
   if (x==i) {
   s3[i].style.color="blue";
   s3[i].style.background="yellow";
 }else{
   s3[i].style.color="darkred";
   s3[i].style.background="#89898965";
 }
   
 }
}}
function fzoom(){
  hx1 = document.getElementById("zxc").clientHeight.toString();
  s=document.querySelector("[c1]");
  var css = '[c1]:hover{ width:'+(zzoom?'1665px':'95%')+';top:'+(zzoom?'10px':'560px')+';}';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

s.appendChild(style);
  
  zzoom=!zzoom;
  if(!zzoom)do_("map");
}

//document.querySelector("[c1]").style.top = document.getElementById("zxc").clientHeight.toString()+"px";
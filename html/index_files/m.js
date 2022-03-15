function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 360;
}
window.onscroll=function(){
    var s = getScrollPercent();
    document.getElementById('logo').style.transform =  "rotate("+s+"deg)";

    if(s<40){
        for (let index = 0; index < document.getElementsByClassName("prj").length; index++) {
            document.getElementsByClassName("prj")[index].classList.remove("prjj");
        }
    }
    if(s>40){
        for (let index = 0; index < document.getElementsByClassName("prj").length; index++) {
            document.getElementsByClassName("prj")[index].classList.add("prjj");
        }
    }
} 

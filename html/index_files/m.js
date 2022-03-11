function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 360;
}
window.onscroll=function(){
    document.getElementById('logo').style.transform =  "rotate("+getScrollPercent()+"deg)";
} 
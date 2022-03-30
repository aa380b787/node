var vue = new Vue({
    el: '#body',
    data: {
        nav: [
            { href: '', text: "Home" },
            //{ href: '', text: "Services" },
            { href: '', text: "Pricing" },
            { href: '', text: "Our Work" },
            //{ href: '', text: "Career" },
            { href: '', text: "About" },
            { href: '', text: "Blog" },
            { href: '', text: "Contact Us" },
            { href: '', text: "E-Learning" },
            //{ href: '', text: "Language" },
        ],
        ser: [
            { title: "Creative Branding", details: "Branding is what transforms first-time buyers into lifetime customers and turns an indifferent audience into brand evangelists." },
            { title: "Voice Over", details: "One of the greatest ways to tell your story is through audio. and we’ll help you to produce a high quality audio that features your business story and goals." },
            { title: "Digital Marketing", details: "When Visual Content is aligned with your branding, you surely stand out from the crowd. Vivacious designs nowadays are not optional." },
            { title: "Advertising", details: "What happens on digital, stays on search engines for ever! Our SEO strategies will place your business among the titans." },
            { title: "Social Media Marketing", details: "Social media is a two-way form of communication that allows users to interact with the information being transmitted." },
            { title: "Content Creation & Strategy", details: "Content is the reason why search began in the first place. Today’s stories are digital & we make your stories worth reading." },
            { title: "Web Design & Development", details: "Your website is the core image of your business. For this we will make sure you have a well designed, attractive and user friendly platform for an upgraded browsing experience." },
        ],
        header:[
            {img:"startup.png",title:"Startup your dream"},
            {img:"13.png",title:"13 Years Of Experience"},
            {img:"Creative.webp",title:"Creative & Expert Team"},
            {img:"com.png",title:"Fast Communication"},
            {img:"heppy.com",title:"Happy & Successful Clients"},
        ]
    }
});
var time_ser = 0;
var time_deg = 0;
setInterval(() => {
    time_ser++;
    time_deg += 90;
    if (time_deg == 360) time_deg = 0;
    if (vue.ser.length == time_ser) time_ser = 0;
    document.getElementById("a").animate([
        { transform: 'rotate(' + (time_deg - 90).toString() + 'deg)' },
        { transform: 'rotate(' + (time_deg).toString() + 'deg)' }
    ], {
        fill: 'forwards',
        easing: 'ease-in-out',
        duration: 1000

    });
    document.getElementById("b").animate([
        { transform: 'rotate(' + -(time_deg - 90).toString() + 'deg)' },
        { transform: 'rotate(' + -(time_deg).toString() + 'deg)' }
    ], {
        fill: 'forwards',
        easing: 'ease-in-out',
        duration: 1000
    });
    document.getElementById("c").animate([
        { transform: 'rotate(' + (time_deg - 90).toString() + 'deg)' },
        { transform: 'rotate(' + (time_deg).toString() + 'deg)' }
    ], {
        fill: 'forwards',
        easing: 'ease-in-out',
        duration: 1000
    });
    document.getElementById("d").src = "ser/" + ((time_ser == 0) ? (vue.ser.length) : (time_ser)).toString() + ".png";
    document.getElementById("e").src = "ser/" + (time_ser + 1).toString() + ".png";

    document.getElementById("d").animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        fill: 'forwards',
        easing: 'ease-in-out',
        duration: 1000
    });
    document.getElementById("e").animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        fill: 'forwards',
        easing: 'ease-in-out',
        duration: 1000
    });
    for (let i = 0; i < document.getElementsByClassName("ser-title").length; i++) {
        if (i == time_ser) {
            document.getElementsByClassName("ser-title")[i].animate([
                { background: "transparent" },
                { background: getComputedStyle(document.documentElement).getPropertyValue('--bg1') }
            ], {
                fill: 'forwards',
                easing: 'ease-in-out',
                duration: 1000
            });
        } else if (i == time_ser - 1) {
            document.getElementsByClassName("ser-title")[i].animate([
                { background: getComputedStyle(document.documentElement).getPropertyValue('--bg1') },
                { background: "transparent" }
            ], {
                fill: 'forwards',
                easing: 'ease-in-out',
                duration: 1000
            });
        } else if (time_ser == 0) {
            document.getElementsByClassName("ser-title")[document.getElementsByClassName("ser-title").length - 1].animate([
                { background: getComputedStyle(document.documentElement).getPropertyValue('--bg1') },
                { background: "transparent" }
            ], {
                fill: 'forwards',
                easing: 'ease-in-out',
                duration: 1000
            });
        }
    }
}, 5000);
//رقم السطر
zcode    =function(){return Error().stack.match(/:\d{1,}(?=:)/g)[1].substr(1);}


//مللى ثانية
zmse    =function(){return new Date().getMilliseconds();}


//الثواني
zse    =function(){return new Date().getSeconds();}


//الدقائق
zmi    =function(){return new Date().getMinutes();}


//الساعة بنظام 24
zh24    =function(){return new Date().getHours();}


//الساعة بنظام 12
zh12    =function(){if(new Date().getHours()==0){return 12}else if(new Date().getHours()>12){return new Date().getHours()-12}else{return new Date().getHours()}}


//AM - PM
zampm    =function(){if(new Date().getHours()>=12){return "PM"}else{return "AM"}}


//ص - م
zampmar    =function(){if(new Date().getHours()>=12){return "م"}else{return "ص"}}


//ايام الاسبوع Saturday - Sunday
zweekday    =function(){weekday=Array;weekday[0]="Sunday";weekday[1]="Monday";weekday[2]="Tuesday";weekday[3]="Wednesday";weekday[4]="Thursday";weekday[5]="Friday";weekday[6]="Saturday";return weekday[new Date().getDay()]}


//ايام الاسبوع Sat - Sun
zweek    =function(){week=Array;week[0]="Sun";week[1]="Mon";week[2]="Tue";week[3]="Wed";week[4]="Thu";week[5]="Fri";week[6]="Sat";return week[new Date().getDay()]}


//السبت - الاحد ايام الاسبوع
zweekar    =function(){weekar=Array;weekar[0]="الأحد";weekar[1]="الإثنين";weekar[2]="الثلاثاء";weekar[3]="الأربعاء";weekar[4]="الخميس";weekar[5]="الجمعة";weekar[6]="السبت";return weekar[new Date().getDay()]}


//اليوم في الشهر
zday    =function(){return new Date().getDate();}


//الشهر بالرقم
zmo    =function(){return new Date().getMonth()+1;}


//السنة كاملة
zyearf    =function(){return new Date().getFullYear();}


//السنة مختصرة
zyears    =function(){return JSON.stringify(new Date().getFullYear()).substr(2);}


//UTC //مللى ثانية
zumse    =function(){return new Date().getUTCMilliseconds();}


//UTC //الثواني
zuse    =function(){return new Date().getUTCSeconds();}


//UTC //الدقائق
zumi    =function(){return new Date().getUTCMinutes();}


//UTC //الساعة بنظام 24
zuh24    =function(){return new Date().getUTCHours();}


//UTC //الساعة بنظام 12
zuh12    =function(){if(new Date().getUTCHours()==0){return 12}else if(new Date().getUTCHours()>12){return new Date().getUTCHours()-12}else{return new Date().getUTCHours()}}


//UTC //AM - PM
zuampm    =function(){if(new Date().getUTCHours()>=12){return "PM"}else{return "AM"}}


//UTC //ص - م
zuampmar    =function(){if(new Date().getUTCHours()>=12){return "م"}else{return "ص"}}


//UTC //ايام الاسبوع Saturday - Sunday
zuweekday    =function(){weekday=Array;weekday[0]="Sunday";weekday[1]="Monday";weekday[2]="Tuesday";weekday[3]="Wednesday";weekday[4]="Thursday";weekday[5]="Friday";weekday[6]="Saturday";return weekday[new Date().getUTCDay()]}


//UTC //ايام الاسبوع Sat - Sun
zuweek    =function(){week=Array;week[0]="Sun";week[1]="Mon";week[2]="Tue";week[3]="Wed";week[4]="Thu";week[5]="Fri";week[6]="Sat";return week[new Date().getUTCDay()]}


//UTC //السبت - الاحد ايام الاسبوع
zuweekar    =function(){weekar=Array;weekar[0]="الأحد";weekar[1]="الإثنين";weekar[2]="الثلاثاء";weekar[3]="الأربعاء";weekar[4]="الخميس";weekar[5]="الجمعة";weekar[6]="السبت";return weekar[new Date().getUTCDay()]}


//UTC //اليوم في الشهر
zuday    =function(){return new Date().getUTCDate();}


//UTC //الشهر بالرقم
zumo    =function(){return new Date().getUTCMonth()+1;}


//UTC //السنة كاملة
zuyearf    =function(){return new Date().getUTCFullYear();}


//UTC //السنة مختصرة
zuyears    =function(){return JSON.stringify(new Date().getUTCFullYear()).substr(2);}


//رقم عشوائي 
//1/من
//2/الى
zran    =function(x=0,y=1){return Math.floor((Math.random()*(y-x+1))+x);}


//sin
//1/x
zsin    =function(x){return Math.sin(x*Math.PI/180);}


//cos 
//1/x
zcos    =function(x){return Math.cos(x*Math.PI/180);}


//tan 
//1/x
ztan    =function(x){return Math.tan(x*Math.PI/180);}


//فتح ملف1 
//1/امتداد
//setInterval 
/*zfopen("../files/text.txt");
zopen="x07263016";
	x07253024=setInterval(() => {
		if(zopen!="x07263016"){
		ze("#jj").innerHTML=zopen;	
			clearInterval(x07253024);}
	}, 1);*/
zfopen    =function(x){htp=new XMLHttpRequest();htp.open("GET",x,true);htp.send();htp.onreadystatechange    =function(){if(this.readyState==4&&this.status==200){zopen=this.responseText;}};;}


//فتح ملف2 
//1/امتداد
//setInterval 
/*zfopen2("../files/text.txt");
zopen2="x07263016";
x07253024=setInterval(() => {
    if(zopen2!="x07263016"){
        ze("#jj").innerHTML=zopen2;
        clearInterval(x07253024);}}, 1);*/
zfopen2    =function(x){htp2=new XMLHttpRequest();htp2.open("GET",x,true);htp2.send();htp2.onreadystatechange    =function(){if(this.readyState==4&&this.status==200){zopen2=this.responseText;}};;}


//فتح ملف نص text 
//1/امتداد
//setInterval
/*zftxt("../files/text.txt");
ztxt="x07263016";
x07253024=setInterval(() => {
    if(ztxt!="x07263016"){
        ze("#jj").innerHTML=ztxt;
        clearInterval(x07253024);}}, 1);*/
zftxt    =function(x){zfopen(x);x04hg4101=setInterval(function(){if(zopen){ztxt="";for(xxch of zopen){if(xxch=="\n"){xxch=xxch.substring(0,xxch.length-1);ztxt=ztxt+"<br>";}else{ztxt=ztxt+xxch;}};clearInterval(x04hg4101);}},1)}


//فتح ملف csv وتحويله array 1 
//1/امتداد
//setInterval
/*zfrr("../files/csv.csv");
zrr="x07263016";
x07253024=setInterval(() => {
    if(zrr!="x07263016"){
        ze("#jj").innerHTML=zrr;
        clearInterval(x07253024);}}, 1);*/
zfrr    =function(x){zfopen(x);x04hg5300=setInterval(function(){if(zopen){xxcell="";xxrow=[];zrr=[];for(xxsemicolon of zopen){if(xxsemicolon==";"){xxrow.push(xxcell);xxcell="";}else if(xxsemicolon=="\n"){xxcell=xxcell.substring(0,xxcell.length-1);xxrow.push(xxcell);xxcell="";zrr.push(xxrow);xxrow=[];}else{xxcell=xxcell+xxsemicolon;}};clearInterval(x04hg5300);}},1)}


//فتح ملف csv وتحويله array 2
//1/امتداد
//setInterval
/*zfrr2("../files/csv.csv");
zrr2="x07263016";
x07253024=setInterval(() => {
    if(zrr2!="x07263016"){
        ze("#jj").innerHTML=zrr2;
        clearInterval(x07253024);}}, 1);*/
zfrr2    =function(x){zfopen2(x);x04hg53002=setInterval(function(){if(zopen2){xxcell2="";xxrow2=[];zrr2=[];for(xxsemicolon2 of zopen2){if(xxsemicolon2==";"){xxrow2.push(xxcell2);xxcell2="";}else if(xxsemicolon2=="\n"){xxcell2=xxcell2.substring(0,xxcell2.length-1);xxrow2.push(xxcell2);xxcell2="";zrr2.push(xxrow2);xxrow2=[];}else{xxcell2=xxcell2+xxsemicolon2;}};clearInterval(x04hg53002);}},1)}


//array to table 
//1/متغيير array ;zrr;
ztable    =function(x=zrr){xtable=""/*<table>*/;i=0;while(x.length>i){xtable=xtable+"<tr>";ii=0;while(x[i].length>ii){if(i==0){xtable=xtable+"<td class=th>"+x[i][ii]+"</td>";}else{xtable=xtable+"<td>"+x[i][ii]+"</td>";}ii++;}xtable=xtable+"</tr>";i++;}xtable+=""/*</table>*/;return xtable;}


//حذف عمود 
//1/رقم العمود 
//2/متغيير array ;zrr;
zdel    =function(x,y=zrr){x=x-1;for(let index=0;index<y.length;index++){y[index].splice(x,1);}}


//لصق
//setInterval
/*	zfpaste();
	zpaste="x07263016";
x07253024=setInterval(() => {
    if(zpaste!="x07263016"){
		ze("#jj").innerHTML=zpaste;
        clearInterval(x07253024);}}, 1);*/
zfpaste    =function(){navigator.clipboard.readText().then(function(x){zpaste=x;});}


//نسخ
//1/نص النسخ
zcopy    =function(x){navigator.clipboard.writeText(x);}


//الحصول على عنصر بنفس تسميته فى css
//1/تسميته فى css
//2/ ترتيبه ؛0؛
ze    =function(x,y=0){return document.querySelectorAll(x)[y];}


//داونلود
//1/الرابط
//2/اسم الملف ؛التسمية الاصلية؛
zdownload    =function(x,y=""){xxdownload=document.createElement("a");xxdownload.href=x;xxdownload.download=y;/*name*/xxdownload.click();}


//الترتيب التصاعدي
//1/رقم العمود
//2/متغيير array ;zrr;
zsort    =function(x,y=zrr){x=x-1;xxsort=[];i=0;while(i<y.length){xxsort.push(y[i][x]);i++;}xxsort.sort();xxsort.sort(function(a,b){return a-b});i=0;x04gc1003=[];x04gc1341=xxsort.length;x04gc1917=y;while(i<x04gc1341){ii=0;while(ii<x04gc1917.length){if(xxsort[i]==x04gc1917[ii][x]){x04gc1003.push(x04gc1917[ii]);x04gc1917.splice(ii,1);break;}ii++;}i++;}zrr=x04gc1003;}


//الترتيب التنازلي
//1/رقم العمود
//2/متغيير array ;zrr;
zdsort    =function(x,y=zrr){zsort(x,y=zrr);zrr=x04gc1003.reverse();}


//بحث في جدوال
//1/كلمة البحث أو مجموعة مدمجة من الكلمات []
//2/رقم العمود ؛كل الاعمدة؛
//3/متغيير array ;zrr;
zsearch    =function(x,y,z=zrr){x04em0441=[];for(x04em0049 of z){if(y==undefined){x04em2818=x04em0049;}else{x04em2818=x04em0049[y-1];};if(Array.isArray(x)==true){for(x04gl2918 of x){if(JSON.stringify(x04em2818).match(x04gl2918)==x04gl2918){x04em0441.push(x04em0049);}}}else{if(JSON.stringify(x04em2818).match(x)==x){x04em0441.push(x04em0049);}}}zrr=x04em0441;}


//بحث ما ليس في الجدوال not
//1/كلمة البحث أو مجموعة مدمجة من الكلمات []
//2/رقم العمود ؛كل الاعمدة؛
//3/متغيير array ;zrr;
zsearchnot    =function(x,y,z=zrr){xxcb=0;x04em0441=[];i=0;while(i<z.length){if(y==undefined){x04em2818=z[i];}else{x04em2818=z[i][y-1];};if(Array.isArray(x)==true){if(xxcb==0){xxcb=1;x04em0441=zrr;}for(x04gl2918 of x){if(JSON.stringify(x04em2818).match(x04gl2918)==x04gl2918){x04em0441.splice(i,1);i=i-1;}}}else{if(JSON.stringify(x04em2818).match(x)!=x){x04em0441.push(z[i]);}};i++;}zrr=x04em0441;}


//اسقاط المكرر
//1/رقم العمود
//2/متغيير array ;zrr;
zgroup    =function(x,y=zrr){x=x-1;i=0;x04hd0711=[];x04hd0712=[];while(i<y.length){ii=0;x04hd1308=1;while(ii<x04hd0711.length){if(y[i][x]==x04hd0711[ii]){x04hd1308=0;}ii++;}if(x04hd1308==1){x04hd0711.push(y[i][x]);x04hd0712.push(y[i]);}i++;}zrr=x04hd0712;}


//دمج جدولين واظهار الكل
//1/رابط الجدوال الاول
//2/عامود ربط الجدوال الاول
//3/رابط الجوال الثاني
//4/عامود ربط الجوال الثاني
//setInterval
/*zfmer("../files/csv.csv",2,"../files/csv_2.csv",3);
zmer="x07270819";
x04hf2951=setInterval(function(){if(zmer!="x07270819"){
	ze(".cta").innerHTML=ztable();
	clearInterval(x04hf2951);}},1)*/
zfmer    =function(a,b,c,d){b=b-1;d=d-1;zfrr(a);x04hh2014=setInterval(function(){if(zrr){xrr1=zrr;delete zrr;zfrr2(c);x04hh2213=setInterval(function(){if(zrr2){xrr2=zrr2;x04gb3510=[];i=0;iui=0;x07281259=[];while(xrr2[0].length>iui){x07281259.push("");iui++;};while(i<xrr2.length){x04gb3510.push(xrr2[i][d]);i++;}x04fk2133=[];i=0;while(i<xrr1.length){xv=0;ii=0;while(ii<x04gb3510.length){if(xrr1[i][b]==x04gb3510[ii]){x04fk2133.push(xrr1[i].concat(xrr2[ii]));xv=1;break;};ii++;}if(xv!=1){x04fk2133.push(xrr1[i].concat(x07281259));};i++;}zrr=x04fk2133;zmer=x04fk2133;clearInterval(x04hh2213);}},1);clearInterval(x04hh2014)}},1);}


//دمج جدولين واظهار فقط المتطابق من عمودين الربط
//1/رابط الجدوال الاول
//2/عامود ربط الجدوال الاول
//3/رابط الجوال الثاني
//4/عامود ربط الجوال الثاني
//setInterval
/*zfmerhi("../files/csv.csv",2,"../files/csv_2.csv",3);
zmerhi="x07270819";
x04hf2951=setInterval(function(){if(zmerhi!="x07270819"){
	ze(".cta").innerHTML=ztable();
	clearInterval(x04hf2951);}},1)*/
zfmerhi    =function(a,b,c,d){b=b-1;d=d-1;zfrr(a);x04hh5900=setInterval(function(){if(zrr){xrr1=zrr;delete zrr;zfrr2(c);x04hh5911=setInterval(function(){if(zrr2){xrr2=zrr2;x04gb3510=[];i=0;while(i<xrr2.length){x04gb3510.push(xrr2[i][d]);i++;}x04fk2133=[];i=0;while(i<xrr1.length){ii=0;while(ii<x04gb3510.length){if(xrr1[i][b]==x04gb3510[ii]){x04fk2133.push(xrr1[i].concat(xrr2[ii]));break;}ii++;}i++;}zrr=x04fk2133;zmerhi=x04fk2133;clearInterval(x04hh5911);}},1);clearInterval(x04hh5900);};},1);}


//MySQL & SQL Server in php to array
//1/البيانات المحولة ؛افتراضي؛;zsqlphp;
zfsqlphp    =function(x=zsqlphp){x=JSON.parse(x);zrr=[];i=0;for(x04jd4732 in x[0]){i++;}iiii=0;x04jf2325=[];for(x04jf2719 in x[0]){iiii++;if(iiii>i/2){x04jf2325.push(x04jf2719)}}zrr.push(x04jf2325);ii=0;while(x.length>ii){iii=0;x04jf2325=[];while(i/2>iii){x04jf2325.push(x[ii][iii]);iii++;}zrr.push(x04jf2325);ii++;}}


//array to csv
//1/array ;zrr;
zcsv    =function(x=zrr){i=0;x04ka0809="";while(i<x.length){ii=0;x04ka2744=0;while(ii<x[0].length){if(x04ka2744==0){x04ka2744=1;}else{x04ka0809+=";";}x04ka0809+=x[i][ii];ii++;}x04ka0809=x04ka0809+"\n";i++;}return "\ufeff"+x04ka0809;}


//GET to object
zget    =function(){return JSON.parse(decodeURIComponent('{"'+location.toString().substring(location.toString().lastIndexOf("?")+1).replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g,'%20')+'"}'))}


//Array to  object
//1/متغيير array ;zrr;
zrrtoob    =function(x=zrr){i=1;zob=[];while(i<x.length){ii=0;x05905112={};while(ii<x[0].length){x05905112[x[0][ii]]=x[i][ii];ii++;}zob.push(x05905112);i++;}return zob;}


//object to Array
//1/متغيير object ;zob;
zobtorr    =function(x=zob){zrr=[];x04tn3501=[];for(x04tn3444 in x[0]){x04tn3501.push(x04tn3444)}zrr.push(x04tn3501);i=0;while(x.length>i){ii=0;x04tn3500=[];while(x04tn3501.length>ii){x04tn3500.push(x[i][x04tn3501[ii]]);ii++;}zrr.push(x04tn3500);i++;}return zrr;}
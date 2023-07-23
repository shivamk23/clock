setInterval(showTime,1000)
function showTime(){
    let a=new Date()
let h=a.getHours()
let m=a.getMinutes()
let s=a.getSeconds()
let d=a.getDate()
let mo=a.getMonth()
let y=a.getFullYear()
let n= a.toLocaleString('default', { month: 'long' });
am_pm="AM"

if(h>=12){
    if(h>12){
        h -=12;
    }
am_pm="PM"
}else if(h==0){
    am_pm="PM"
}

if(h<10){
    h="0"+h;
}
if(m<10){
    m="0"+m;
}
if(s<10){
    s="0"+s;
}
let time="Time : "+h+":"+m+":"+s+am_pm+" /Date : "+d+" /Month : "+n+" /Year : "+y

document.getElementById("clock").innerHTML=time;

}
showTime()








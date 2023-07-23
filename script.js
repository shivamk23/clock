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





// const options1 = {
//     method: 'GET',
//     headers: {
// 		'X-RapidAPI-Key': '742611762amsha9e80ff84ce072fp1bcf9djsnb3949e2da3e9',
// 		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
//     }
// };
// const getWeather1 = (city)=>{
    

//     fetch('https://weather-api99.p.rapidapi.com/weather?city=london', options1)
//     .then(response => response.json())
//     .then((response) => {
//         console.log(response);

        
             
        
//     })
//     .catch(err => console.error(err))
// }


// getWeather1("London")

function timeToEat(str) {
    let str1 =str.split(" ")
    let time =str1[0]
    let time1=time.split(":")
    let hour =  Number(time1[0]);
    let minute=time1[1];
    let hours;
    let minutes;
    let hourpm;
    if (str1[1] === 'p.m.') {
        hourpm = hour + 12;
    };
    if(minute=="00") {
        if(hour>=0 &&  hour<= 7){
            hours = 7 - hour
        }else if(7 <hour   && hour<= 12){
            hours = 12 - hour
        }else if(12 < hourpm && hourpm<= 19){
            hours = 19 - hourpm
        }else if(19 < hourpm && hourpm <= 23){
            hours = (24-hourpm)+7
        }
        minutes=0

    }else {
        if(hour>0 &&  hour<7){
            hours = 7 - (hour+1)
        }else if(7 <hour   && hour<12){
            hours = 12 - (hour+1)
        }else if(12 < hourpm && hourpm< 19){
            hours = 19 - (hourpm+1)
        }else if(19 < hourpm && hourpm < 23){
            hours = (24-(hourpm+1))+7
        }
        minutes =60-Number(minute)
    }

    return [hours , minutes];
    
 
} 



console.log(timeToEat("2:00 p.m."))
console.log(timeToEat("5:50 a.m."))
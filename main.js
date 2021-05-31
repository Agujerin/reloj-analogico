//PRÁCTICA RELOJ ANALÓGICO
// -Reloj que marque la hora actual
// -NO está permitido el uso de imágens, todo código

const secs = document.getElementById('secs')
const mins = document.getElementById('mins')
const hrs = document.getElementById('hrs') 

const calc =(a,b,c)=>{
    let num = 0
    let num2 = a
    let num3 = b * num2
    num += num2 + num3
    c.style.transform = `rotate(${num}deg)`
}

setInterval(
    function time(){
        const date = new Date()   
        
        calc(date.getSeconds(),5,secs) 
        calc(date.getMinutes(),5,mins) 
        
        let num = 0
        let num2 = date.getHours()
        let num3 = 29 * num2
        if(date.getMinutes() >50) num += num2 + (num3 + 25)
        else if (date.getMinutes() >40) num += num2 + (num3 + 20)
        else if (date.getMinutes() >30) num += num2 + (num3 + 15)
        else if (date.getMinutes() >20) num += num2 + (num3 + 10)
        else if (date.getMinutes() >10) num += num2 + (num3 + 5)
        else if (date.getMinutes() >=0) num += num2 + num3
        hrs.style.transform = `rotate(${num}deg)`   
    },1000
)

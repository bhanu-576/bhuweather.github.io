// now we need to determine the constant of one of the id function
let inputVal = document.querySelector('#cityInput')
let btn = document.querySelector('#add')
let city = document.querySelector('#cityOutPut')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')

let apik = "61f9d1510bb18d2acb6dbdbfeb86c1ca";
// kelvin to celcious. 1 kelvin is equal to -272.15 celsius
function conversion(val){
    return (val-273).toFixed(2)
}
// Now we have to collect all information with the help of fetch method
btn.addEventListener('click',function(){
    //api link from where all the information will be collected
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid='+apik)
    .then(res => res.json())
    // .then(data=>console.log(data))
    .then(data => {
        
        //now we need to collect the necessary information with the api link
        let nameVal = data['name']
        let descrip = data['weather'] ['0'] ['description']
       
        let temprature = data['main'] ['temp']
       

        let wndspd = data['wind'] ['speed']
       
        //now with the help of innerHtml you have to display
        city.innerHTML = `weather of<span>${nameVal}<span>`
        temp.innerHTML = `Temprature: <span>${conversion(temprature)} C</span>`
        console.log("bhanu");
        description.innerHTML = `Sky Condition:<span>${descrip}</span>`
        wind.innerHTML = `Wind Speed : <span>${wndspd} km/h<span>`
        
    })
    //Now the condition must be added that what if you do not input anything
    .catch(err =>alert('You entered Wrong city name'))
})

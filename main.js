const api= {
    key:"7bbf8d66056546fd3b0f6e29660e1228",
    baseurl:"https://home.openweathermap.org/"
}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt) {
    if(evt.keyCode==13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}
function getResults(query){
    fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}    

function displayResults(weather) {
        console.log(weather);
        let city =document.querySelector('.location .city');
        city.innerText='${weather.name}, ${weather.sys.country}';

        let now=new Date();
        let date=document.querySelector('.locaton .date');
        date.innerText=dateBuilder(now);

        let temp=document.querySelector('.current .temp');
        temp.innerHTML='${math.round(weather.main.temp)}<span>°c</span>';

        let weather_el=document.querySelector('.current .weather');
        weather_el.innerText=weather.weather[0].main;

        let hilow=document.querySelector('.hi-low');
        hilow.innerText='${weather.main.temp_min}°c / ${weather.main.temp_max}°c';
    }

function dateBuilder(d) {
        let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day=days[d.getDay()];
        let date=d.getDate();
        let month=months[d.getMonths()];
        let year=d.getFullYear();

        return '${day} ${date} ${month} ${year}';
    }
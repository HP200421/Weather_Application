let response
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5ddf5c2bedmsh28c1591215771dbp1684d0jsnd5b445bfde61',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options) //we have to city value dynamically
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset



    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault() //to stop refreshing page
    getWeather(city.value)
})

getWeather("Pune")

//for fix cities on weather applicaion
//Nashik city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nashik', options) //we have to city value dynamically
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        n1.innerHTML = response.cloud_pct
        n2.innerHTML = response.temp
        n3.innerHTML = response.feels_like
        n4.innerHTML = response.humidity
        n5.innerHTML = response.min_temp
        n6.innerHTML = response.max_temp
        n7.innerHTML = response.wind_speed
        n8.innerHTML = response.wind_degrees
        n9.innerHTML = response.sunrise
        n0.innerHTML = response.sunset


    })
    .catch(err => console.error(err));

//Kolkata city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options) //we have to city value dynamically
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        k1.innerHTML = response.cloud_pct
        k2.innerHTML = response.temp
        k3.innerHTML = response.feels_like
        k4.innerHTML = response.humidity
        k5.innerHTML = response.min_temp
        k6.innerHTML = response.max_temp
        k7.innerHTML = response.wind_speed
        k8.innerHTML = response.wind_degrees
        k9.innerHTML = response.sunrise
        k0.innerHTML = response.sunset


    })
    .catch(err => console.error(err));

//Nagpur city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nagpur', options) //we have to city value dynamically
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        g1.innerHTML = response.cloud_pct
        g2.innerHTML = response.temp
        g3.innerHTML = response.feels_like
        g4.innerHTML = response.humidity
        g5.innerHTML = response.min_temp
        g6.innerHTML = response.max_temp
        g7.innerHTML = response.wind_speed
        g8.innerHTML = response.wind_degrees
        g9.innerHTML = response.sunrise
        g0.innerHTML = response.sunset


    })
    .catch(err => console.error(err));

//Lucknow city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options) //we have to city value dynamically
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        l1.innerHTML = response.cloud_pct
        l2.innerHTML = response.temp
        l3.innerHTML = response.feels_like
        l4.innerHTML = response.humidity
        l5.innerHTML = response.min_temp
        l6.innerHTML = response.max_temp
        l7.innerHTML = response.wind_speed
        l8.innerHTML = response.wind_degrees
        l9.innerHTML = response.sunrise
        l0.innerHTML = response.sunset


    })
    .catch(err => console.error(err));

//New York city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options) //we have to city value dynamically
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        a1.innerHTML = response.cloud_pct
        a2.innerHTML = response.temp
        a3.innerHTML = response.feels_like
        a4.innerHTML = response.humidity
        a5.innerHTML = response.min_temp
        a6.innerHTML = response.max_temp
        a7.innerHTML = response.wind_speed
        a8.innerHTML = response.wind_degrees
        a9.innerHTML = response.sunrise
        a0.innerHTML = response.sunset


    })
    .catch(err => console.error(err));

//Bengaluru city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru', options) //we have to city value dynamically
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        b1.innerHTML = response.cloud_pct
        b2.innerHTML = response.temp
        b3.innerHTML = response.feels_like
        b4.innerHTML = response.humidity
        b5.innerHTML = response.min_temp
        b6.innerHTML = response.max_temp
        b7.innerHTML = response.wind_speed
        b8.innerHTML = response.wind_degrees
        b9.innerHTML = response.sunrise
        b0.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
    
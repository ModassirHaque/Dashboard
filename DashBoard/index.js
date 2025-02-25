
// 2ab992bb07813299a658977eb6d3ae0e
fetch("https://apis.scrimba.com/unsplash/photos/random?orientaton=landscape&query=nature")
.then(response=>response.json())
.then(data=>{
    console.log(data)
    document.body.style.backgroundImage=`url(${data.urls.regular})`
    document.getElementById("author").textContent=`By:${data.user.name}`;
})
.catch(error=>{
    console.log("Something went wrong")
    document.body.style.backgroundImage=`url("https://unsplash.com/photos/vUNQaTtZeOo/download?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzg3NjUyODB8")`
})
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
.then(response=>response.json())
.then(data=>{
    console.log(data)
    document.getElementById("crypto-top").innerHTML=`
    <img src=${data.image.small}/>
    <span>${data.name}</span>
    `
    document.getElementById("crypto").innerHTML+=`
    <p>🎯: $${data.market_data.current_price.usd}</p>
    <p>👆: $${data.market_data.high_24h.usd}</p>
    <p>👇: $${data.market_data.low_24h.usd}</p>
    `
})
.catch(error=>console.log("something went wrong"))


setInterval(()=>{
    const date=new Date()
document.getElementById("time").textContent=date.toLocaleTimeString("en-us",{timeStyle:"medium"})

},1000)

navigator.geolocation.getCurrentPosition(position=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=2ab992bb07813299a658977eb6d3ae0e`)
    .then(response=>{
        if(!response.ok){
            throw Error("Weather not available")
        }
        return response.json()
    })
    .then(data=>{
        console.log(data)
        const imgUrl=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        const temp=Math.ceil(data.main.temp)
        document.getElementById("weather").innerHTML=`
        <img src=${imgUrl}></img>
        <h1 class="weather-temp">${temp} °C</h1>
        <p class="weather-city">${data.name}</p>
        `
    })
    .catch(error=>console.error(error))
})

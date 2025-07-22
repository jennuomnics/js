const form = document.querySelector('form')

const details = document.querySelector('.details')

const card = document.querySelector('.card')

const time = document.querySelector('.time')

const icon = document.querySelector('.icon img')

const forecast = new Forecast()

// Add Details

const addDetails = (data) => {
    const { citydel, weather } = data;
    console.log(weather)
    console.log(details)
    details.innerHTML = `
     <h5 class="my-3">${citydel.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
            </div>
    `
    time.setAttribute('src', weather.IsDayTime ? 'img/day.svg' :
        'img/night.svg')

    icon.setAttribute('src', `img/icons/${weather.WeatherIcon}.svg`)
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

// const getDetails = async(city) => {
//     const citydel = await getCity(city)
//     const weather = await getWeather(citydel.Key)
//     return {
//         citydel,
//         weather
//     }
// }

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const text = form.city.value.trim()
    localStorage.setItem('cityName', text)
    form.reset()
    forecast.getDetails(text).then((data) => {
        addDetails(data)
    }).catch((err) => {
        console.log(err)
    })
})

if (localStorage.getItem("cityName")) {
    forecast.getDetails(localStorage.getItem("cityName")).then((data) => {
        addDetails(data)
    }).catch((err) => {
        console.log(err)
    })
}
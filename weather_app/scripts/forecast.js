// Same thing with objects and methods

class Forecast {
    constructor() {
        this.key = 'R6IuY0WlRe0yCeoDlla9MC9iKYAGqO70'
        this.Weather_url = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.city_url = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }

    async getDetails(city) {
        const citydel = await this.getCity(city)
        const weather = await this.getWeather(citydel.Key)
        return {
            citydel,
            weather
        }
    }
    async getWeather(code) {
        const q = `${code}?apikey=${this.key}`
        const response = await fetch(this.Weather_url + q)
        const data = await response.json()
        return data[0]
    }

    async getCity(city) {
        const q = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.city_url + q)
        const data = await response.json()
        return data[0]

    }

}





// const key = 'R6IuY0WlRe0yCeoDlla9MC9iKYAGqO70'


// get weather 

// const getWeather = async(code) => {
//     const url = 'http://dataservice.accuweather.com/currentconditions/v1/'
//     const q = `${code}?apikey=${key}`
//     const response = await fetch(url + q)
//     const data = await response.json()
//     return data[0]
// }

// get City 

// const getCity = async(city) => {
//     const url = 'http://dataservice.accuweather.com/locations/v1/cities/search'
//     const q = `?apikey=${key}&q=${city}`
//     const response = await fetch(url + q)
//     const data = await response.json()
//     return data[0]

// }

// getCity('hyderabad').then((data) => {
//     return getWeather(data.Key)
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })
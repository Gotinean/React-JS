import React from 'react';
import Info from './components/info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "285af7a64b60cc9f96514c1e274563ce";

class WeatherApp extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined

    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
            const data = await api_url.json();
            if (data.cod === 200) {
                console.log(data);

                const sunset = data.sys.sunset
                const dateSunset = new Date();
                dateSunset.setTime(sunset);
                const sunset_date = dateSunset.getHours() + ":" + dateSunset.getMinutes() + ":" + dateSunset.getSeconds();


                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    pressure: data.main.pressure,
                    sunset: sunset_date,
                    error: undefined

                });
            } else {
                this.setState({
                    temp: undefined,
                    city: undefined,
                    pressure: undefined,
                    sunset: undefined,
                    error: "Вы неверно ввели город, " + 
                    "проверьте правильность написания и попробуйте ещё раз"
                });

            }
        }
        else {
            this.setState({
                temp: undefined,
                city: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города"
            });
        }
    }


    render() {
        return (
            <div className="container">
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    pressure={this.state.pressure}
                    sunset={this.state.sunset}
                    error={this.state.error} />
            </div>
        )
    }
}

export default WeatherApp;
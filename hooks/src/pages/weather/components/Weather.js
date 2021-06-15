import React from 'react';

const Weather = props => (
    <div>
        {props.city &&
            <div className="grid-item3">
                <p>Местоположение: {props.city}</p>
                <p>Температура: {props.temp}</p>
                <p>Давление: {props.pressure}</p>
                <p>Закат: {props.sunset}</p>
            </div>
        }
        <p>{props.error}</p>
    </div>
);


export default Weather;
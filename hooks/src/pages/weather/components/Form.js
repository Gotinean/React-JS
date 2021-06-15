import React from 'react';

const Form = (props) => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Город" className="input-weather"/>
        <button className="button-weather">Получить погоду</button>
    </form>
)
export default Form;
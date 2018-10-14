import React from 'react'
import Titles from './Components/title.js'
import Form from './Components/form.js'
import Weather from './Components/weather.js'

const API_KEY = "3ca85ae0308543cc46edb921a29ecb85";

class App extends React.Component {
    // Async requests
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?=q=Manchester,uk&appid=${API_KEY}&units=metric`);
        // Converts to json format
        const data = await api_call.json();
        console.log(data);
    }

    render () {
        return (
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        )
    }
}

export default App;
import axios from 'axios';

const API_KEY = 'e521051793ac614dff2ec7fa72014f2e';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async(city, country) =>{
    try {
        let response =await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.messages);
        return error.response;
    }
}


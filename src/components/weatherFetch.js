import React, {useState, useEffect} from 'react';



function WeatherFetch () {
    function getTime(){
	return (new Date()).toLocaleTimeString()
}

    const key = 'dad91c191efce7e3f4cbe3a65906b446';
    const [feelsLike, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    // const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [iconID, setIconID] = useState('');
    useEffect (() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=winnipeg,ca&APPID=' +key+ '&units=metric')
        .then((res) => res.json())
        .then((data) => {
            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            // setDescription(data.weather[0].description);
            setMain(data.weather[0].main);
            setIconID(data.weather[0].icon);
        })
    }, []) 

    const time = getTime();
    return (
        <div className="weather" style={{width: '100vh', position: 'fixed', display: 'flex', alignItems:'flex-end', flexDirection: 'column'}}> 
        <h5>Winnipeg weather   ({time})</h5> 
        <p>{mainTemp} ℃ - Feels Like: {feelsLike} ℃</p>
        <p>{main}     <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} /></p>
        
        
        </div>
    )
}

export default WeatherFetch;
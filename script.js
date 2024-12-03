const getWeather = async (city_name) => {
    document.getElementById("cityName").innerHTML = city_name;

    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'aaf8c47202msh08023a4fda25d97p1ae68fjsnb3128f5597ef',
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };

    try { 
        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result);

        document.getElementById('coord').innerHTML = JSON.stringify(result.coord);
        document.getElementById('weather').innerHTML = JSON.stringify(result.weather);
        document.getElementById('base').innerHTML = result.base;
        document.getElementById('main').innerHTML = JSON.stringify(result.main);
        document.getElementById('visibility').innerHTML = result.visibility;

        // Format the wind data to display without brackets and quotes
        const windData = `Speed: ${result.wind.speed}, Degree: ${result.wind.deg}, Gust: ${result.wind.gust || "N/A"}`;
        document.getElementById('wind').innerHTML = windData;

        document.getElementById('clouds').innerHTML = JSON.stringify(result.clouds);
        document.getElementById('dt').innerHTML = result.dt;
        document.getElementById('sys').innerHTML = JSON.stringify(result.sys);
        document.getElementById('timezone').innerHTML = result.timezone;
        document.getElementById('id').innerHTML = result.id;
        document.getElementById('name').innerHTML = result.name;
        document.getElementById('cod').innerHTML = result.cod;

    } catch (error) {
        console.error(error);
    }
}

// Add event listener for the submit button
document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const city_name = document.getElementById("city_name").value; 
    getWeather(city_name);
});

// Show the weather section by default
getWeather("Shimla");

// Event listener for navigation links
document.getElementById("about-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("weather-section").style.display = "none";
    document.getElementById("about-section").style.display = "block";

    // Hide the weather heading when in About section
    document.getElementById("cityName").parentElement.style.display = "none";
});

document.getElementById("home-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("about-section").style.display = "none";
    document.getElementById("weather-section").style.display = "block";

    // Show the weather heading when back in Home section
    document.getElementById("cityName").parentElement.style.display = "block";
});

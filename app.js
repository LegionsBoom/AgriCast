async function getWeather() {
  const location = document.getElementById('location').value;
  const apiKey = 'YOUR_OPENWEATHER_API_KEY';
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
  const data = await res.json();

  document.getElementById('weather').innerHTML = `
    <h3>Weather in ${data.name}</h3>
    <p>${data.weather[0].description}, ${data.main.temp}°C</p>
  `;
}
// let cityInputs = []; // Array to store city inputs

// function displayChart() {
//   const cities = cityInputs.map(input => input.trim()).filter(input => input !== '');
//   if (cities.length === 0) {
//     displayErrorMessage("Please enter at least one valid city name.");
//     return;
//   }

//   hideErrorMessage();

//   const weatherDataPromises = cities.map(city => fetchWeather(city));
//   Promise.all(weatherDataPromises)
//     .then(weatherData => {
//       const chartData = {
//         labels: cities,
//         datasets: [{
//           label: 'Temperature (°C)',
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//           data: weatherData.map(data => Math.round(data.main.temp))
//         }]
//       };

//       const ctx = document.getElementById('weatherChart').getContext('2d');
//       new Chart(ctx, {
//         type: 'bar',
//         data: chartData,
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Error fetching weather data:', error);
//       displayErrorMessage('Error fetching weather data. Please try again.');
//     });
// }

// async function fetchWeather(city) {
//   const response = await fetch(weatherApiUrl + city + `&appid=${apiKey}`);
//   const weatherData = await response.json();
//   return weatherData;
// }

// searchbtn.addEventListener('click', () => {
//   const cityName = searchbox.value.trim();

//   if (!cityName) {
//     displayErrorMessage('Please enter a valid city name.');
//   } else {
//     hideErrorMessage();
//     cityInputs.push(cityName);
//     searchbox.value = ''; // Clear the input after adding the city
//   }
// });

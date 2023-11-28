// Function to fetch data from the API
function getGeoData() {
    // Coordinates for New York

    //  const address = "Chicago, IL, USA";
    const searchElement = document.getElementById(searchbar);
    // const searchValue = searchElement.value;


    const url=`https://geocode.maps.co/search?q=${searchElement}`;

    return fetch(url)
        .then(response => {
         
            return response.json();
        })
        .then(data => {
            const lat = data[0].lat;
            const lon = data[0].lon;

            webdata(lat, lon);

           
            return data.results;
        })
        .catch(error => {
         
            console.error('Error:', error); 
        });
}

function webdata(lat, lon){
    const todayurl = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=today`;
    const tomorrowurl = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=today`;

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const month = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
  
    const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;
    console.log(formattedDate);
  
    fetch(todayurl)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        // Update your dashboard with the sunrise/sunset data
        document.querySelector('#Today').innerHTML = formattedDate;
        document.querySelector('#tdsrtime').innerHTML = data.results.sunrise;
        document.querySelector('#tddawn').innerHTML = data.results.dawn;
        document.querySelector('#tdsstime').innerHTML = data.results.sunset;
        document.querySelector('#tddusk').innerHTML = data.results.dusk;
        document.querySelector('#tdsolarnoon').innerHTML = data.results.solar_noon;
        document.querySelector('#tddaylength').innerHTML = data.results.day_length;
        document.querySelector('#tdtimezone').innerHTML = data.results.timezone;

    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors and display a message to the user
        alert('Error fetching sunrise/sunset data. Please try again.');
    });

    fetch(tomorrowurl)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);

    })  
    .catch(error => {
        console.error('Error:', error);
        // Handle errors and display a message to the user
        alert('Error fetching sunrise/sunset data. Please try again.');
    });

}

// // Calling the getData function and handling the promise it returns
// getGeoData()
//     .then(results => {

//         for (const key in results) {
         
//             if (results.hasOwnProperty(key)) {
           
//                 console.log(`${key}: ${results[key]}`);
//             }
//         }
//     })
//     .catch(error => {
   
//         console.error("Error handling data", error);
//     });
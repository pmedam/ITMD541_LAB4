// Function to fetch data from the API
function getGeoData() {
    // Coordinates for New York

    const address = "Charlotte";

    const url=`https://geocode.maps.co/search?q=${address}`;

    return fetch(url)
        .then(response => {
         
            return response.json();
        })
        .then(data => {
         
            console.log(data);
           
            return data.results;
        })
        .catch(error => {
         
            console.error('Error:', error); 
        });
}

// Calling the getData function and handling the promise it returns
getGeoData()
    .then(results => {

        for (const key in results) {
         
            if (results.hasOwnProperty(key)) {
           
                console.log(`${key}: ${results[key]}`);
            }
        }
    })
    .catch(error => {
   
        console.error("Error handling data", error);
    });
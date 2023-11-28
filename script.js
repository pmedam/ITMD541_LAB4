async function getLatandLong() {
    // const searchElement = document.getElementById(search - bar);
    const searchElement = "3024 South Poplar Avenue, Chicago, United states of America";
    const searchValue = searchElement.value;
    const geoURL = `https://geocode.maps.co/search?q=${searchValue}`;

    console.log(geoURL);

    fetch(geoURL)
        .then(response => response.json())

        .then(data => { 
            console.log(data); 
            return data.results
        })

        .catch(error=>{
            console.error('Error:', error);
        });


    // const response = await fetch(geoURL);
    // var data = await response.json();

    console.log(data);
}

getLatandLong()
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

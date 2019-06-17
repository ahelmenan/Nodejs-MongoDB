
const geocode = require('./utils/GeoCode')
const forcast = require('./utils/forcast')
// const url = 'https://api.darksky.net/forecast/6423b2093712ff3250a7473c482779dc/37.8267,-122.4233?units=si';

// request({ url: url, json: true}, (error, response) => {

//         console.log(`${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out\nThere is a ${response.body.currently.precipProbability}% chance to rain`);
// })

// request({ url : url2, json: true}, (error, response) => {
//         if (error) 
//                 console.log(`unable to access geoCode API`);
//         else if (response.body.features.length === 0)
//                 console.log(`can't find location`);
//         else {     
//         let longitude = response.body.features[0].center[0];
//         let latitude = response.body.features[0].center[1];
//         console.log( `longtitude : ${longitude}\nlatitude   : ${latitude}`);
//         }
// })
// encodeURICoomponent(var) ---- ? becomes %3F 


const address = process.argv[2];

if(!address)
        console.log('invalid location');
else {

geocode(address, (error, {latitude, lngitude, location }) => {
        if (error)
               return console.log(error);


        forcast(latitude, longitude, (error, forcastData) => {
                if (error)
                    return console.log(error);
                console.log(location);
                console.log(forcastData); 
                })

        })
}
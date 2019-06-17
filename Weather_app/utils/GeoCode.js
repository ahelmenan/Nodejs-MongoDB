const request = require('request');

const geocode = (address,
        ) => {
    const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWgtZWxtZW5hbiIsImEiOiJjanZzN255amEwZGV1NDNta2gyOXN1azMyIn0.PbeyXniK4YMSOVvXmwmGNQ`;
    
    request({ url: url2, json: true}, (error, response) => {
        const {body} = response;
        const {features} = body;
        const {center, place_name} = features[0]
        const {[0]:long, [1]:lat} = center

        const longitude = center[0]; 
        const latitude = center[1]; 
        const location = place_name; 
            if(error)
                    callback('unable to access GeoCode API', undefined);
            else if(response.body.features.length === 0)
                    callback('unable to find location', undefined);
            else
                    callback(undefined, {
                            longitude,
                            latitude,
                            location,
                    })
    })


}

module.exports = geocode;

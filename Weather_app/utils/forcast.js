const request = require('request');

const forcast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/6423b2093712ff3250a7473c482779dc/'+encodeURIComponent(lat)+','+encodeURIComponent(long)+'?units=si';
    request({ url: url, json: true}, (error, response) => {
        const {body} = response;
        const {currently} = body;
        const {temperature, precipProbability} = currently;
        if (error)
                callback('unable to access the Weather API', undefined);
        else if (response.body.error)
                callback('there is something wrong', undefined);
        else
            
                callback(undefined, 
                  `it's  ${temperature}° it's ${precipProbability}% raining`);
            })
};

module.exports = forcast;
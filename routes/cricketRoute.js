const express = require('express');
const app = express();
const cricketRoute = express.Router();
var request = require('request');


var url = 'https://www.cricbuzz.com/live-cricket-scores/30524/53rd-match-indian-premier-league-2020';

let testResponse = ""

cricketRoute.route('/getScore').get((req, res) => {
    console.log("----->here");
    request.get({
        url : 'https://catfact.ninja/fact',
        time : true
      },function(err, response){
        // console.log('Request time in ms', response.body.fact.toString());
        const res = JSON.parse(response.body)
        console.log('Request time in ms', res.fact);
        this.testResponse = res.fact
      });
    // try {
    //     const response = fetch('https://catfact.ninja/fact');
    //     const data =  response.json();
    //     console.log("----->",data);
    // } catch (exception) {
    //     console.log('Connection issue');
    // }
  })

  

  module.exports = cricketRoute;
//   module.exports = testResponse;
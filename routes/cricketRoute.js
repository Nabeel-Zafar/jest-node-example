const express = require('express');
const app = express();
const cricketRoute = express.Router();
var request = require('request');

let testResponse = ""

cricketRoute.route('/getScore').get((req, res) => {
    request.get({
        url : 'https://catfact.ninja/fact',
        time : true
      },function(err, response){
        const res = JSON.parse(response.body)
        console.log('Request time in ms', res.fact);
        this.testResponse = res.fact
      });
  })

  

  module.exports = cricketRoute;
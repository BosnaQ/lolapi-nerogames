const express = require('express');
const lodash = require('lodash');
const fetch = require('node-fetch');

const config = require('../config.js');
const regions = require('../regions.js');

const router = express.Router();

router.get('/:region/champion-masteries/by-summoner/:summonerId', (req, res) => {

    fetch('https://'+ req.params.region +'.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/'+ req.params.summonerId + '?api_key='+ config.apikey + '')
    .then(resp => resp.json())
    .then(body => res.send(body));

});

router.get('/:region/champion-masteries/by-summoner/:summonerId/by-champion/:championId', (req, res) => {

    fetch('https://'+ req.params.region +'.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/'+ req.params.summonerId + '/by-champion/'+ req.params.championId + '?api_key='+ config.apikey + '')
    .then(resp => resp.json())
    .then(body => res.send(body));

});

router.get('/:region/scores/by-summoner/:summonerId', (req, res) => {

    fetch('https://'+ req.params.region +'.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/'+ req.params.summonerId + '?api_key='+ config.apikey + '')
    .then(resp => resp.json())
    .then(body => res.send(body));

});

module.exports = router;
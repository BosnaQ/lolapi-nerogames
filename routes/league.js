const express = require('express');
const lodash = require('lodash');
const fetch = require('node-fetch');

const config = require('../config.js');
const regions = require('../regions.js');

const router = express.Router();

router.get('/:region/challengerleagues/by-queue/:queue', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/' + req.params.queue + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/leagues/:leagueId', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/league/v3/leagues/' + req.params.leagueId + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/masterleagues/by-queue/:queue', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/league/v3/masterleagues/by-queue/' + req.params.queue + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/positions/by-summoner/:summonerId', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/league/v3/by-summoner/' + req.params.summonerId + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

module.exports = router;
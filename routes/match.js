const express = require('express');
const lodash = require('lodash');
const fetch = require('node-fetch');

const config = require('../config.js');
const regions = require('../regions.js');

const router = express.Router();

router.get('/:region/matches/:matchId', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/match/v3/matches/' + req.params.matchId + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/matchlists/by-account/:accountId', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/match/v3/matchlists/by-account/'+ req.params.accountId + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/matchlists/by-account/:accountId/recent', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/match/v3/matchlists/by-account/' + req.params.accountId + '/recent/?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/timelines/by-match/:matchId', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/match/v3/timelines/by-match/' + req.params.matchId + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/matches/by-tournament-code/:tournamentCode/ids', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/match/v3/matches/by-tournament-code/' + req.params.tournamentCode + '/ids?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/matches/:matchId/by-tournament-code/:tournamentCode', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/match/v3/matches/' + req.params.matchId + '/by-tournament-code/'+ req.params.tournamentCode + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

module.exports = router;
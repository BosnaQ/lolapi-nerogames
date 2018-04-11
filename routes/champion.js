const express = require('express');
const lodash = require('lodash');
const fetch = require('node-fetch');

const config = require('../config.js');
const regions = require('../regions.js');

const router = express.Router();

router.get('/:region/champions', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/platform/v3/champions' + req.params.queue + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/champions/:id', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/league/v3/champions/' + req.params.id + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

module.exports = router;
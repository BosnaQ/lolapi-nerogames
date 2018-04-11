const express = require('express');
const lodash = require('lodash');
const fetch = require('node-fetch');

const config = require('../config.js');
const regions = require('../regions.js');

const router = express.Router();

router.get('/:region/champions', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/champions?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/champions/:id', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/champions/'+ req.params.id + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/items', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/items?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/items/:id', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/items/'+ req.params.id +'?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/language-strings', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/language-strings?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/languages', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/languages?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/maps', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/maps?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/masteries', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/masteries?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/masteries/:id', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/masteries/'+ req.params.id + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/profile-icons', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/profile-icons?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/realms', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/realms?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/reforged-rune-paths', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/reforged-rune-paths?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/reforged-rune-paths/:id', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/reforged-rune-paths/'+ req.params.id +'?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/reforged-runes', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/reforged-runes?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/reforged-runes/:id', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/'+ req.params.id + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/runes', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/runes?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/runes/:id', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/runes/'+ req.params.id +'?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/summoner-spells', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/summoner-spells?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/summoner-spells/:id', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/summoner-spells/'+ req.params.id + '?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/tarball-links', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/tarball-links?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

router.get('/:region/versions', (req, res) => {

    if(lodash.find(regions, {name: req.params.region})){
    
        fetch('https://'+ req.params.region +'.api.riotgames.com/lol/static-data/v3/versions?api_key='+ config.apikey + '')
        .then(resp => resp.json())
        .then(body => res.send(body));

    }else{

        res.send('Region oder Username existiert nicht');

    }

});

module.exports = router;
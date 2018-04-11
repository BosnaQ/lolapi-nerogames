//Dependencies
const express = require('express');

//Routes
const champion_mastery = require('./routes/champion-mastery.js');
const champion = require('./routes/champion.js');
const league = require('./routes/league.js');
const match = require('./routes/match.js');
const summoner = require('./routes/summoner.js');
const static_data = require('./routes/static-data.js');
const status = require('./routes/status.js');
const third_party = require('./routes/third-party.js');

const app = express();

app.use('/lol/champion-mastery/v3/', champion_mastery);
app.use('/lol/platform/v3/', champion);
app.use('/lol/league/v3/', league);
app.use('/lol/static-data/v3/', static_data);
app.use('/lol/status/v3/', status);
app.use('/lol/match/v3/', match);
app.use('/lol/summoner/v3/', summoner);
app.use('/lol/platform/v3/', third_party);

app.listen(3000, () => {

    console.log('Der Server läuft auf Port 3000');

});
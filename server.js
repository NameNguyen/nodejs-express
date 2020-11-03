const express = require('express');
const app = express();
const people = require('./people.json');
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
    res.render('index', {
      title: 'Homepage',
      people: people.profiles
    });
});

app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${person.firstname} ${person.lastname}`,
      person
    });
});

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

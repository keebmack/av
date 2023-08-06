const express = require('express');
const app = express();

app.use(express.json());

//Array for Steelers database
const steelers = [{
    id: 1,
    steeler: 'TJ Watt'
},
{
    id: 2,
    steeler: 'Minkah Fitzpatrick'
},
{
    id: 3,
    steeler: 'Cameron Heyward'
},
{
    id: 4,
    steeler: 'Alex Highsmith'
},
{
    id: 5,
    steeler: 'Patrick Peterson'
},
{
    id: 6,
    steeler: 'Joey Porter Jr.'
},
{
    id: 7,
    steeler: 'Kenny Pickett'
},
{
    id: 8,
    steeler: 'Najee Harris'
},
{
    id: 9,
    steeler: 'George Pickens'
},
{
    id: 10,
    steeler: 'Pat Friermuth'
}];

//get all Steelers
app.get('/api/steelers', (req, res)=> {
    res.send(steelers);
});

//post
app.post('/api/steelers', (req, res)=> {
    const mysteelers = {
        id: steelers.length + 1,
        steeler: req.body.steeler
    }

    steelers.push(mysteelers);
    res.send(mysteelers);
})

//put
app.put('/api/steelers/:id', (req, res)=> {
    const mysteelers = steelers.find(t => t.id === parseInt(req.params.id));
    if (!mysteelers) return res.status(404).send('The Steeler with the ID was not found')

    mysteelers.steeler = req.body.steeler;
    res.send(mysteelers);
});

//delete
app.delete('/api/steelers/:id', (req, res)=> {
    const mysteelers = steelers.find(t => t.id === parseInt(req.params.id));
    if (!mysteelers) return res.status(404).send('The Steeler with the ID was not found')

    const index = steelers.indexOf(mysteelers);
    steelers.splice(index, 1);
    res.send(mysteelers);
});

//configuration
const port = process.env.port || 3000;
app.listen(port,()=> console.log(`Listening on port ${port}`));
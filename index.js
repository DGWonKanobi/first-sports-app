const express = require('express');
const app = express();
const {} = require('./statcalculator')
const fs = require('fs');
// const {addStats} = require('./calculator');
// testing core module with (fs)

//First Route with an instance of teh constant app w/ attached function : get 
app.get('/', (req, res) =>{});

app.get('/addStats/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); //make number?
    let num2 = Number(req.params.num2);
    let answer = addStats(num1, num2);
    return res.json({ answer: answer });

});

app.get('/read', (req, res) => {
    // grab the query string, 
    // pass the querystring into the fs funtcion 
    // return the data that comes from the text file
    let element = req.query.something; //the answer
    
    fs.readFile(`${element}.txt`, 'utf8',  (error, data) =>{
        if(error) {
            return res.json({ message: 'No Player in this Archive matches your nickname'})
        } else {
            return res.json({ message: data});
        }
 });
});




//Set up a PORT number, and listen for server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server is running from PORT', PORT)
});

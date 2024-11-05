const express = require("express");
const app = express();

const users = [
    {"id": 1, 
    "name": "Filan Fisteku",
    "email": "filanfisteku@gmail.com"},
    
    {"id": 2, 
    "name": "Filan Fisteku",
    "email": "filanfisteku@gmail.com"}
    ]

app.get('/user', (req,res) =>{
    res.json(users);
});

app.listen(3000, () => {
    console.log('Serveri ne local host: 3000');
});

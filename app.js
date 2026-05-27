const express = require('express')

const app = express()

app.get('/',(req,res) => res.send('hello from Jenkins CI CD Pipeline Version 1.0'))

app.listen(3000, () => console.log('App running'))  

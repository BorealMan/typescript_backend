import express from 'express';
import { Configuration } from './config/config' 

const app = express()

// Defining Routes
app.get('/', (req, res) => {
    res.send("Hey there")
});

app.get('/add', (req, res) => {
    res.send("Testing")
});


// Running Server
const port = Configuration.express_config.port
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
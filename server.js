const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
router(app)

mongoose.connect(
    'mongodb+srv://test1234:nodejs21@cluster0.2zbcu.mongodb.net/samvelTumoDb?retryWrites=true&w=majority',
    err=>{
        if (err)
            throw err;
        console.log("Connected DB")
        const server = http.createServer(app);
        server.listen(2022,(req,res)=>{
            console.log("localhost:2022");
        });
    })
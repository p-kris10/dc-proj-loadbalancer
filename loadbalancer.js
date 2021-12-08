var LBA= require('load-balancer-algorithm')

const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const servers = ["3000","3006"]
const r = new LBA.RoundRobin(servers);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.get("/", (req, res)=>{
    var rAddress = r.pick();
    console.log(rAddress.host)
    return res.redirect(`http://localhost:${rAddress.host}`)
})

app.listen(8000, ()=>{
    console.log("http://localhost:8000");
})
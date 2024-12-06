import express from "express";
import {randomSuperhero} from 'superheroes';
import env from "dotenv";


const app=express();
env.config();

app.get("/", (req, res)=>{
    var me=randomSuperhero();
    res.send(`im ${me} gay`);
})

app.listen(process.env.PORT);
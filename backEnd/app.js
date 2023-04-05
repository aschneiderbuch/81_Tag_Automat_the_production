// ! import
import express from 'express';        //     "dev2": "nodemon app.js --ignore db_Daten.json"
import './config.js';                // dotenv da rein
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import { fileTypeFromBuffer } from 'file-type';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import express_validator from 'express-validator';
import nodemailer from 'nodemailer';
                // in db_Daten.json     leeres [] rein

// ! import Daten
import { loadFile, saveFile     } from './funktionen.js'  // *  Funktionen für fetches 



// ! Variablen
const PORT = process.env.PORT || 9998                    // * Port für Backend    
const app = express()                               // *  Express-App erstellen für Server
const PORT_FRONTEND_REACT = process.env.PORT_FRONTEND_REACT || 3000         // *  Port für Frontend

const DB_PATH = process.env.DB_PATH   // *  || './db_Daten.json'

// multer für Bilder und forms

// nodemailer für Email versand

// ! Middleware
app.use(morgan('dev'))                              // * morgan für Logging
app.use(cors( { origin: `http://localhost:${PORT_FRONTEND_REACT}`} ))       // * cors Sicherheit für Zugriff auf Frontend
app.use(express.json())                            // *  Express-App kann JSON lesen     evtl. noch multer
       // * in FrontEnd        content-type: application/json


// static Routes        zum wegspeichern von Bilder die über multer hochgeladen werden


// ! GET fetch      money
// Geld => db => Kontostand
// Limit für Kontostand ? 
app.get('/api/v1/money' , (req, res ) => {


})




// ! GET fetch      workload 
// Anzahl Human input als Auslastung => db => Auslastung
app.get('/api/v1/workload' , (req, res ) => {


})


// ! POST fetch       sell
// Verkauf  von allem setzt db => Kontostand = 0
// Limit für Kontostand ? 
app.post('/api/v1/sell' , (req, res ) => {



})




// ! POST fetch       human     
// Human input => db => Kontostand + Auslastung
//   Input     kann    1    5    oder   10   sein  prüfen 
app.post('/api/v1/human', (req, res) => {


})





// ! Server   starten     PORT
app.listen(PORT, () => {
    console.log(`Server läuft auf auf Port: ${PORT} `)
})
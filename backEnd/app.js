// ! import
import express from 'express';
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




// ! Variablen
const PORT = 


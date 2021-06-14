import express from 'express'
import { BrewerieController } from '../brewerie/controllers/BrewerieController';

const v1Router = express.Router();

v1Router.use('/breweries',(req, res) => new BrewerieController().execute(req, res) );


export { v1Router }
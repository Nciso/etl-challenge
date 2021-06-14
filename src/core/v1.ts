import express from 'express'
// import { breweriesRouter } from '../../../modules/users/infra/http/routes';

const v1Router = express.Router();

// v1Router.use('/breweries', breweriesRouter);

v1Router.use('/', (req, res) => res.status(200).json('hello'))

export { v1Router }
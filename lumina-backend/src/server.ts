import express, { json, Request, Response } from 'express';
import morgan from 'morgan';
import config from './config.json';
import cors from 'cors';
import errorHandler from 'middleware-http-errors';

// import getData and setData for data persistence
import { getData, setData } from './dataStore';
import { authLogin, authSignUp } from './auth';

// write a const fs for data persistence
const fs = require('fs');

// Set up web app
const app = express();
// Use middleware that allows us to access the JSON body of requests
app.use(json());
// Use middleware that allows for access from other domains
app.use(cors());
// for logging errors (print to terminal)
app.use(morgan('dev'));

const PORT: number = parseInt(process.env.PORT || config.port);
const HOST: string = process.env.IP || 'localhost';

// authSignup
app.post('/auth/signup', (req: Request, res: Response) => {
  const { email, nameFirst, nameLast, password, dob, gender, medicalInfo } = req.body;
  return res.json(authSignUp(email, nameFirst, nameLast, password, dob, gender, medicalInfo));
});

// authLogin
app.post('/auth/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  return res.json(authLogin(username, password));
});


// -----

// start server
const server = app.listen(PORT, HOST, () => {
  // check if the file exists
  if (fs.existsSync('./export.json')) {
    // as export.jsone exists, read the dataStore from it
    const dsstr = fs.readFileSync('export.json');
    // set data in dataStore.ts to the dataStore from export.json using setData
    const exportds = JSON.parse(String(dsstr));
    setData(exportds);
  } else {
    // get the empty dataStore using getData()
    const dataStore = getData();
    // append the json object of dataStore to the new export.json file
    const jsonstr = JSON.stringify(dataStore);
    fs.appendFileSync('export.json', jsonstr);
  }

  // DO NOT CHANGE THIS LINE
  console.log(`⚡️ Server started on port ${PORT} at ${HOST}`);
});

// For coverage, handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});

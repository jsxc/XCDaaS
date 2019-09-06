import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api';
import constants from './constants';

const PORT = process.env.PORT || constants.server.port;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/', api());

try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
} catch (error) {
  console.log('Failed to start server:', error);
}

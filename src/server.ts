import express from 'express';

import logRequest from './utils/logRequest';

const app = express();

app.use(express.json());
app.use(logRequest);

app.get('/', (request, response) => response.send('hello worldsssss'));

/* eslint-disable no-console */
app.listen(3333, () => console.log('🚀 Server is running!'));

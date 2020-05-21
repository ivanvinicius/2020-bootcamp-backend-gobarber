import express from 'express';

import logRequest from './utils/logRequest';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(logRequest);
app.use(routes);

/* eslint-disable no-console */
app.listen(3333, () => console.log('🚀 Server is running on port:3333!'));

import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import routes from './routes';
import '../config';
import * as responseTime from 'response-time';

const app: any = express();
app.use(cors());
app.use(bodyparser.json());
app.use(responseTime());

app.use('/api', routes.api);
app.use('/github', routes.github);

export { app };
import * as http from 'http';
import { app } from './src/app';

const server = http.createServer(app);
const PORT: any = process.env.PORT || 9000;
server.listen(PORT);
server.on('listening', () => console.log('Magic happens on port ', PORT))
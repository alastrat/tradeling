import * as express from 'express';

const app: any = express();

app.post('/auth', (req: any, res: any) => {
    console.log('--llegó--');
    // redis_client.setex(req.searchText, 3600, JSON.stringify(starShipInfoData));

});

export default app;
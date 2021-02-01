import * as express from 'express';
import Github from '../lib/github';
import Redis from '../lib/redis';
import helpers from '../helpers';

const app: any = express();

app.post('/search', async (req: any, res: any) => {
    try {
        const redis = await Redis.get(req.query.searchTerm);

        const results = redis.isCatched ?
            redis.data // The searchTerm is catched
            : await Github.search(req.query); // The searchTerm isn't catched.

        return res.status(200).json(helpers.successResponse(results, { isCatched: redis.isCatched }))
    } catch (error) {
        return res.status(400).json(helpers.errorResponse(error, req.query));
    }
});

app.post('/clear-cache', (req: any, res: any) => {
    console.log('--llegó--');

});

export default app;
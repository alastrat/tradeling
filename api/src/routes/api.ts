import * as express from 'express';
import Github from '../lib/github';
import Redis from '../lib/redis';
import helpers from '../helpers';

const app: any = express();

app.post('/search', async (req: any, res: any) => {
    try {
        let results;
        const key = req.query.type + ':' + req.query.searchTerm;
        const redis: any = await Redis.get(key);

        if (redis.isCatched) {
            results = redis.data; // The searchTerm is already catched
        }

        results = (await Github.search(req.query)).data; // The searchTerm hasn't been catched.
        Redis.catch(key, results)

        return res.status(200).json(helpers.successResponse(results, { isCatched: redis.isCatched, records: results.length }));
    } catch (error) {
        return res.status(400).json(helpers.errorResponse(error, req.query));
    }
});

app.post('/clear-cache', (req: any, res: any) => {
    try {
        Redis.flush();
        return res.status(200).json({ message: 'Cached cleaned.' })
    } catch (error) {
        return res.status(400).json(helpers.errorResponse(error));
    }

});

export default app;
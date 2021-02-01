import * as redis from 'redis';

const CATCHING_TIME = 3600 * 2; // 2 hrs

class Redis {
    client: any
    constructor() {
        this.client = redis.createClient(6379)
    }

    catch(key: string, value: any) {
        this.client.setex(key, CATCHING_TIME, JSON.stringify(value));
    };

    async get(searchTerm: string) {
        return await this.client.get(searchTerm)
    }
}

export default new Redis();
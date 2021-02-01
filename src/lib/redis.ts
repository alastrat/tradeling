import * as redis from 'redis';

const CATCHING_TIME = 3600 * 2; // 2 hrs
const REDIS_PORT = 6379; // default Redis Port

class Redis {
	client: any
	constructor() {
		this.client = redis.createClient(REDIS_PORT);
	}

	catch(key: string, value: any) {
		this.client.setex(key, CATCHING_TIME, JSON.stringify(value));
	};

	async get(searchTerm: string) {
		return new Promise(async (rs, rj) => {
			await this.client.get(searchTerm, (err: any, res: any) => {
				if (err) return rj(err);

				const resObj = {
					isCatched: res ? true : false,
					data: JSON.parse(res)
				}

				return rs(resObj)
			})
		})
	}

	flush () {
		this.client.flushdb();
	}
}

export default new Redis();
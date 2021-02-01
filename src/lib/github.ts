import { Octokit } from "@octokit/core";

interface searchStuct {
	searchTerm: string;
	type: string;
}
const client = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN })
// client.request()
class Github {
	client: any
	constructor() {
		this.client = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
	}

	async search(payload: searchStuct) {
		if (!Object.keys(mapSearchTypes).includes(payload.type)) throw 'INVALID_SEARCH_TYPE';
		return await this.client.request(mapSearchTypes[payload.type]);
	}

}

export default new Github();

const mapSearchTypes: any = {
	users: 'GET /users',
	repositories: 'GET /repositories',
	issues: 'GET /issues',

}
import { Octokit } from "@octokit/rest";
interface searchStuct {
	searchTerm: string;
	type: string;
	searchProps?: any
}
class Github {
	client: any
	constructor() {
		this.client = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
	}

	async search(payload: searchStuct) {
		if (!Object.keys(dispatchers).includes(payload.type)) throw 'INVALID_SEARCH_TYPE';
		return await dispatchers[payload.type](this.client, payload.searchTerm);
	}
}

export default new Github();

const dispatchers: any = {
	users: async (fn: any, searchTerm: any) => await fn.search.users({ q: `q=${searchTerm}&sort=created&order=asc` }),
	repositories: async (fn: any, searchTerm: any) => await fn.search.repos({ q: `q=${searchTerm}+language:any&sort=stars&order=desc` }),
	issues: async (fn: any, searchTerm: any) => await fn.search.issuesAndPullRequests({ q: `q=${searchTerm}&sort=created&order=asc` }),
}
export const apiFetch = async ( url: string, method = 'GET', params: any ) => {
	try {
		const endpoint = url;
		const dataResult = await fetch(endpoint, {
			headers: {
				"Accept": 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			method,
			body: method === 'GET' ? undefined : JSON.stringify(params)
		});

		if (!dataResult.ok) {
			throw await dataResult.json();
		}

		const dataJson = await dataResult.json();
		if (!!dataJson.error) {
			throw dataJson.error;
		}
		return dataJson;
	} catch (error) {
		console.log('Error-API', { error });
		throw error;
	}
};

const API_URL = 'http://localhost:9000/api'

export const searchRepositories = async (data: any) => {
	try {
		const dataResult = await fetch(`${API_URL}/search?searchTerm=${data.value}&type=${data.type}`, {
			method: 'POST',
		});
		if(!dataResult.ok) {
			throw await dataResult.json();
		}
		const dataJson =  await dataResult.json();
		if (!!dataJson.error) {
			throw dataJson.error;
		}
		return dataJson
	} catch(error) {
		throw error;
	}
}
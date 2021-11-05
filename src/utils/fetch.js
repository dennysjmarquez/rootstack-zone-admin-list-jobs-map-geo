import { getAuthHeader, logout } from '../store/actions/sessionActions';
import { fetchEnd, fetchStart } from '../store/actions/pageLoadingActions';
import { getCredentials } from './credentials';

let fetchId = 0;
const URL_BASE = process.env.REACT_APP_URL_BASE;

const getFetchOptions = async (method, body, isAnonymous = false) => {
	const options = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
	};
	if (body) {
		options.body = JSON.stringify(body);
	}

	if (!isAnonymous) {
		const auth = await getAuthHeader();
		if (auth) {
			options.headers.Authorization = auth;
		}
	}
	return options;
};

const fetchHandler = async (url, method, body, dispatcher, isAnonymous) => {
	if (!isAnonymous && !getCredentials() && dispatcher) {
		await logout(dispatcher);
	}

	let fetchAction;
	try {
		let fullUrl = URL_BASE + url;
		if (dispatcher) {
			fetchAction = fetchStart(fetchId++);
			dispatcher(fetchAction);
		}

		fullUrl = fullUrl.replace(/\?$/, '');

		const fechtOptions = await getFetchOptions(method, body, isAnonymous, dispatcher);
		const resp = await fetch(fullUrl, fechtOptions);

		if (!resp.ok) {
			const text = await resp.text();
			const error = {
				status: resp.status,
				code: resp.status,
				text: text || 'Error de comunicación con el servidor',
			};
			throw error;
		}

		return await resp.json();
	} catch (err) {
		if ([401, 404].includes(err.status) && dispatcher) {
			logout(dispatcher);
		}
		throw err;
	} finally {
		if (fetchAction && dispatcher) {
			dispatcher(fetchEnd(fetchAction.payload.id));
		}
	}
};

export const get = (url, dispatcher, isAnonymous = false) => fetchHandler(url, 'GET', null, dispatcher, isAnonymous);
export const post = (url, body, dispatcher, isAnonymous = false) => fetchHandler(url, 'POST', body, dispatcher, isAnonymous);

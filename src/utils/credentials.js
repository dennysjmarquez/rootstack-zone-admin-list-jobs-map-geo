const CREDENTIALS_KEY = 'bearer';

const enc = (obj) => {
	try {
		const json = JSON.stringify(obj);
		const b64 = window.btoa(json);
		return b64
			.split('')
			.map((c) => {
				if (/[a-z]/.test(c)) {
					return c.toUpperCase();
				}
				if (/[A-Z]/.test(c)) {
					return c.toLowerCase();
				}
				if (c === '9') {
					return '0';
				}
				if (/\d/.test(c)) {
					return parseInt(c) + 1;
				}
				return c;
			})
			.join('');
	} catch {
		return null;
	}
};

const dec = (msg) => {
	try {
		const b64 = msg
			.split('')
			.map((c) => {
				if (/[a-z]/.test(c)) {
					return c.toUpperCase();
				}
				if (/[A-Z]/.test(c)) {
					return c.toLowerCase();
				}
				if (c === '0') {
					return '9';
				}
				if (/\d/.test(c)) {
					return parseInt(c) - 1;
				}
				return c;
			})
			.join('');
		const json = window.atob(b64);
		return JSON.parse(json);
	} catch {
		return null;
	}
};

let credentialsCache;
export const getCredentials = () => {
	if (credentialsCache && localStorage.getItem(CREDENTIALS_KEY) !== null) {
		return credentialsCache;
	}
	const lStoredCred = localStorage.getItem(CREDENTIALS_KEY);
	if (lStoredCred) {
		credentialsCache = dec(lStoredCred);
		return credentialsCache;
	}
	return null;
};

export const setCredentials = (credentials) => {
	credentialsCache = credentials;
	localStorage.setItem(CREDENTIALS_KEY, enc(credentials));
};

export const clearCredentials = () => {
	credentialsCache = null;
	localStorage.removeItem(CREDENTIALS_KEY);
};

export const isCredentialsExpired = (credentials) => {
	return credentials.expire < Math.floor(Date.now() / 1000);
};

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatAndSaveCredentials = (credentialsData) => {
	const credentails = {
		access_token: credentialsData.access_token,
		refresh_token: credentialsData.access_token,
		token_type: credentialsData.token_type,
	};
	credentails.expire = (credentialsData.expires_in ?? credentialsData.expiration_time) + Math.floor(Date.now() / 1000);
	setCredentials(credentails);
	return credentails;
};

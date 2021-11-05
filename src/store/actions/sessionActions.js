import {get, post} from '../../utils/fetch';
import {
  capitalizeFirstLetter,
  clearCredentials,
  formatAndSaveCredentials,
  getCredentials,
  isCredentialsExpired,
} from '../../utils/credentials';

export const UPDATE_SESSION_STATE = 'UPDATE_SESSION_STATE';
export const UPDATE_PROFILE_STATE = 'UPDATE_PROFILE_STATE';

export const SESSION_STATE = {
  LogedOut: 0,
  LogedIn: 1,
};

export const updateSessionState = (newState) => ({
  type: UPDATE_SESSION_STATE,
  payload: {state: newState},
});

export const getAuthMe = async (dispatcher) => {
  const response = await get('api/auth/me', dispatcher);
  const {name, email} = response;
  const profile = {name, email}

  dispatcher({type: UPDATE_PROFILE_STATE, payload: {profile}});

}

export const login = async (body, dispatcher) => {
  try {
    const response = await post('api/auth/login', body, dispatcher, true);
    formatAndSaveCredentials(response);

    dispatcher(updateSessionState(SESSION_STATE.LogedIn));
    return true;
  } catch (e) {
    dispatcher(updateSessionState(SESSION_STATE.LogedOut));
  }

  return false;
};

export const logout = async (dispatcher) => {
  clearCredentials();
  dispatcher(updateSessionState(SESSION_STATE.LogedOut));
};

export const testCredentials = async (dispatcher) => {
  const cred = getCredentials();

  if (!cred || isCredentialsExpired(cred)) {
    return logout(dispatcher);
  } else {
    dispatcher(updateSessionState(SESSION_STATE.LogedIn));
  }
};

export const getAuthHeader = async () => {
  const cred = getCredentials();

  if (!cred || isCredentialsExpired(cred)) return null;

  return `${capitalizeFirstLetter(cred.token_type)} ${cred.access_token}`;
};


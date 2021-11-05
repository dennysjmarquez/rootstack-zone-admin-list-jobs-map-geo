export const FETCH_START = 'FETCH_START';
export const FETCH_END = 'FETCH_END';

export const fetchStart = (fetchId) => ({ type: FETCH_START, payload: { id: fetchId } });

export const fetchEnd = (id) => ({ type: FETCH_END, payload: { id } });

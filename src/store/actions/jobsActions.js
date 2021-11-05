import { get } from '../../utils/fetch';

export const JOBS_DATA_READY = 'JOBS_DATA_READY';
export const JOBS_UPDATE_DATA = 'JOBS_UPDATE_DATA';
export const JOBS_CLEAR_DATA = 'JOBS_CLEAR_DATA';

export const getJobs =
	(page, loader = true) =>
	async (dispatcher) => {
		dispatcher({ type: JOBS_CLEAR_DATA });
		dispatcher({ type: JOBS_DATA_READY, payload: { loading: true } });

		try {
			const response = await get(`api/jobs?page=${page}`, loader ? dispatcher : null);
			const { current_page, next_page_url, prev_page_url, per_page, total, to, data } = response;
			const newData = {
				data,
				currentPage: current_page,
				nextPageUrl: next_page_url,
				prevPageUrl: prev_page_url,
				perPage: per_page,
				total,
				to,
			};
			dispatcher({ type: JOBS_UPDATE_DATA, payload: { data: newData } });
		} finally {
			dispatcher({ type: JOBS_DATA_READY, payload: { loading: false } });
		}
	};

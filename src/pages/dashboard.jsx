import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardTemplate from '../components/templates/DashboardTemplate';
import { getAuthMe } from '../store/actions/sessionActions';
import JobsTableAndMap from '../components/common/JobsTableAndMap';
import { getJobs } from '../store/actions/jobsActions';

const mapDispatchToProps = (dispatcher) => ({
	getAuthMe: () => dispatcher(getAuthMe),
	getJobs: (page) => dispatcher(getJobs(page)),
});
const mapStateToProps = ({ session, jobs }) => ({
	profile: session.profile,
	jobs,
});

const Dashboard = function Dashboard({ profile, getJobs, getAuthMe, jobs }) {
	useEffect(() => {
		getAuthMe();
		getJobs(0);
	}, []);

	return (
		<>
			<DashboardTemplate headerTitle="Dashboard" headerSubtitle={`${profile.name} - ${profile.email}`}>
				<JobsTableAndMap jobs={jobs} />
			</DashboardTemplate>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

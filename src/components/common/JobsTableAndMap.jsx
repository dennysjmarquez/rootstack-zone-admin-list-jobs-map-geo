import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { getJobs } from '../../store/actions/jobsActions';
import RoomIcon from '@mui/icons-material/Room';
import { Button, Grid, Paper } from '@mui/material';
import { connect } from 'react-redux';
import DataTable from './DataTable';
import Map from './Map';

const mapDispatchToProps = (dispatcher) => ({
	getJobs: (page) => dispatcher(getJobs(page, false)),
});

const JobsTableAndMap = React.memo(function JobsTable({ jobs = [], getJobs }) {
	const classes = useStyles(useStyles);
	const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
	const [dataJobs, setDataJobs] = useState({});

	const getPageJobs = (page) => {
		if (!jobs.loading && page > 0) {
			getJobs(page);
		}
	};

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(location) => {
					const { latitude, longitude } = location.coords;
					setMapCenter({ lat: latitude, lng: longitude });
				},
				null,
				{
					enableHighAccuracy: true,
					timeout: 1000 * 60,
					maximumAge: 1000 * 3600 * 24,
				}
			);
		}
	}, []);

	useEffect(() => {
		if (!jobs?.data) return;

		const rowsJobs = jobs.data.map((job) => {
			job.markerColor = getRandomColor();
			job.markerIcon = <RoomIcon style={{ color: job.markerColor }} />;
			return job;
		});

		const { perPage, currentPage, total, loading } = jobs;
		const dataJobs = {
			pageSize: perPage,
			rowsPerPageOptions: [perPage],
			rowCount: total,
			paginationMode: 'server',
			pagination: true,
			onPageChange: getPageJobs,
			rows: rowsJobs,
			columns: [
				{
					field: 'id',
					headerName: 'id #',
					minWidth: 110,
					flex: 1,
				},
				{
					field: 'markerIcon',
					headerName: 'Map Marker',
					width: 220,
					disableReorder: true,
					renderCell: (data) => {
						return (
							<>
								{data.row.markerIcon}
								<Button
									className={classes.root}
									onClick={() => {
										const { latitude, longitude } = data.row;
										setMapCenter({ lat: Number(latitude), lng: Number(longitude) });
									}}
								>
									Ubicar en el mapa
								</Button>
							</>
						);
					},
				},
				{
					field: 'title',
					headerName: 'Título',
					minWidth: 120,
					width: 250,
				},
				{
					field: 'description',
					headerName: 'Descripción',
					minWidth: 350,
				},
				{
					field: 'assigned_to',
					headerName: 'Asignado a',
					width: 220,
				},
				{
					field: 'status',
					headerName: 'status',
					width: 220,
				},
			],
		};

		setDataJobs(dataJobs);
	}, [jobs]);

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} lg={6}>
					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'row', height: 500 }}>
						<DataTable data={dataJobs} loading={jobs.loading} page={jobs.currentPage} />
					</Paper>
				</Grid>

				<Grid item xs={12} md={6} lg={6}>
					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'row', height: 500 }}>
						<Map markers={dataJobs.rows} mapCenter={mapCenter} />
					</Paper>
				</Grid>
			</Grid>
		</>
	);
});

export default connect(null, mapDispatchToProps)(JobsTableAndMap);

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
		borderRadius: '4px !important',
		boxShadow: '0 3px 5px 2px rgb(0 0 0 / 23%)',
		color: 'white !important',
		padding: '0 30px !important',
		'&:hover': {
			background: 'linear-gradient(45deg, #0060ad 30%, #21CBF3 90%)',
		},
	},
});

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

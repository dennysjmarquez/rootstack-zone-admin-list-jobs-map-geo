import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoaderWrapper = styled('div')({
	display: 'flex',
	backgroundColor: '#fff',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'fixed',
	top: 0,
	left: 0,
	zIndex: 1301,
	width: '100%',
	height: '100%',
});

const mapStateToProps = (state) => ({
	pageLoading: state.pageLoading,
});

const Loader = function Loader({ pageLoading }) {
	if (pageLoading.loadingIds.length > 0) {
		return (
			<>
				<LoaderWrapper>
					<CircularProgress />
				</LoaderWrapper>
			</>
		);
	}

	return null;
};

export default connect(mapStateToProps)(Loader);

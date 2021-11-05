import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import HeaderFixed from '../layout/HeaderFixed';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/sessionActions';
import Alert from '../common/Alert';

const mapDispatchToProps = (dispatcher) => ({
	logout: () => logout(dispatcher),
});

const DashboardTemplate = function Dashboard({ children, logout, headerTitle, headerSubtitle }) {
	const [onLogout, setOnLogout] = useState(false);

	const logoutClick = () => {
		setOnLogout(true);
	};

	const onCloseLogoutAlert = () => {
		setOnLogout(false);
	};

	const onAcceptLogoutAlert = () => logout();

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					*
					<HeaderFixed title={headerTitle} subTitle={headerSubtitle} logoutClick={logoutClick} />
					<Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
						{children}
					</Container>
				</Box>
			</Box>
			<Alert open={onLogout} onAccept={onAcceptLogoutAlert} onClose={onCloseLogoutAlert} title="¡Atencion!">
				¿ Quiere salir del sistema?
			</Alert>
		</>
	);
};

export default connect(null, mapDispatchToProps)(DashboardTemplate);

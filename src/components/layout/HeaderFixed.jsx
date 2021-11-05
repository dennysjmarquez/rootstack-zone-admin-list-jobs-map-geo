import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const HeaderFixed = function HeaderFixed({ title = '', subTitle, logoutClick = () => {} }) {
	return (
		<>
			<AppBar>
				<Toolbar sx={{ pr: '24px' }}>
					<Typography component="h1" variant="h6" color="inherit" sx={{ flexGrow: 1, mr: 2 }}>
						{title}
					</Typography>

					{subTitle && (
						<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
							{subTitle}
						</Typography>
					)}
					<IconButton color="inherit" onClick={logoutClick}>
						<LogoutIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default HeaderFixed;

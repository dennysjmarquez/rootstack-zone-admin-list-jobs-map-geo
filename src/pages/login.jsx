import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { login, SESSION_STATE } from '../store/actions/sessionActions';
import Copyright from '../components/layout/Copyright';

const mapDispatchToProps = (dispatcher) => ({
	fetchLogin: (body) => login(body, dispatcher),
});
const mapStateToProps = ({ session }) => ({
	sessionState: session && session.state,
});

const Login = function Login({ fetchLogin, sessionState, history }) {
	const [credentials, setCredentials] = useState({ email: '', password: '' });
	const setCredentialsByKey = (key, value) => {
		setCredentials((prevState) => ({ ...prevState, [key]: value }));
	};

	useEffect(() => {
		if (sessionState === SESSION_STATE.LogedIn) {
			return history.replace('/dashboard');
		}
	});

	const onLogin = () => fetchLogin(credentials);

	return (
		<>
			<Container component="main" maxWidth="xs">
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={(event) => {
							event.preventDefault();
							onLogin();
						}}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							value={credentials.email}
							onChange={(ev) => setCredentialsByKey('email', ev.target.value)}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={credentials.password}
							onChange={(ev) => setCredentialsByKey('password', ev.target.value)}
						/>
						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, SESSION_STATE } from './store/actions/sessionActions';

import './App.css';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import WithAuth from './hoc/WithAuth';
import Loader from './components/common/Loader';

const mapStateToProps = ({ session }) => ({
	sessionState: session && session.state,
});

function App({ sessionState }) {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/dashboard" component={WithAuth(Dashboard)} />
					<Route
						exact
						path="/"
						render={() => {
							if (sessionState === SESSION_STATE.LogedOut) {
								return <Redirect to="/login" />;
							}

							if (sessionState === SESSION_STATE.LogedIn) {
								return <Redirect to="/dashboard" />;
							}

							setTimeout(logout, 0);
							return null;
						}}
					/>
					<Redirect to="/" />;
				</Switch>
				<Loader />
			</div>
		</Router>
	);
}

export default connect(mapStateToProps)(App);

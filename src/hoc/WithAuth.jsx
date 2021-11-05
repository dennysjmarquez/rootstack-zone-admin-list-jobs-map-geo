import connect from 'react-redux/es/connect/connect';
import { Redirect } from 'react-router-dom';
import { SESSION_STATE } from '../store/actions/sessionActions';

const mapStateToProps = ({ session }) => ({
	sessionState: session && session.state,
});

const WithAuth = (WrappedComponent) =>
	connect(mapStateToProps)((props) => {
		const { sessionState } = props;

		if (sessionState === SESSION_STATE.LogedIn) {
			return <WrappedComponent {...props} />;
		}

		return <Redirect to="/login" />;
	});

export default WithAuth;

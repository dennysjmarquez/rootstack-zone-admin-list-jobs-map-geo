import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { initializeStore } from './store';
import { testCredentials } from './store/actions/sessionActions';
import theme from './themes';
import './index.css';
import App from './App';

const store = initializeStore();
store.dispatch(testCredentials);

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);


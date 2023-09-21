import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
// import ErrorBoundary from './components/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<ErrorBoundary fallback={<div>Something went wrong</div>}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ErrorBoundary>
	// </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import MainScreen from './components/main.jsx';

// Main Entry point function
function App() {
	return <MainScreen />;
}

/**
 * TODO:
 * add routing configuration
 * add redux or any other state manager
 * check out any best practises
 */

// Rendering the entire react application
ReactDOM.render(<App />, document.getElementById('root'));
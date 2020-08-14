import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Editor from './Editor';
import Video from './Video';

function Root() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<App />
				</Route>
				<Route path="/editor">
					<Editor />
				</Route>
				<Route path="/video">
					<Video />
				</Route>
			</Switch>
		</Router>
	);
}

export default Root;

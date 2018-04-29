// Code React.js

import React from 'react';
import { render } from 'react-dom';

// components
import Connexion from './components/Connexion';
import App from './components/App';
// Router
import { BrowserRouter, Match, Miss } from 'react-router';
// 404
import NotFound from './components/NotFound';
// CSS
import './index.css';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Connexion} />
				<Match pattern={"/pseudo/:pseudo"} component={App}/>
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(
	<Root	/>, document.getElementById('root')
	);
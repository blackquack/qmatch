import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Navbar from './components/Navbar.jsx';

import "normalize.css/normalize.css";
import "@blueprintjs/core/dist/blueprint.css";

ReactDOM.render(<Navbar />, document.getElementById('root'));
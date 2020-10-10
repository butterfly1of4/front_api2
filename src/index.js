import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


// <React.StrictMode>
ReactDOM.render(
  <Router>
    <App />
    </Router>,
  document.getElementById('root')
  );
  {/* </React.StrictMode>, */}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

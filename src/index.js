import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './containers/root';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';


const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: blue,
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <HashRouter>
            <Index />
        </HashRouter>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

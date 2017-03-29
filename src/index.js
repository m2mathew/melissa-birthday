// External Dependencies
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';

// Internal Dependencies
import Router from './routes';
import './index.css';

// const muiTheme = getMuiTheme(theme);
const rootStyles = { height: '100%' };

ReactDOM.render(
  <MuiThemeProvider>
    <div style={rootStyles}>
      <Router />
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);

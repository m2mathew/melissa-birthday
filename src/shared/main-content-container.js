// External Dependencies
import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { blueGrey500, grey200, white } from 'material-ui/styles/colors';

// Internal Dependencies

// Local Variables
const propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  iconButtons: PropTypes.node,
  isAutoHeight: PropTypes.bool,
  maxWidth: PropTypes.number,
  nav: PropTypes.node,
  navPadding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  navWidth: PropTypes.number,
  title: PropTypes.string,
};

const defaultProps = {
  backgroundColor: '',
  children: null,
  iconButtons: null,
  isAutoHeight: true,
  maxWidth: null,
  nav: null,
  navPadding: '',
  navWidth: null,
  title: '',
};

const containerStyles = {
  display: 'flex',
  flexFlow: 'column',
  boxSizing: 'border-box',
  padding: '128px 24px 0 24px',
  height: '100%',
  maxWidth: 1440,
  margin: '0 auto',
  // Needed to render Conversations in legacy app
  width: '100%',
};

const paperStyles = {
  display: 'flex',
  flexFlow: 'column',
  flex: '1 0 auto',
};

const titleBarDefaultStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 'none',
  backgroundColor: blueGrey500,
  borderRadius: '2px 2px 0 0',
  color: 'white',
  fontSize: '24px',
  padding: '0 4px 0 24px',
  height: 64,
};

const titleTextStyles = {
  flex: 'none',
};

const contentStyles = {
  flex: '1 1 auto',
  // Needed for ellipsis content
  minWidth: 0,
  width: '100%',
};

const footerStyles = {
  height: 64,
  flex: 'none',
};


// Component Definition
export const MainContentContainer = (props) => {
  const {
    backgroundColor,
    children,
    iconButtons,
    isAutoHeight,
    maxWidth,
    nav,
    navPadding,
    navWidth,
    title,
  } = props;

  let rootStyles;
  if (isAutoHeight || maxWidth) {
    rootStyles = {
      ...containerStyles,
      height: isAutoHeight ? null : '100%',
      maxWidth,
    };
  } else {
    rootStyles = containerStyles;
  }

  const titleBarStyles = backgroundColor
  ? { ...titleBarDefaultStyles, backgroundColor }
  : titleBarDefaultStyles;

  return (
    <div style={rootStyles}>
      <Paper style={paperStyles}>
        <div style={titleBarStyles}>
          <div style={titleTextStyles}>
            {title}
          </div>
          <div style={contentStyles}>
            {children}
          </div>
        </div>
      </Paper>
      <footer style={footerStyles} />
    </div>
  );
};

MainContentContainer.propTypes = propTypes;
export default MainContentContainer;

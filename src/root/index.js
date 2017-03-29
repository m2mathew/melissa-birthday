// External Dependencies
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// Internal Dependencies
import MainContentContainer from '../shared/main-content-container';


// Component Definition
const Home = () => {
  const children = (
    <div>
      Hello!
    </div>
  );

  return (
    <MainContentContainer
      backgroundColor="mediumslateblue"
      title="Melissa has a birthday today!"
    >
      {children}
    </MainContentContainer>
  );
};

export default Home;

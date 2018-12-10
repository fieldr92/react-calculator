import React from 'react';
import TitleBar from './TitleBar/TitleBar';
import Calculator from './Calculator/Calculator';
import '../styles/App.css';

class App extends React.Component {

  render() {

    return (
      <>
        <TitleBar />
        <Calculator />
      </>
    )
  }
}

export default App;
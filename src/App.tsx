import React from 'react';
import logo from './logo.svg';
import './App.css';

const ThemeContext = React.createContext("light")

function ToolBar() {
  return (
    <DisplayValue/>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ToolBar />
    </ThemeContext.Provider>
  );
}


class DisplayValue extends React.Component {
  render() {
    console.log(this.context);
    return (<div>hello?</div>);
  }
}

export default App;

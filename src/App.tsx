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


const DisplayValue = () =>(
  <ThemeContext.Consumer>
    {appContext => appContext &&(
      <div>{appContext}</div>
    )}
  </ThemeContext.Consumer>
)

export default App;

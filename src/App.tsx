import React from 'react';
import logo from './logo.svg';
import './App.css';

const ThemeContext = React.createContext("light")

function ToolBar(){
  return (<div>
    <ThemedButton></ThemedButton>
  </div>);
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ToolBar/>
    </ThemeContext.Provider>
  );
}



function ThemedButton(){
  return (<button theme={this.context}/>)
}

export default App;

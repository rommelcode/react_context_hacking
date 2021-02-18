import React from 'react';
import logo from './logo.svg';
import './App.css';


interface IProps{
  name:string;
}
const ThemeContext = React.createContext<IProps>({name:"blue"})

function ToolBar() {
  return (
    <DisplayValue/>
  );
}

function App() {
  return (
    <ThemeContext.Provider value={{name:"brown"}}>
      <ToolBar />
    </ThemeContext.Provider>
  );
}


const DisplayValue = () =>(
  <ThemeContext.Consumer>
  {value=><div>{value.name}</div>}
  </ThemeContext.Consumer>
)

export default App;

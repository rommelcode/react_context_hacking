import React from 'react';
import logo from './logo.svg';
import './App.css';


interface IProps{
  name?:string;
  address:number;
}
const ThemeContext = React.createContext<IProps>({name:"blue",address:112})

function ToolBar() {
  return (
    <DisplayValue/>
  );
}

function App() {
  return (
    <ThemeContext.Provider value={{name:"brown",address:1112}}>
      <ToolBar />
    </ThemeContext.Provider>
  );
}


const DisplayValue = () =>(
  <ThemeContext.Consumer>
  {value=><div>{value.name}{value.address}</div>}
  </ThemeContext.Consumer>
)

export default App;

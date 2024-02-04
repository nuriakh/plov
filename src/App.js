
import './App.css';
import {createContext, useState} from "react"
import Lamp from './Lamp.jsx' 
import ReactSwitch from 'react-switch';
export const ThemeContext  = createContext(null)


function App() {
  const [theme,setTheme] = useState("dark")
  const toggleTheme = () =>{
    setTheme((curr)=> (curr === "light" ? "dark" : "light"))
  }
  return (
   <>
   <ThemeContext.Provider value={{theme, toggleTheme}}>
   <div className="App" id = {theme}>
      <header className="App-header">
      
        <div >
          <div>
          <label className='textSwitch'>{theme ==="dark" ? "Turn on the light  " : "Thanks  "}</label>
          </div>
        <ReactSwitch className='switch' onChange={toggleTheme} checked={theme==="light"}/>
        <Lamp/>
        </div>
      </header>
    </div>
    </ThemeContext.Provider>
    <div className='one'>
    <header className="one-header">
      <p>
        hui
      </p>
      <div className='lamp'>
        
      </div>
      </header>
    </div>
    </>
  );
}

export default App;

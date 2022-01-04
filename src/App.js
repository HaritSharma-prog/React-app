import './App.css';
import Navbar from './Components/Navbar'
import Textforms from './Components/Textforms';
import About from './Components/About';
import Alert from './Components/Alert';
import { useState } from 'react';
// import { Routes,Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [text, settext] = useState("text-dark")
  ;
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
      })

  }
  setTimeout(() => {
    setalert(null);
}, 1500);

  const [rendertext, setrendertext] = useState("Enable Darkmode")

  
  const toggleMode=()=>{
    if(mode==="light")
    {
      setmode("dark");
      setrendertext("Disable Darkmode");
      settext("light")
      document.body.style.backgroundColor="gray";
      document.body.style.color="white"
      showalert("Dark mode has been Enabled",'success')
    }
    else
    {
      setmode("light");
      setrendertext("Enable Darkmode");
      settext("dark")
      document.body.style.background="white";
      document.body.style.color="black"
      showalert("Dark mode has been Disabled","success")
    }
  }

  return (
       <Router>
       <Navbar title="TextUtils" nav="Home" mode={mode} toggle={toggleMode} textmode={rendertext} toggletext={text}/>
       <Routes>
           <Route exact path="/" element={<Textforms heading="Enter the text to analyses" mode={mode} showAlert={showalert}/>}/>
           <Route exact path="/about" element={<About/>}/>
      </Routes>
    </Router>
);
}

export default App;
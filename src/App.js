import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

 function App() {
const [mode,setMode]=useState('light')
const [btnText,setbtnText]=useState('Enable Dark Mode')
const [alert, setAlert] = useState(null)

// const removeBodyClasses=()=>{

//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-primary')
//   document.body.classList.remove('bg-success')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
  
// }

const toggleMode=(cls)=>{
//   removeBodyClasses()
//   console.log(cls)
//  document.body.classList.add('bg-'+cls)
  
  if(mode==='light'){
 setMode('dark')
 setbtnText('Disable Dark Mode')
 document.body.style.backgroundColor='#180d52'
 showAlert("Dark mode has been unable","success")
}
else{
  setMode('light')
  setbtnText('Enable Dark Mode')
  document.body.style.backgroundColor='white'
  showAlert("Light mode has been unable","success")
}

}


const showAlert=(message,type)=>{

setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
setAlert(null)
},2000)
}

return (
    <>
   
   {/* <Navbar title="TextUtils" about="About TextUtils"/> */}
   <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} bottonText={btnText}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm heading='Try TextUtils - word counter, character counter, remove extra spaces' mode={mode}  showAlert={showAlert}/>}/>
          
     </Routes>
 
   </div>
   </Router>
    </>
  );
}

export default App;

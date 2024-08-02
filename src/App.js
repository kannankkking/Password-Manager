import React from 'react'
// import ReactDOM from 'react-dom/client'
//  import App from './App.jsx'
import Url from './Components/Url.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GeneratePassword from './Components/GeneratePassWord'
import Login from './Components/Login.js'
import Data from './Components/Data.js'
import PassWordEdit from './Components/PassWordEdit.js'
import UpdatePage from './Components/UpdatePage.js'
import EditPage from './Components/EditPage.js'








export default function App() {
  return (
    <div>    
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Url />} />
      <Route path="/Login" element={<Login/>} /> 
      <Route path="/Data" element={<Data />} />  
      <Route path='/PassWordEdit' element={< PassWordEdit/>} />
     <Route path='/EditPage' element={< EditPage/>} />
     <Route path='/UpdatePage' element={< UpdatePage/>} />
      <Route path='/GeneratePassword' element={< GeneratePassword/>} />
  
     
     
    </Routes>
    </BrowserRouter>
    </div>

  )
}

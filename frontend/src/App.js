import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './Components/LoginPage/LoginPage';
import SignupPage from './Components/SignupPage/SignupPage';
import {Routes, Route} from "react-router-dom"
import ContactForm from './Components/ContactForm/ContactForm';
import UpdateForm from './Components/UpdateForm/UpdateForm';
import List from "./Components/List/List"

const App = () => {
  return (
    <>
   <Navbar />
      <Routes>
        <Route exact path='/login' element={ <LoginPage />}/>
        <Route exact path='/signup' element={ <SignupPage />}/>
        <Route exact path='/contactform' element={ <ContactForm />}/>
        <Route exact path='/updateform' element={<UpdateForm />}/>
        <Route exact path='/list' element={<List />}/>

      </Routes>
    </>
  )
}

export default App;
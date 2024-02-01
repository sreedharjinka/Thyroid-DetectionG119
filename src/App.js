import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Components/pages/Home';
import Symptoms from './Components/pages/Symptoms';
import Tests from './Components/pages/Tests';
import Signin from './Components/pages/Signin';
import Signup from './Components/pages/Signup';
import SymptomChecker from './Components/pages/Symptomchecker';
import EmailVerification from './Components/pages/EmailVerification';
import getSearchResults from './Components/pages/BingMap';
import Person from './Components/pages/Person';
import MapComponent from './Components/pages/Map';
import ContactForm from './Components/pages/ContactForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChangePassword from './Components/pages/ChangePassword';


function App() {
  const addContact = (contact) => {
    // Implement your logic to add contact
    console.log('Adding contact:', contact);
  };
  const isLoggedIn = () => {
    const userToken = localStorage.getItem('user');
    return !!userToken; // Double negation to convert to boolean
    

  };
  console.log(isLoggedIn());
  
  return (
    <>
     <Router>
       <Navbar />
       <Routes>
          <Route path='/' element={isLoggedIn() ? <Navigate to='/home' /> : <Signup />} />
          <Route path='/home' element={<Home/>} />
         <Route path='/tests' element={<Tests/>} />
         <Route path="/register" element={<Signup/>} />
         <Route path="/login" element={<Signin />} />
         <Route path="/symptoms" element={<Symptoms />}/>
         <Route path="/symptomchecker" element={<SymptomChecker />} />
         <Route path='/contacts' element={<MapComponent/>} />
         <Route path="/emailverification" element={<EmailVerification/>} />

         {isLoggedIn ? (
          <Route path="/person" element={<Person/>} />
        ) : (
          // Render a different component or redirect to login when not logged in
          <Route path="/" element={<Home/>} />
        )}
       </Routes>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

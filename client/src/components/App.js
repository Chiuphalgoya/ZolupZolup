import React,{Suspense} from 'react';
import
{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import RegisterPage from './RegisterPage/RegisterPage';
import LoginPage from './LoginPage/LoginPage';
import NewPasswordPage from './NewPasswordPage/NewPasswordPage';
import MainPage from './MainPage/MainPage';
function App() {
  return (
   <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{paddingTop:"69px"}}></div>
        <div>
          <Routes>
            <Route path = "/" element= {<MainPage />} />
            <Route path = "/register" element ={<RegisterPage/>} />
            <Route path = "/login" element ={<LoginPage/>} />
            <Route path = "/password" element = {<NewPasswordPage />} />
          </Routes>
        </div>
      </Suspense>
   </Router>
  );
}

export default App;

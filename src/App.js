/*import logo from './logo.svg';
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginpage/LoginPage';
import ForgotPage from './pages/ForgotPage/ForgotPage';
import RegisterPage  from './pages/RegisterPage/RegisterPage';
//import StateContador from './playground/useState/useState';
import HooksGral from './playground/HooksGral';
import UseStateHook from './playground/useState';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/forgot" element={<ForgotPage/>}/>
      <Route path="/regiter" element={<RegisterPage/>}/>

      <Route path="/hooks" element={<HooksGral/>}/>
      <Route path="/usestate" element={<UseStateHook/>}/>
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {AuthContextProvider} from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function App()
{

  return(
  <div>
    <AuthContextProvider>
    <Navbar />
    <Routes>
    <Route path = "/" element = {<Home />} ></Route>
      <Route path = "/login" element = {<Login />}></Route>
      <Route path = "/signup" element = {<SignUp />}></Route>
      <Route path ="/account" element ={<Account />}></Route>
    </Routes>
</AuthContextProvider>
  </div>
  )
}

export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>Main App</h1> */}
      <Navbar />
      <hr />
      
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="about" element={ <AboutPage /> } />


        <Route path="/*" element={ <Navigate to="/login" /> } />
      </Routes>

    </UserProvider>
  )
}

import "../src/styles//App.css";
import Forgetpassword from "./Components/Forgetpassword";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Dashboard/Main";
import MyTrades from "./Dashboard/MyTrades";
import Navbar from "./Dashboard/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // Update localStorage whenever login state changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <BrowserRouter>
        {isLoggedIn && (
          <>
            <Navbar />
            <Dashboard />
          </>
        )}
        <Routes>
          <Route exact path="/" element={<LoginPage setFlag={setIsLoggedIn} />} />
          <Route exact path="/forget-password" element={<Forgetpassword />} />
          <Route exact path="/dashboard" element={<Main />} />
          <Route exact path="/my-trades" element={<MyTrades />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

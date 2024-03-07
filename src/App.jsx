import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  accountPage as AccountPage,
  passportPage as PassportPage,
} from "./pages";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("passport");
  return (
    <Router>
      <Navbar selectedPage={selectedPage} />
      <Routes>
        <Route
          path="/"
          element={<PassportPage setSelectedPage={setSelectedPage} />}
        />
        <Route
          path="/passport"
          element={<PassportPage setSelectedPage={setSelectedPage} />}
        />
        <Route
          path="/account"
          element={<AccountPage setSelectedPage={setSelectedPage} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

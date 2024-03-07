import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { accountPage, passportPage } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={passportPage} />
        <Route path="/passport" Component={passportPage} />
        <Route path="/account" Component={accountPage} />
      </Routes>
    </Router>
  );
}

export default App;

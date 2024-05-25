import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/new" Component={Form} />
        <Route path="/edit/:id" Component={Form} />
      </Routes>
    </Router>
  );
}

export default App;

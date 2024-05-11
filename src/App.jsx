import "./css/style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TabiDemo } from "./pages/TabiDemo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tabidemo" element={<TabiDemo />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

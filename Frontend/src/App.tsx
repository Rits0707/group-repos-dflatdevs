import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Applicant from "./pages/Applicant";
import Office from "./pages/Office";
import Reviewer from "./pages/Reviewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/applicant" element={<Applicant />} />
        <Route path="/office" element={<Office />} />
        <Route path="/reviewer" element={<Reviewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
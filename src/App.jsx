import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import StudentDashboard from "./pages/StudentDashboard";
import WriteExam from "./pages/writeexam";
import Feedback from "./pages/Feedback";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/exam" element={<WriteExam />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
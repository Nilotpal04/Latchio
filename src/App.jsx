import { Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/create" element={<CreateEvent />} />
    </Routes>
  );
}

export default App;

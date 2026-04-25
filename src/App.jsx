import { Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Dashboard</h1>} />
      <Route path="/create" element={<CreateEvent />} />
    </Routes>
  );
}

export default App;

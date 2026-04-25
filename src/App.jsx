import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";

function App() {
  const [plans, setPlans] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard plans={plans}/>} />
      <Route path="/create" element={<CreateEvent setPlans={setPlans} />} />
    </Routes>
  );
}

export default App;

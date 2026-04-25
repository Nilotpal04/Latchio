import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";

function App() {
  const [plans, setPlans] = useState(() => {
    const saved = localStorage.getItem("plans");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard plans={plans} />} />
      <Route path="/create" element={<CreateEvent setPlans={setPlans} />} />
      <Route path="/plan/:id" element={<Workspace plans={plans} />} />
    </Routes>
  );
}

export default App;

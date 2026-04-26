import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function Workspace({ plans }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = plans.find((p) => p.id.toString() === id);
  const [activeTab, setActiveTab] = useState("overview");
  if (!plan) {
    return <p className="p-6">Plan not found</p>;
  }
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-200/90 to-purple-200/90 shadow">
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-medium"
        >
          Back
        </button>
        <h1 className="text-lg font-bold">{plan.name}</h1>
        <button className="bg-blue-500 text-white px-4 py1 rounded">
          Invite
        </button>
      </div>

      <div className="flex flex-1">
        <div className="w-48 bg-white p-4 border-r space-y-3">
          <button
            onClick={() => setActiveTab("overview")}
            className={`block w-full text-left px-3 py-2 rounded ${
              activeTab === "overview"
                ? "bg-blue-100 text-blue-600 font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("decisions")}
            className={`block w-full text-left px-3 py-2 rounded ${
              activeTab === "decisions"
                ? "bg-blue-100 text-blue-600 font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            Decisions
          </button>

          <button
            onClick={() => setActiveTab("tasks")}
            className={`block w-full text-left px-3 py-2 rounded ${activeTab === "tasks" ? "bg-blue-100 text-blue-600 font-medium" : "hover:bg-gray-100"}`}
          >
            Tasks
          </button>

          <button
            onClick={() => setActiveTab("expenses")}
            className={`block w-full text-left px-3 py-2 rounded ${activeTab === "expenses" ? "bg-blue-100 text-blue-600 font-medium" : "hover:bg-gray-100"}`}
          >
            Expenses
          </button>
        </div>
        <div className="flex-1 p-6 bg-gray-100">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700">Date: {plan.date}</p>
              <p className="text-gray-600">{plan.description}</p>
            </div>
          )}

          {activeTab === "decisions" && (
            <div>
              <h2 className="text-xl font-semibold">Desicions</h2>
              <p className="text-gray-500">No decisions yet</p>
            </div>
          )}

          {activeTab === "tasks" && (
            <div>
              <h2 className="text-xl font-semibold">Tasks</h2>
              <p className="text-gray-500">No tasks yet</p>
            </div>
          )}

          {activeTab === "expenses" && (
            <div>
              <h2 className="text-xl font-semibold">Expenses</h2>
              <p className="text-gray-500">No expenses yet</p>
            </div>
          )}
        </div>

        <div className="w-56 bg-white border-l p-4">
          <h3 className="font-semibold mb-2">Members</h3>
          <p className="text-gray-500 text-sm">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Workspace;

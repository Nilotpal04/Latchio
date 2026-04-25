import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEvent({setPlans}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("please enter a name");
      return;
    }

    const id = crypto.randomUUID();

    setPlans(prev => [...prev, {
      id,
      name,
      date,
      description
    }]);
    navigate("/");
    setName("");
    setDate("");
    setDescription("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">
          Plan something together
        </h1>

        <input
          type="text"
          placeholder="What are you planning?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          placeholder="When is it?"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Add details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          onClick={handleSubmit}
          disabled={!name}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:bg-blue-700 text-white p-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Create Plan
        </button>
      </div>
    </div>
  );
}

export default CreateEvent;

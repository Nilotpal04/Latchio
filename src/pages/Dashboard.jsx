import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-100">

      <div className="flex justify-between items-center px-6 py-3 backdrop-blur-md bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white shadow">
        <h1 className="text-lg font-bold tracking-wide">Latchio</h1>

        <div className="flex items-center gap-4">
          <button className="bg-white/20 px-3 py-1 rounded-full text-sm hover:bg-white/30 transition">
            🌙 / ☀️
          </button>
          <div className="w-8 h-8 bg-white/30 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-1">

        <div className="w-64 bg-white/80 backdrop-blur-md p-4 border-r">
          <ul className="space-y-2 text-gray-700">

            <li className="px-3 py-2 rounded bg-blue-100 text-blue-600 font-medium">
              All Plans
            </li>

            <li className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
              Starred
            </li>

            <li className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
              Completed
            </li>

            <li className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
              Friends
            </li>

          </ul>
        </div>

        <div className="flex-1 p-8 bg-gray-100">

          <div className="max-w-4xl">

            <button
              onClick={() => navigate("/create")}
              className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              + Create new plan
            </button>

            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Your Plans
            </h2>

            <div className="space-y-3">

              <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-0.5 transition cursor-pointer">
                Goa Trip
              </div>

              <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-0.5 transition cursor-pointer">
                Club Event
              </div>

              <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-0.5 transition cursor-pointer">
                House Party
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
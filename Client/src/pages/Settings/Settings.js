import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600">Configure your application settings here.</p>
      <div className="mt-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate("/")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Settings;

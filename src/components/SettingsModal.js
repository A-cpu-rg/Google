import React, { useState, useEffect } from "react";

export default function SettingsModal({ onClose }) {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark-mode")
  );

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);

    if (storedDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const handleDarkModeChange = () => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  };

  const handleNotificationsChange = () => {
    const isEnabled = !notificationsEnabled;
    setNotificationsEnabled(isEnabled);

    if (isEnabled) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Notifications Enabled", {
            body: "You will receive notifications.",
          });
        }
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-auto transition-transform transform-gpu">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Calendar Settings
        </h2>

        <div className="mb-6 flex items-center justify-between">
          <label htmlFor="darkMode" className="text-lg text-gray-800 dark:text-gray-200">
            Dark Mode
          </label>
          <input
            id="darkMode"
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeChange}
            className="h-5 w-5 cursor-pointer"
          />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <label htmlFor="notifications" className="text-lg text-gray-800 dark:text-gray-200">
            Enable Notifications
          </label>
          <input
            id="notifications"
            type="checkbox"
            checked={notificationsEnabled}
            onChange={handleNotificationsChange}
            className="h-5 w-5 cursor-pointer"
          />
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}

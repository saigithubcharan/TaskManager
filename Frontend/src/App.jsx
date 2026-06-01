import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";

import ProtectedRoute from "./routes/ProtectedRoute";
import { useEffect } from "react";
import useAuthStore from "./store/authStore";
import { getProfile } from "./services/authService";

function App() {
  const setUser = useAuthStore(
  (state) => state.setUser
);

const token = useAuthStore(
  (state) => state.token
);

useEffect(() => {
  const fetchUser = async () => {
    try {
      if (!token) return;

      const response =
        await getProfile();

      setUser(response.user);
    } catch (error) {
      console.error(error);
    }
  };

  fetchUser();
}, [token, setUser]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
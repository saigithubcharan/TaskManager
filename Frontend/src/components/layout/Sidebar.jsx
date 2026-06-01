import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen p-5">
      <nav className="space-y-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block p-3 rounded-lg ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `block p-3 rounded-lg ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          Tasks
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full text-left p-3 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
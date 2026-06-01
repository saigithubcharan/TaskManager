import { FiMenu } from "react-icons/fi";
import useAuthStore from "../../store/authStore";

const Navbar = ({
  setSidebarOpen,
}) => {
  const { user } = useAuthStore();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden"
          onClick={() =>
            setSidebarOpen(true)
          }
        >
          <FiMenu size={24} />
        </button>

        <h1 className="text-lg md:text-xl font-bold text-blue-600">
          Task Manager
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
          {user?.name
            ?.charAt(0)
            ?.toUpperCase()}
        </div>

        <div className="hidden sm:block">
          <p className="font-medium">
            {user?.name}
          </p>

          <p className="text-xs text-slate-500">
            {user?.email}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import useAuthStore from "../../store/authStore";

const Navbar = () => {
  const { user } = useAuthStore();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-blue-600">
        Task Manager
      </h1>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <div>
          <p className="font-medium">
            {user?.name || "User"}
          </p>
          <p className="text-xs text-slate-500">
            {user?.email || ""}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
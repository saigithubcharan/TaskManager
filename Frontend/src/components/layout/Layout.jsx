import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex">
        {/* Desktop Sidebar */}

        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}

        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() =>
                setSidebarOpen(false)
              }
            />

            <div className="fixed left-0 top-0 h-full z-50">
              <Sidebar
                closeSidebar={() =>
                  setSidebarOpen(false)
                }
              />
            </div>
          </>
        )}

        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
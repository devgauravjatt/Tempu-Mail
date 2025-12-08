import { NavLink } from "react-router";
import logo from "@/assets/logo-2.png";
import { Home, Inbox, Calendar, Search, Settings, Github } from "lucide-react";
import { Button } from "./ui/button";

export default function BigSidebar() {
  return (
    <aside className="sidebar w-72 min-h-screen flex flex-col">
      {/* ---------- SIDEBAR HEADER ---------- */}
      <div className="flex items-center gap-4 px-6 py-3.5 border-b border-sidebar-border">
        <img
          src={logo} // <-- replace with your logo path
          alt="Logo"
          className="h-12 w-12 rounded-xl object-contain"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Tempu Mail</h1>
          <p className="text-sm text-muted-foreground">Fast · Secure · Free</p>
        </div>
      </div>

      {/* ---------- NAVIGATION ---------- */}
      <nav className="sidebar-nav flex-1 mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "sidebar-item-active" : "sidebar-item-hover"}`
          }
        >
          <Home className="sidebar-icon" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/inbox"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "sidebar-item-active" : "sidebar-item-hover"}`
          }
        >
          <Inbox className="sidebar-icon" />
          <span>Inbox</span>
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "sidebar-item-active" : "sidebar-item-hover"}`
          }
        >
          <Calendar className="sidebar-icon" />
          <span>Calendar</span>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "sidebar-item-active" : "sidebar-item-hover"}`
          }
        >
          <Search className="sidebar-icon" />
          <span>Search</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "sidebar-item-active" : "sidebar-item-hover"}`
          }
        >
          <Settings className="sidebar-icon" />
          <span>Settings</span>
        </NavLink>
      </nav>
      {/* ---------- FOOTER ---------- */}
      <div className="p-6 border-t border-sidebar-border">
        <Button
          variant="outline"
          size="lg"
          className="w-full justify-center"
          onClick={() => window.open("https://github.com/your-repo", "_blank")}
        >
          <Github className="h-5 w-5 mr-2" />
          GitHub Repo
        </Button>
      </div>
    </aside>
  );
}

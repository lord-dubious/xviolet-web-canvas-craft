
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, 
  List, 
  Feather, 
  Settings, 
  Users, 
  LogOut,
  Plug
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ to, icon, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `xv-sidebar-item ${isActive ? "active" : ""}`
      }
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
};

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, perform logout logic here
    navigate("/login");
  };

  return (
    <aside className="xv-sidebar">
      <div className="py-2">
        <NavItem to="/" icon={<Home size={20} />}>
          Dashboard
        </NavItem>
        <NavItem to="/timeline" icon={<List size={20} />}>
          Timeline
        </NavItem>
        <NavItem to="/tweet" icon={<Feather size={20} />}>
          Tweet
        </NavItem>
        <NavItem to="/extensions" icon={<Plug size={20} />}>
          Extensions
        </NavItem>
        <NavItem to="/settings" icon={<Settings size={20} />}>
          Settings
        </NavItem>
        <NavItem to="/agent-central" icon={<Users size={20} />}>
          Agent Central
        </NavItem>

        <div className="border-t border-sidebar-border my-2"></div>
        
        <button className="xv-sidebar-item w-full" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

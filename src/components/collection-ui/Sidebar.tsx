import { sidebarItems } from "@/constants";
import { SidebarType } from "@/types";

const Sidebar = ({
  activeSidebarItem,
  setActiveSidebarItem,
}: {
  activeSidebarItem: SidebarType;
  setActiveSidebarItem: (id: SidebarType) => void;
}) => {
  return (
    <div className="w-52 fixed bg-white/80 backdrop-blur-sm border-r border-gray-200 h-screen sticky top-0 shadow-sm">
      <nav className="space-y-1 p-4">
        {sidebarItems?.map((item) => {
          const Icon = item.icon;
          const isActive = activeSidebarItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSidebarItem(item.id as SidebarType)}
              className={`w-full flex items-center gap-3 px-4 hover:cursor-pointer py-2 rounded-lg text-sm font-medium transition-all duration-200 
                ${
                  isActive
                    ? "bg-gradient-to-br from-blue-500 to-purple-600  text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-white" : "text-gray-500"
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;

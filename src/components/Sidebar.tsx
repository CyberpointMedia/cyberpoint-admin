import { useState } from 'react';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const [isUsersSubmenuOpen, setIsUsersSubmenuOpen] = useState<boolean>(false);
  const [isPagesSubmenuOpen, setIsPagesSubmenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>('Dashboard'); // Default active menu item

  const toggleUsersSubmenu = () => {
    setIsUsersSubmenuOpen(!isUsersSubmenuOpen);
    setActiveMenu(isActiveMenu('Users') ? '' : 'Users');
  };

  const togglePagesSubmenu = () => {
    setIsPagesSubmenuOpen(!isPagesSubmenuOpen);
    setActiveMenu(isActiveMenu('Pages') ? '' : 'Pages');
  };

  const isActiveMenu = (menu: string) => activeMenu === menu;

  return (
    <div className={`fixed left-0 h-screen bg-white border-r-4 border-r-gray-200 ${isCollapsed ? 'w-36' : 'w-64'} transition-width duration-300 overflow-hidden`}>
      <div className="p-4 text-white text-center">
        <a href="#" className="text-center w-full block">
          <span className="font-semibold text-2xl text-[#ff561d]">CyberPoint</span>
        </a>
      </div>
      <nav className="mt-4">
        <ul>
          {/* Dashboard Menu Item */}
          <li className={`p-4 cursor-pointer ${isActiveMenu('Dashboard') ? 'menu-items-active' : ''}`}>
            <a
              href="#"
              className="flex text-black items-center hover:text-[#ff561d]"
              onClick={() => setActiveMenu('Dashboard')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="home" className="menu-icon">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="ml-2 hidden md:block">Dashboard</span>
            </a>
          </li>

          {/* Pages Menu Item */}
          <li className={`p-4 ${isActiveMenu('Pages') ? 'menu-items-active' : ''}`}>
            <div
              onClick={togglePagesSubmenu}
              className={`flex items-center text-black hover:text-[#ff561d] cursor-pointer`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="file" className="menu-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
              </svg>
              <span className="ml-2 hidden md:block">Pages</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`ml-auto transition-transform duration-300 ${isPagesSubmenuOpen ? 'rotate-180' : 'rotate-0'}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            {isPagesSubmenuOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <li>
                  <a href="#" className="flex items-center text-black hover:text-[#ff561d]">
                    <span className="ml-2 hidden md:block">All Pages</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-black hover:text-[#ff561d]">
                    <span className="ml-2 hidden md:block">Add New Page</span>
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Users Menu Item */}
          <li className={`p-4 ${isActiveMenu('Users') ? 'menu-items-active' : ''}`}>
            <div
              onClick={toggleUsersSubmenu}
              className={`flex items-center text-black hover:text-[#ff561d] cursor-pointer`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="users" className="menu-icon">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="16" cy="3" r="4"></circle>
              </svg>
              <span className="ml-2 hidden md:block">Users</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`ml-auto transition-transform duration-300 ${isUsersSubmenuOpen ? 'rotate-180' : 'rotate-0'}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            {isUsersSubmenuOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <li>
                  <a href="#" className="flex items-center text-black hover:text-[#ff561d]">
                    <span className="ml-2 hidden md:block">All Users</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-black hover:text-[#ff561d]">
                    <span className="ml-2 hidden md:block">Add New User</span>
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

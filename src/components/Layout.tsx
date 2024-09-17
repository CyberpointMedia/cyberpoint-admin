// components/Layout.tsx
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  isCollapsed: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isCollapsed }) => {
  return (
    <div className="flex">
      <Sidebar isCollapsed={isCollapsed} />
      <div className="flex-grow bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;

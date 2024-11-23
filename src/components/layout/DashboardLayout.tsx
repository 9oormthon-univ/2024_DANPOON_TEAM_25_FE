import React, { useState } from 'react';
import { StudentSidebar } from '@/components/sidebar/StudentSidebar';
import { TeacherSidebar } from '@/components/sidebar/TeacherSidebar';
import { FiMenu } from 'react-icons/fi';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'student' | 'teacher';
  className?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role, className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const SidebarComponent = role === 'student' ? StudentSidebar : TeacherSidebar;

  return (
    <div className={`min-h-screen bg-gray-50/50 flex ${className}`}>
      <div className="hidden md:block w-72 fixed h-screen">
        <SidebarComponent />
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg"
        >
          <FiMenu className="w-6 h-6" />
        </button>
        <>
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={`fixed left-0 top-0 w-72 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <SidebarComponent />
          </div>
        </>
      </div>
      <div className="w-full md:ml-72 p-4 md:p-8">
        <div className="mt-16 md:mt-0">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
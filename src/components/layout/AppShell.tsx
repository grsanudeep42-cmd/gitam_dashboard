import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileNavigation } from './MobileNavigation';

export const AppShell: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex flex-col font-sans text-[#191c1e] antialiased">
      {/* Desktop Fixed Left Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 bottom-0 z-50">
        <Sidebar />
      </div>

      {/* Main Container Area */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        {/* Header */}
        <Header onOpenMobileNav={() => setMobileNavOpen(true)} />

        {/* Content Body */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Navigation Drawer & Bottom Dock */}
      <MobileNavigation isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </div>
  );
};

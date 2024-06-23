import React, { useState } from 'react';
import SideNav from './Utils/SideNav';
import { Github } from 'lucide-react';

const Layout = ({ className, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOverlayClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='bg-violet-400'>
      <div className='fixed top-0 z-50 w-full'>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-stone-50 text-sm py-4 dark:bg-neutral-800">
          <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
              <a className="flex-none text-xl font-semibold dark:text-white" href="/"><span className='px-2 py-1 border-2 border-black rounded-xl bg-cyan-300'>shadcn/ui</span> Brutalism v1</a>
              <div className="sm:hidden">
                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10" onClick={handleSidebarToggle} aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                  <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
            </div>
            <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a className="font-medium text-gray-600 flex items-center gap-x-2 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-300" href="https://github.com/unaivan22/shadcn-ui-brutalism" target="_blank" rel="noopener noreferrer"> <Github /> Github</a>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black opacity-50" onClick={handleOverlayClick}></div>
      )}

      <button onClick={handleSidebarToggle} aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" className={`fixed top-14 left-0 z-40 w-52 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 border-r border-gray-300`} aria-label="Sidebar">
        <SideNav />
      </aside>

      <div className="p-4 sm:ml-52 bg-violet-400 mt-14 min-h-screen">
        <div className={className}>{children}</div>
        <div className='flex items-center justify-between px-4 mt-8 mb-4'>
          <a href='/'>Shadcn/ui Brutalism</a>
          <a href='https://dinivannendra.xyz/' target='_blank' rel="noopener noreferrer">2024 - <span className='underline'>Unaivan</span></a>
        </div>
      </div>
    </div>
  );
};

export default Layout;

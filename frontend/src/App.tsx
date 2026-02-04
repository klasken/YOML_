import React, { useState } from 'react';
import './index.css';
import { Sidebar } from './assets/Sidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ChatApp from './components/ChatApp';
import Auth from './components/Auth';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentPage, setCurrentPage] = useState('feed');

  const [targetUser, setTargetUser] = useState<any>(null);

  const handleStartChat = (user: any) => {
    setTargetUser(user);
    setCurrentPage('message');
  };

  if (!isConnected) {
    return <Auth onLogin={() => setIsConnected(true)} />;
  }

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center brightness-50" />

      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <div className="flex-shrink-0 z-50"><Navbar /></div>

        <div className="flex flex-1 overflow-hidden">
          <Sidebar setPage={setCurrentPage} />

          <main className="flex-1 h-full overflow-hidden relative">
             {currentPage === 'message' ? (
                <ChatApp initialUser={targetUser} />
             ) : (
                <Feed onJoin={handleStartChat} />
             )}
          </main>
        </div>
      </div>
    </>
  )
}

export default App;

import React, { ReactNode } from 'react';
import Nav from '@/components/Nav';
import '@/styles/globals.css';

export const metadata = {
  title: 'Pop it!',
  description: 'Play Pop it with your friends!',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
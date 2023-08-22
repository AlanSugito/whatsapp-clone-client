import React, { FC } from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 h-screen overflow-hidden w-screen">
      {children}
    </div>
  );
};

export default HomeLayout;

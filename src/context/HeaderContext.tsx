import React, { createContext, useState, useContext } from "react";

interface HeaderContextType {
  isHeaderVisible: boolean;
  setIsHeaderVisible: (visible: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  return (
    <HeaderContext.Provider value={{ isHeaderVisible, setIsHeaderVisible }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderVisibility = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderVisibility must be used within a HeaderProvider");
  }
  return context;
};

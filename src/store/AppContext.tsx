import React, { createContext, SetStateAction, useState } from "react";

interface StoreType {
  successModalIsOpen: boolean;
  setSuccessModalIsOpen: React.Dispatch<SetStateAction<boolean>>;
  projectModalIsOpen: boolean;
  setProjectModalIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const StoreContext = createContext<StoreType>({
  successModalIsOpen: false,
  setSuccessModalIsOpen: () => {},
  projectModalIsOpen: false,
  setProjectModalIsOpen: () => {},
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projectModalIsOpen, setProjectModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        successModalIsOpen,
        setSuccessModalIsOpen,
        projectModalIsOpen,
        setProjectModalIsOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default AppProvider;

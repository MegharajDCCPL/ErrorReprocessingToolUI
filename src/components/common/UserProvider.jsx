import { createContext, useState, useContext } from "react";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedComponentName, setSelectedComponentName] = useState("");
  const [userDetails, setUserDetails] = useState({});

  return (
    <UserContext.Provider
      value={{
        selectedComponentName,
        setSelectedComponentName,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

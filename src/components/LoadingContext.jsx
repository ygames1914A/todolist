import { createContext, useContext, useEffect, useState } from "react";

export const LoadingContext = createContext();

export default function LoadingContextProvider({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [loadedOrder, setLoadedOrder] = useState(false);
  useEffect(() => {
    console.log(loaded);
  }, [loaded]);

  return (
    <LoadingContext.Provider
      value={{ loaded, setLoaded, loadedOrder, setLoadedOrder }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoadingContext = () => useContext(LoadingContext);

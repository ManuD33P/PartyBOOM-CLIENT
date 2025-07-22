import {
    createContext,
    useState,
    useContext,
    type ReactNode,
    type Dispatch,
    type SetStateAction,
  } from "react";
  
  interface ILoadingContext {
    isLoading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
  }
  
  const LoadingContext = createContext<ILoadingContext>({
    isLoading: false,
    setLoading: () => {},
  });
  
  export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setLoading] = useState(false);
  
    return (
      <LoadingContext.Provider value={{ isLoading, setLoading }}>
        {children}
      </LoadingContext.Provider>
    );
  };
  
  export const useLoading = () => useContext(LoadingContext);
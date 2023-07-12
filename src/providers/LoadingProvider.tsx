import { ReactNode, useState } from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, handleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;

import { createContext } from 'react';

export type LoadingContextType = {
  isLoading: boolean;
  handleLoading: (isloading: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  handleLoading: () => null,
});

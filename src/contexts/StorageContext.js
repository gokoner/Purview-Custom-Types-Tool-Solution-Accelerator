import { createContext, useContext } from 'react';

// Create new auth context
export const StorageContext = createContext();

// React hook to use storage context
export function useStorage() {
  return useContext(StorageContext);
}

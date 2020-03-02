import React, { createContext, useReducer } from 'react';

import { databaseReducer } from '../reducers/DatabaseReducer';
import { dbData } from '../data/dbs';

export const DatabaseContext = createContext();

export const DatabaseContextProvider = ({ children }) => {
  const [databases, dispatch] = useReducer(databaseReducer, dbData);

  return (
    <DatabaseContext.Provider value={{databases}}>
      {children}
    </DatabaseContext.Provider>
  )
}
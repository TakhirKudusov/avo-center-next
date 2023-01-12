import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { ChildrenProp } from '../types/ChildrenProp';

type Value = {
  isMenuDisabled?: boolean;
  setIsMenuDisabled?: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<Value>({});

const ContextProvider: FC<ChildrenProp> = ({ children }) => {
  const [isMenuDisabled, setIsMenuDisabled] = useState<boolean>(true);

  const value = {
    isMenuDisabled,
    setIsMenuDisabled,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, ContextProvider };

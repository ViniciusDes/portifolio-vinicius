import { SetStateInterface } from "@/interfaces/global";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

const HeaderContext = createContext<IHeaderProvider>({} as IHeaderProvider);

interface IHeaderProvider {
  isOpenMenu: boolean;
  setIsOpenMenu: SetStateInterface<boolean | any>;
}

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const values = useMemo(
    () => ({
      isOpenMenu: isOpenMenu,
      setIsOpenMenu: () => setIsOpenMenu(!isOpenMenu),
    }),
    [isOpenMenu]
  );
  return (
    <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(HeaderContext);
  return context;
};

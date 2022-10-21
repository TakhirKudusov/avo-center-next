import { Dispatch, SetStateAction } from "react";

const handleWalletConnectClick = (setIsConnectWalletVisible: Dispatch<SetStateAction<boolean>>) => () => {
  setIsConnectWalletVisible((prev) => !prev);
};

export { handleWalletConnectClick };


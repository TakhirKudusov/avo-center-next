import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

const handleUploadClick = (router: NextRouter) => () => {
  router.push('/collections/create-single');
};

const handleCreateNFTClick = () => () => { };

const handleWalletConnectClick = (setIsConnectWalletVisible: Dispatch<SetStateAction<boolean>>) => () => {
  setIsConnectWalletVisible((prev) => !prev);
};

export { handleCreateNFTClick, handleUploadClick, handleWalletConnectClick };

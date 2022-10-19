import { Dispatch, SetStateAction } from "react";

const handleActivation =
  (setActive: Dispatch<SetStateAction<boolean>>) => () => {
    setActive((prev) => !prev);
  };

export { handleActivation };

import React, {useContext} from "react";

export type ModalContextState = {
  onDismiss?: () => void;
  pushToTop: () => void;
}

const ModalContext = React.createContext<undefined | ModalContextState>(undefined);

export const ModalContextProvider = ModalContext.Provider;

export function useModalContext(): ModalContextState {
  const modalContextState = useContext(ModalContext);
  if (modalContextState) {
    return modalContextState;
  } else {
    throw new Error("Can only be used within a modal");
  }
}
import { createContext, useState } from "react";

interface IModalContext {
  modal: boolean;
  modalOpen: () => void;
  modalClose: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  modalOpen: () => {},
  modalClose: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);

  const modalOpen = () => setModal(true);
  const modalClose = () => setModal(false);

  return (
    <ModalContext.Provider value={{ modal, modalOpen, modalClose }}>
      {children}
    </ModalContext.Provider>
  );
};

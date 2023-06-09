interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 left-0 right-0 bottom-0"
        onClick={onClose}
      ></div>
      <div className="w-[40%] max-[1000px]:w-[70%] p-5 rounded bg-white drop-shadow-2xl fixed top-[30px] left-1/2 -translate-x-1/2 ">
        <h3 className="text-2xl text-center mb-2">{title}</h3>
        {children}
        <button
          onClick={onClose}
          className="px-4 pb-1 border my-2 float-right rounded bg-[#EC44B7] hover:bg-[#EE269D] transition ease-in-out delay-150"
        >
          Close
        </button>
      </div>
    </>
  );
}

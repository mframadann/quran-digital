import { ModalProps } from "@/types/components";

const Modal = (props: ModalProps) => {
  return (
    <div className="inset-0 bg-black fixed bg-opacity-20 backdrop-blur-sm px-3 z-50">
      <div className="w-full h-full flex justify-center items-center px-4">
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

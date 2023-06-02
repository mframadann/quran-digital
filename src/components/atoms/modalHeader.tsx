import { ModalHeaderProps } from "@/types/components";
import { XMarkIcon } from "../icons";

const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <div className="w-full xl:py-5 px-5 py-4 border-b-2 flex justify-between items-center">
      <h1 className={`xl:text-xl ${props.className}`}>{props.letterName}</h1>
      <div
        className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
        onClick={props.handleClick}
      >
        <XMarkIcon className="stroke-black fill-black" />
      </div>
    </div>
  );
};

export default ModalHeader;

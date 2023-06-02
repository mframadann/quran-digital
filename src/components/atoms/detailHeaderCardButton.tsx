import { DetailHeaderCardButtonProps } from "@/types/components";

const DetailHeaderCardButton = (props: DetailHeaderCardButtonProps) => {
  return (
    <button
      onClick={props.handleClick}
      className="px-4 py-2 text-xs bg-primary flex items-center justify-center gap-1 rounded-full text-white focus:ring-4 focus:ring-primary focus:ring-opacity-40 transition-all duration-300"
    >
      {props.icon}
      <span>{props.text}</span>
    </button>
  );
};

export default DetailHeaderCardButton;

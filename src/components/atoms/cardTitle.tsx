import { CardTitleProps } from "@/types/components";

const CardTitle = (props: CardTitleProps) => {
  return (
    <div className="flex flex-col leading-5">
      <span className="text-md font-bold">{props.title}</span>
      <span className="text-[10px] font-semibold text-ternary">
        {props.translation}
      </span>
    </div>
  );
};

export default CardTitle;

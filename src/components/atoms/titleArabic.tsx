import { CardTitleLatinProps } from "@/types/components";

const CardTitleLatin = (props: CardTitleLatinProps) => {
  return (
    <div className="flex flex-col leading-5 group-hover:text-primary">
      <span className="text-md font-bold">{props.title}</span>
      <span className="text-[10px] font-semibold text-ternary group-hover:text-primary">
        {props.ayat} Ayat
      </span>
    </div>
  );
};

export default CardTitleLatin;

import { CardLabelProps } from "@/types/components";

const CardLabel = (
  props: CardLabelProps<string | number | React.ReactNode>
) => {
  return (
    <div
      className={` ${
        props.labelHeightType + " " + props.labelWidthType
      } rounded-5 bg-label  rotate-45 text-black flex items-center justify-center group-hover:bg-primary `}
    >
      <span className="-rotate-45 group-hover:font-bold group-hover:text-white text-xs">
        {props.labelValue}
      </span>
    </div>
  );
};

export default CardLabel;

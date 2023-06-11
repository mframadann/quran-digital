import { CardLabelProps } from "@/types/components";

const CardLabel = (
  props: CardLabelProps<string | number | React.ReactNode>
) => {
  return (
    <div
      className={` ${
        props.labelHeightType + " " + props.labelWidthType
      } rounded-5  rotate-45 text-black flex items-center justify-center bg-primary `}
    >
      <span className="-rotate-45 font-bold text-white text-xs">
        {props.labelValue}
      </span>
    </div>
  );
};

export default CardLabel;

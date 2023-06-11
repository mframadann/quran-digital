import { DetailHeaderCardTitleProps } from "@/types/components";

const DetailHeaderCardTitle = (props: DetailHeaderCardTitleProps) => {
  return (
    <div className="leading-3">
      <h1 className="text-xl font-bold">{props.letterName}</h1>
      <span className="text-xs font-semibold text-ternary">
        {props.translation} - {props.ayatCount} Ayat - {props.droppedPlace}
      </span>
    </div>
  );
};

export default DetailHeaderCardTitle;

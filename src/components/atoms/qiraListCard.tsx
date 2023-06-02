import { QiraListCardProps } from "@/types/components";
import CardLabel from "./cardLabel";

const QiraListCard = (props: QiraListCardProps) => {
  return (
    <div className="w-qiraListCardMobile max-w-full h-qiraListCardMobile border border-gray-300 rounded-10 box-border flex items-center gap-4 px-3 group hover:border-primary select-none">
      <CardLabel
        labelHeightType="h-labelQira"
        labelWidthType="w-labelQira"
        labelValue={props.number}
      />
      <span className="text-xs font-bold group-hover:text-primary">
        {props.name}
      </span>
    </div>
  );
};

export default QiraListCard;

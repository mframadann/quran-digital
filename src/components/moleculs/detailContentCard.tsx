import { DetailContentCardProps } from "@/types/components";
import {
  CardLabel,
  DetailContentCardSubtitle,
  DetailHeaderCardButton,
} from "../atoms";
import { PlayIcon } from "../icons";

const DetailContentCard = (props: DetailContentCardProps) => {
  return (
    <div className="w-headerDetailCardOpeningMobile h-auto bg-white rounded-10 shadow-md shadow-[#7090b023] flex justify-between py-4 px-3 border group hover:border-primary hover:shadow-none select-none md:grid md:grid-flow-col">
      <div className="flex md:justify-between md:flex-col md:pb-4">
        <CardLabel
          labelHeightType="h-label"
          labelWidthType="w-label"
          labelValue={`${props.letterNumber + ":" + props.ayatNumber}`}
        />
        <span className="text-xs italic md:text-base hidden md:flex">
          Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
        </span>
      </div>
      <div className="flex-2 flex flex-col gap-2 items-end py-4 max-w-[275px] md:max-w-full">
        <DetailHeaderCardButton text="Play" icon={<PlayIcon />} />
        <span className="text-2xl font-bold text-right md:text-4xl">
          {props.arabicText}
        </span>
        <DetailContentCardSubtitle
          translation={props.translation}
          latinText={props.latinText}
        />
      </div>
    </div>
  );
};

export default DetailContentCard;

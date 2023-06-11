import { DetailHeaderCardProps } from "@/types/components";
import { DetailCardHeaderTitle, DetailHeaderCardButton } from "../atoms";
import { BookIcon, PlayIcon } from "../icons";

const DetailHeaderCard = (props: DetailHeaderCardProps) => {
  return (
    <div className="w-headerDetailCardMobile p-8 rounded-10 bg-white border border-primary flex items-center xl:w-full">
      <div className="flex flex-col gap-2">
        <DetailCardHeaderTitle
          ayatCount={props.ayatCount}
          droppedPlace={props.droppedPlace}
          letterName={props.letterName}
          translation={props.translation}
        />
        <div className="flex gap-2 ">
          <DetailHeaderCardButton
            text="Dengarkan"
            icon={<PlayIcon />}
            handleClick={props.showPlayModal}
          />
          <DetailHeaderCardButton
            text="Deskripsi surat"
            icon={<BookIcon />}
            handleClick={props.showDetailModal}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailHeaderCard;

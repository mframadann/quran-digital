import { DetailHeaderCardProps } from "@/types/components";
import { DetailCardHeaderTitle, DetailHeaderCardButton } from "../atoms";
import { BookIcon, PlayIcon } from "../icons";

const DetailHeaderCard = (props: DetailHeaderCardProps) => {
  return (
    <div className="w-headerDetailCardMobile p-8 rounded-10 bg-white shadow-md shadow-[#7090b023] flex items-center xl:w-full">
      <div className="flex flex-col gap-2">
        <DetailCardHeaderTitle />
        <div className="flex gap-2 ">
          <DetailHeaderCardButton
            text="Play"
            icon={<PlayIcon />}
            handleClick={props.showPlayModal}
          />
          <DetailHeaderCardButton
            text="Deskripsi"
            icon={<BookIcon />}
            handleClick={props.showDetailModal}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailHeaderCard;

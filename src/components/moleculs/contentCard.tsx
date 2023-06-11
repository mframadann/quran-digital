import { ContentCardProps } from "@/types/components";
import { CardLabel, CardTitle, CardTitleLatin } from "../atoms";

const ContentCard = (props: ContentCardProps) => {
  return (
    <a href={`/read?number=${props.data.nomor}`}>
      <div className="w-full h-homepageCardMobile group bg-white rounded-10 box-border px-cardX flex items-center justify-between border border-primary  cursor-pointer">
        <div className="flex gap-5">
          <CardLabel
            labelHeightType="h-label"
            labelWidthType="w-label"
            labelValue={props.data?.nomor}
          />
          <CardTitle
            title={`${props.data?.namaLatin}`}
            translation={`${props.data?.arti}`}
          />
        </div>
        <CardTitleLatin
          title={`${props.data?.nama}`}
          ayat={props.data.jumlahAyat}
        />
      </div>
    </a>
  );
};

export default ContentCard;

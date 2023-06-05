import { CardLabel, CardTitle, CardTitleLatin } from "../atoms";

const ContentCard = ({
  data,
}: {
  data: {
    nomor: number;
    nama: string;
    namaLatin: string;
    arti: string;
    jumlahAyat: number;
  };
}) => {
  return (
    <div className="w-full h-homepageCardMobile group bg-white shadow-md shadow-[#7090b023] rounded-10 box-border px-cardX flex items-center justify-between border  hover:border-primary hover:shadow-none cursor-pointer">
      <div className="flex gap-5">
        <CardLabel
          labelHeightType="h-label"
          labelWidthType="w-label"
          labelValue={data?.nomor}
        />
        <CardTitle title={`${data?.namaLatin}`} translation={`${data?.arti}`} />
      </div>
      <CardTitleLatin title={`${data?.nama}`} ayat={data.jumlahAyat} />
    </div>
  );
};

export default ContentCard;

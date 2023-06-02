import { CardLabel, CardTitle, CardTitleLatin } from "../atoms";

const ContentCard = () => {
  return (
    <div className="w-homepageCardMobile h-homepageCardMobile group bg-white shadow-md shadow-[#7090b023] rounded-10 box-border px-cardX flex items-center justify-between border  hover:border-primary hover:shadow-none">
      <div className="flex gap-5">
        <CardLabel
          labelHeightType="h-label"
          labelWidthType="w-label"
          labelValue={1}
        />
        <CardTitle title="Al-Fatihah" translation="Pembuka" />
      </div>
      <CardTitleLatin title="الفاتحة" ayat={7} />
    </div>
  );
};

export default ContentCard;

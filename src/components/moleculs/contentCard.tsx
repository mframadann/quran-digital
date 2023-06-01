const ContentCard = () => {
  return (
    <div className="w-homepageCardMobile h-homepageCardMobile group bg-white shadow-md shadow-[#7090b023] rounded-10 box-border px-cardX flex items-center justify-between hover:outline hover:outline-primary hover:shadow-none">
      <div className="flex gap-5">
        <div className="w-label h-label rounded-5 bg-label  rotate-45 text-black flex items-center justify-center group-hover:bg-primary ">
          <span className="-rotate-45 group-hover:font-bold group-hover:text-white">
            1
          </span>
        </div>
        <div className="flex flex-col leading-5">
          <span className="text-md font-bold">Al-Fatihah</span>
          <span className="text-[10px] font-semibold text-ternary">
            Pembukaan
          </span>
        </div>
      </div>
      <div className="flex flex-col leading-5 group-hover:text-primary">
        <span className="text-md font-bold">الفاتحة</span>
        <span className="text-[10px] font-semibold text-ternary group-hover:text-primary">
          7 Ayat
        </span>
      </div>
    </div>
  );
};

export default ContentCard;

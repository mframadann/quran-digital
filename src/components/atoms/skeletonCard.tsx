const SkeletonCard = () => {
  return (
    <div className="w-full h-detailCardContentMobile rounded-10 border border-primary flex p-4 gap-3 bg-white">
      <div className="w-full flex-1">
        <div className="w-label h-label rounded-5  rotate-45 text-black flex items-center justify-center bg-gray-200 animate-pulse">
          <span className="-rotate-45 font-bold text-white text-xs"></span>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-3 items-end py-4">
        <button className="w-16 h-6 text-sm text-white font-semibold bg-gray-200 rounded-full animate-pulse"></button>
        <div className="w-2/3 h-3 rounded-full bg-gray-200"></div>
        <div className="w-1/2 h-3 rounded-full bg-gray-200"></div>
        <div className="w-3/5 h-3 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;

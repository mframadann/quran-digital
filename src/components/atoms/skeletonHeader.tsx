const SkeletonHeader = () => {
  return (
    <>
      <div className="w-full bg-white border-primary border rounded-10 p-4 flex flex-col gap-2">
        <div className="w-2/3 rounded-10 h-3 bg-gray-200 animate-pulse"></div>
        <div className="flex gap-2">
          <div className="w-1/6 rounded-10 h-3 bg-gray-200 animate-pulse"></div>
          <div className="w-1/6 rounded-10 h-3 bg-gray-200 animate-pulse"></div>
          <div className="w-1/6 rounded-10 h-3 bg-gray-200 animate-pulse"></div>
        </div>
        <div className="flex gap-2">
          <button className="w-16 h-6 text-sm text-white font-semibold bg-gray-200 rounded-full animate-pulse"></button>
          <button className="w-16 h-6 text-sm text-white font-semibold bg-gray-200 rounded-full animate-pulse"></button>
        </div>
      </div>
      <div className="w-full h-20 rounded-10 border border-primary md:col-span-3 flex items-center justify-center flex-col gap-2 bg-white">
        <div className="w-1/2 h-3 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="w-1/3 h-3 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
    </>
  );
};

export default SkeletonHeader;

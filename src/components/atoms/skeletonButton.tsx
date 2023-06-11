const SkeletonButton = () => {
  return (
    <div className="flex justify-between">
      <button className="w-24 h-8 bg-gray-200 animate-pulse rounded-full"></button>
      <button className="w-24 h-8 bg-gray-200 animate-pulse rounded-full"></button>
    </div>
  );
};

export default SkeletonButton;

import { SkeletonButton, SkeletonCard, SkeletonHeader } from "../atoms";

const DetailLoading = () => {
  return (
    <div className="w-full h-full max-w-7xl mx-auto pt-28 px-4 flex flex-col gap-3">
      <div className="w-full grid grid-flow-row md:grid-flow-col md:gap-6 gap-3">
        <SkeletonHeader />
      </div>
      <div className="w-full grid grid-flow-row md:gap-6 gap-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <SkeletonButton />
    </div>
  );
};

export default DetailLoading;

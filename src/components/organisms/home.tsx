import { HomePageCompProps } from "@/types/components";
import { SearchIcon } from "../icons";
import { ContentCard } from "../moleculs";

const HomePageComponent = (data: HomePageCompProps) => {
  return (
    <div className="w-full max-w-7xl h-full bg- box-border p-4">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end lg:flex-row lg:justify-between lg:items-end xl:flex-row gap-6 xl:justify-between xl:items-end">
          {/* Header */}
          <div className="px-4 pt-12 box-border">
            <div className="w-full max-w-xs flex flex-col gap-2 md:max-w-sm">
              <h1 className="text-2xl font-bold md:text-4xl">E - Al Qur`an</h1>
              <p className="text-sm text-ternary font-medium md:text-base ">
                “Sebaik-baik kalian adalah orang yang belajar Al-Qur`an dan
                mengajarkannya.” (HR. Tirmidzi)
              </p>
            </div>
          </div>
          {/* end header */}
          {/* Search box */}
          <button className="w-searchFormMobile h-searchFormMobile bg-white shadow-md shadow-[#7090b023] rounded-full flex px-5 items-center gap-3">
            <SearchIcon />
            <span className="text-xs font-medium text-ternary">
              Surat apa yang ingin kamu baca sekarang?
            </span>
          </button>
          {/* end searchbox */}
        </div>
        {/* content */}
        <div className="w-full grid grid-flow-row grid-rows-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3">
          {data &&
            data.data.map((data, i) => (
              <>
                <ContentCard key={i} data={data} />
              </>
            ))}
        </div>
        {/* end content */}
      </div>
    </div>
  );
};

export default HomePageComponent;

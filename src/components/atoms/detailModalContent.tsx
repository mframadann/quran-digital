import { DetailModalContentProps } from "@/types/components";

const DetailModalContent = (props: DetailModalContentProps) => {
  return (
    <div className="w-full px-2 py-3">
      <div className="w-full max-h-[245px] xl:max-h-full px-2 overflow-y-auto">
        <div className="w-full text-justify md:text-left xl:text-sm text-sm flex gap-3 flex-col font-medium">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DetailModalContent;

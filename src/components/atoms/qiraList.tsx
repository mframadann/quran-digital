import { QiraListProps } from "@/types/components";

const QiraListWrapper = (props: QiraListProps) => {
  return (
    <div className="w-full h-full max-h-qiraListParent px-5 overflow-y-scroll">
      <div className="w-full h-full grid grid-rows-1 gap-3">
        {props.children}
      </div>
    </div>
  );
};

export default QiraListWrapper;

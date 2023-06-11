import { DetailContentCardSubtitleProps } from "@/types/components";

const DetailContentCardSubtitle = (props: DetailContentCardSubtitleProps) => {
  return (
    <div className=" text-right flex flex-col gap-2">
      <span className="text-xs italic text-ternary md:text-base">
        {props.latinText}
      </span>
      <hr />
      <span className="text-xs italic md:text-base">{props.translation}</span>
    </div>
  );
};

export default DetailContentCardSubtitle;

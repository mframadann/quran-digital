import { DetailHeaderCardTitleProps } from "../atoms";

type DetailHeaderCardProps = DetailHeaderCardTitleProps & {
  showDetailModal: () => void;
  showPlayModal: () => void;
};

export default DetailHeaderCardProps;

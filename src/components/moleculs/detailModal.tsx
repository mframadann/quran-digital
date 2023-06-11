import { DetailModalProps } from "@/types/components";
import { DetailModalContent, Modal, ModalHeader } from "../atoms";
import parse from "html-react-parser";

const DetailModal = (props: DetailModalProps) => {
  return (
    <Modal>
      <div className="h-modalDetailMobile xl:w-modalDetailDekstop md:max-h-max md:h-max bg-white rounded-10 box-border">
        <ModalHeader
          handleClick={props.handleClick}
          letterName={props.letterName}
        />
        <DetailModalContent>
          {props.letterBody && parse(props.letterBody)}
        </DetailModalContent>
      </div>
    </Modal>
  );
};
export default DetailModal;

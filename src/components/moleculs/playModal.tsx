import { PlayModalProps } from "@/types/components";
import {
  Modal,
  ModalFooter,
  ModalHeader,
  QiraListWrapper,
  QiraListCard,
} from "../atoms";

const PlayModal = (props: PlayModalProps) => {
  return (
    <Modal>
      <div className="w-modalPlayAudioMobile bg-white rounded-10 box-border overflow-hidden">
        <ModalHeader
          letterName="Dengarkan surat: Al-Fatihah"
          className="text-sm"
          handleClick={props.handleClick}
        />
        <div className="w-full h-full flex pt-5 gap-3 box-border flex-col">
          <span className="text-[11px] text-ternary px-5">
            Pilih pembaca untuk mendengarkkan bacaan.
          </span>
          <QiraListWrapper>
            <QiraListCard name="Abdullah-Al-Juhany" number={1} />
            <QiraListCard name="Abdul-Muhsin-Al-Qasim" number={2} />
            <QiraListCard name="Abdurrahman-as-Sudais" number={3} />
            <QiraListCard name="Abdullah-Al-Juhany" number={4} />
          </QiraListWrapper>
          <ModalFooter />
        </div>
      </div>
    </Modal>
  );
};

export default PlayModal;

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
            {/* <QiraListCard name="Abdullah-Al-Juhany" number={1} />
            <QiraListCard name="Abdul-Muhsin-Al-Qasim" number={2} />
            <QiraListCard name="Abdurrahman-as-Sudais" number={3} />
            <QiraListCard name="Abdullah-Al-Juhany" number={4} /> */}
            <select className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Pilih pembaca untuk mendengarkan</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </QiraListWrapper>
          <ModalFooter />
        </div>
      </div>
    </Modal>
  );
};

export default PlayModal;

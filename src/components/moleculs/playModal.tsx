import { PlayModalProps } from "@/types/components";
import {
  Modal,
  ModalFooter,
  ModalHeader,
  QiraListWrapper,
  QiraListCard,
} from "../atoms";
import { toast } from "react-toastify";

const PlayModal = (props: PlayModalProps) => {
  const keyList = ["one", "two", "three", "four", "five"];
  const autioCount = Object.entries({ ...props.audioFull });
  const newAudioStruct = Object.create(null);

  for (let i = 0; i < keyList.length; i++) {
    newAudioStruct[keyList[i]] = autioCount[i][1];
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.setAudio(e.target.qira.value);
  };

  return (
    <>
      <Modal>
        <div className="w-modalPlayAudioMobile md:w-modalPlayAudioDekstop bg-white rounded-10 box-border overflow-hidden">
          <ModalHeader
            letterName="Dengarkan surat: Al-Fatihah"
            className="text-sm"
            handleClick={props.handleClick}
          />
          <div className="w-full h-full flex pt-5 gap-3 box-border flex-col">
            <span className="text-[11px] text-ternary px-5">
              Pilih pembaca untuk mendengarkkan bacaan.
            </span>
            <form onSubmit={handleSubmit}>
              <QiraListWrapper>
                <select
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  name="qira"
                >
                  <option selected>Pilih pembaca untuk mendengarkan</option>
                  {Object.values(newAudioStruct).map((audio, i) => (
                    <option value={String(audio)} key={i}>
                      {String(audio).split("/")[4]}
                    </option>
                  ))}
                </select>
              </QiraListWrapper>
              <ModalFooter />
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PlayModal;

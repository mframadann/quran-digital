import { DetailModalProps } from "@/types/components";
import { DetailModalContent, Modal, ModalHeader } from "../atoms";

const DetailModal = (props: DetailModalProps) => {
  return (
    <Modal>
      <div className="h-modalDetailMobile xl:h-modalDetailDekstop xl:max-h-modalDetailDekstop xl:w-modalDetailDekstop bg-white rounded-10 box-border">
        <ModalHeader
          handleClick={props.handleClick}
          letterName={props.letterName}
        />
        <DetailModalContent>
          <p>
            Surat Al Faatihah (Pembukaan) yang diturunkan di Mekah dan terdiri
            dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap
            diantara surat-surat yang ada dalam Al Quran dan termasuk golongan
            surat Makkiyyah. Surat ini disebut Al Faatihah (Pembukaan), karena
            dengan surat inilah dibuka dan dimulainya Al Quran.
          </p>
          <p>
            Dinamakan Ummul Quran (induk Al Quran) atau Ummul Kitaab (induk Al
            Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan
            karena itu diwajibkan membacanya pada tiap-tiap sembahyang.
          </p>
          <p>
            Dinamakan pula As Sab`ul matsaany (tujuh yang berulang-ulang) karena
            ayatnya tujuh dan dibaca berulang-ulang dalam sholat.
          </p>
          <p>
            Dinamakan pula As Sab`ul matsaany (tujuh yang berulang-ulang) karena
            ayatnya tujuh dan dibaca berulang-ulang dalam sholat.
          </p>
        </DetailModalContent>
      </div>
    </Modal>
  );
};
export default DetailModal;

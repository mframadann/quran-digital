import { DetailModalProps } from "@/types/components";
import { XMarkIcon } from "../icons";

const DetailModal = (props: DetailModalProps) => {
  const { letterName, letterBody, handleClick } = props;
  return (
    <div className="inset-0 bg-black fixed bg-opacity-20 backdrop-blur-sm px-3">
      <div className="w-full h-full flex justify-center items-center px-4">
        <div className="h-modalDetailMobile xl:h-modalDetailDekstop xl:max-h-modalDetailDekstop xl:w-modalDetailDekstop bg-white rounded-10 box-border">
          <div className="w-full xl:py-5 px-5 py-4 border-b-2 flex justify-between items-center">
            <h1 className="xl:text-xl text-base">Surat {letterName}</h1>
            <div
              className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
              onClick={handleClick}
            >
              <XMarkIcon className="stroke-black fill-black" />
            </div>
          </div>
          <div className="w-full px-2 py-3 h-[255px] xl:h-[290px] xl:max-h-full">
            <div className="w-full max-h-[245px] xl:max-h-full px-2 overflow-y-scroll">
              <div className="w-full text-justify md:text-left xl:text-sm text-sm flex gap-3 flex-col font-medium">
                <p>
                  Surat Al Faatihah (Pembukaan) yang diturunkan di Mekah dan
                  terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan
                  dengan lengkap diantara surat-surat yang ada dalam Al Quran
                  dan termasuk golongan surat Makkiyyah. Surat ini disebut Al
                  Faatihah (Pembukaan), karena dengan surat inilah dibuka dan
                  dimulainya Al Quran.
                </p>
                <p>
                  Dinamakan Ummul Quran (induk Al Quran) atau Ummul Kitaab
                  (induk Al Kitaab) karena dia merupakan induk dari semua isi Al
                  Quran, dan karena itu diwajibkan membacanya pada tiap-tiap
                  sembahyang.
                </p>
                <p>
                  Dinamakan pula As Sab`ul matsaany (tujuh yang berulang-ulang)
                  karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailModal;

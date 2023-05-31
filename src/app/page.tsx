"use client";
import { XMarkIcon } from "@/components/icons";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      {showModal && (
        <div className="inset-0 bg-black fixed bg-opacity-20 backdrop-blur-sm px-3">
          <div className="w-full h-full flex justify-center items-center px-4">
            <div className="md:w-modalDetailDekstop md:h-modalDetailDekstop xl:h-modalDetailDekstop xl:max-h-modalDetailDekstop max-h-modalDetailMobile bg-white rounded-md box-border">
              <div className="w-full xl:px-7 xl:py-6 px-5 py-4 border-b-2 flex justify-between items-center">
                <h1 className="xl:text-xl text-base font-semibold ">
                  Surat Al-Fatihah
                </h1>
                <div
                  className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
                  onClick={(): void => setShowModal(!showModal)}
                >
                  <XMarkIcon className="stroke-black fill-black" />
                </div>
              </div>
              <div className="w-full px-5 pt-3 pb-4 ">
                <div className="w-full h-full overflow-y-scroll max-h-[222px] md:max-h-full xl:max-h-full xl:overflow-y-auto text-justify md:text-left xl:text-sm text-xs flex gap-3 flex-col font-medium">
                  <p>
                    Surat Al Faatihah (Pembukaan) yang diturunkan di Mekah dan
                    terdiri dari 7 ayat adalah surat yang pertama-tama
                    diturunkan dengan lengkap diantara surat-surat yang ada
                    dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat
                    ini disebut Al Faatihah (Pembukaan), karena dengan surat
                    inilah dibuka dan dimulainya Al Quran.
                  </p>
                  <p>
                    Dinamakan Ummul Quran (induk Al Quran) atau Ummul Kitaab
                    (induk Al Kitaab) karena dia merupakan induk dari semua isi
                    Al Quran, dan karena itu diwajibkan membacanya pada
                    tiap-tiap sembahyang.
                  </p>
                  <p>
                    Dinamakan pula As Sab`ul matsaany (tujuh yang
                    berulang-ulang) karena ayatnya tujuh dan dibaca
                    berulang-ulang dalam sholat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className="px-12 py-4 bg-primary rounded-full text-white font-bold focus:ring-4 focus:ring-primary focus:ring-opacity-40 transition-all duration-300"
        onClick={(): void => setShowModal(!showModal)}
      >
        Show modal
      </button>
    </main>
  );
}

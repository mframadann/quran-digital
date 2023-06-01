"use client";
import { XMarkIcon } from "@/components/icons";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="w-full h-[100vh] flex justify-center items-center transition-all duration-500">
      {showModal && (
        <div className="inset-0 bg-black fixed bg-opacity-20 backdrop-blur-sm px-3">
          <div className="w-full h-full flex justify-center items-center px-4">
            <div className="h-modalDetailMobile xl:h-modalDetailDekstop xl:max-h-modalDetailDekstop xl:w-modalDetailDekstop bg-white rounded-10 box-border">
              <div className="w-full xl:py-5 px-5 py-4 border-b-2 flex justify-between items-center">
                <h1 className="xl:text-xl text-base">Surat Al-Fatihah</h1>
                <div
                  className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
                  onClick={(): void => setShowModal(!showModal)}
                >
                  <XMarkIcon className="stroke-black fill-black" />
                </div>
              </div>
              <div className="w-full px-4 py-3 overflow-y-scroll max-h-[255px]">
                <div className="w-full max-h-full text-justify md:text-left xl:text-sm text-xs flex gap-3 flex-col font-medium">
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

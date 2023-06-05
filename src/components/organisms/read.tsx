"use client";
import { useState } from "react";
import {
  DetailCardOpening,
  DetailContentCard,
  DetailHeaderCard,
  DetailModal,
  PlayModal,
} from "../moleculs";
import { Data } from "@/constans";
import { NextIcon, PrevIcon } from "../icons";

const ReadPagecomponent = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [showPlayList, setShowPlayList] = useState(false);
  return (
    <div className="w-full h-full px-4 pt-28 flex flex-col gap-4  max-w-7xl mx-auto">
      {showPlayList && (
        <PlayModal handleClick={(): void => setShowPlayList(!showPlayList)} />
      )}
      {showDetail && (
        <DetailModal
          handleClick={(): void => setShowDetail(!showDetail)}
          letterName="Surat Al-Fatihah"
        />
      )}
      <section className="w-full h-full px-2 box-border flex flex-col gap-4 md:grid md:grid-flow-col">
        <DetailHeaderCard
          showDetailModal={(): void => setShowDetail(!showDetail)}
          showPlayModal={(): void => setShowPlayList(!showPlayList)}
        />
        <DetailCardOpening />
      </section>
      <section className="w-full h-full flex flex-col gap-3 px-2 box-border">
        {Data?.ayat?.map((ayat, i) => (
          <DetailContentCard
            key={i}
            ayatNumber={ayat.nomorAyat}
            letterNumber={1}
            arabicText={ayat.teksArab}
            latinText={ayat.teksLatin}
            translation={ayat.teksIndonesia}
          />
        ))}
      </section>
      <section className="w-full flex items-center justify-between pb-6 pt-2 px-4">
        <button
          className="bg-primary px-4 py-3 text-xs font-bold rounded-full text-white flex gap-2 items-center focus:ring-4 focus:ring-primary focus:ring-opacity-40 disabled:bg-opacity-50"
          disabled={true}
        >
          <PrevIcon />
          Sebelumnya
        </button>
        <button className="bg-primary px-4 py-3 text-xs font-bold rounded-full text-white flex gap-2 items-center focus:ring-4 focus:ring-primary focus:ring-opacity-40">
          Selanjutnya
          <NextIcon />
        </button>
      </section>
    </div>
  );
};

export default ReadPagecomponent;

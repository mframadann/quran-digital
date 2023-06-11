"use client";
import { ReadPagecomponent } from "@/components";
import DetailLoading from "@/components/moleculs/DetailLoading";
import { GetLetterByNumber } from "@/services";
import { LetterStateProps, ReadPageProps } from "@/types/pages";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const router = useRouter();
  const [letter, setLetter] = useState<LetterStateProps>();
  const [loading, setLoading] = useState<boolean>(true);

  const GetDetailLetterById = async () => {
    const response = await GetLetterByNumber({
      letterNumber: router.query.number,
    });
    setLetter(response);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    if (router.isReady) {
      GetDetailLetterById();
    }
  }, [router.isReady, router.query.number]);

  if (loading) {
    return (
      <main className="w-full bg-home">
        <DetailLoading />
      </main>
    );
  }

  return (
    <main className="w-full h-[100vh] bg-home">
      <ReadPagecomponent
        ayat={letter?.ayat}
        nextLetter={letter?.suratSelanjutnya}
        prevLetter={letter?.suratSebelumnya}
        deskripsi={`${letter?.deskripsi}`}
        arti={`${letter?.arti}`}
        jumlahAyat={letter?.jumlahAyat}
        namaLatin={`${letter?.namaLatin}`}
        tempatTurun={`${letter?.tempatTurun}`}
        nomor={letter?.nomor}
      />
    </main>
  );
};

export default DetailPage;

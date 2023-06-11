"use client";
import { DetailLoading, ReadPagecomponent } from "@/components";
import { GetLetterByNumber } from "@/services";
import { LetterStateProps, ReadPageProps } from "@/types/pages";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const router = useRouter();
  const [letter, setLetter] = useState<LetterStateProps>();
  const [loading, setLoading] = useState<boolean>(true);

  const GetDetailLetterById = async () => {
    setLoading(true);
    const response = await GetLetterByNumber({
      letterNumber: router.query.number,
    });
    setLetter(response);
    setLoading(false);
  };

  useEffect(() => {
    if (router.isReady) {
      GetDetailLetterById();
    }
  }, [router.isReady, router.query.number]);

  if (loading) {
    return <DetailLoading />;
  }

  return (
    <main className="w-full h-[100vh] bg-white">
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
        audioFull={letter?.audioFull}
      />
    </main>
  );
};

export default DetailPage;

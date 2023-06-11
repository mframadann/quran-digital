type ReadPageProps = {
  namaLatin: string;
  arti: string;
  jumlahAyat: number | undefined;
  tempatTurun: string;
  nomor: number | undefined;
  deskripsi: string;

  ayat:
    | {
        nomorAyat: number;
        teksArab: string;
        teksLatin: string;
        teksIndonesia: string;
        audio: {
          "01": string;
          "02": string;
          "03": string;
          "04": string;
          "05": string;
        };
      }[]
    | undefined;
  nextLetter:
    | {
        nomor: number;
        nama: string;
        namaLatin: string;
        jumlahAyat: number;
      }
    | undefined;
  prevLetter:
    | {
        nomor: number;
        nama: string;
        namaLatin: string;
        jumlahAyat: number;
      }
    | undefined;
};

export default ReadPageProps;

export type LetterStateProps = ReadPageProps & {
  suratSelanjutnya: {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
  };
  suratSebelumnya: {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
  };
};

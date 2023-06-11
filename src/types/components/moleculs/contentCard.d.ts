type ContentCardProps = {
  data: {
    nomor: number;
    nama: string;
    namaLatin: string;
    arti: string;
    jumlahAyat: number;
  };
  handleClick?: () => void;
};

export default ContentCardProps;

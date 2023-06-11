import axios from "axios";

export default async function GetLetterByNumber({
  letterNumber,
}: {
  letterNumber: string | string[] | undefined;
}) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}surat/${letterNumber}`
  );
  return response.data.data;
}

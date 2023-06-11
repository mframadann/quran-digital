import { GetAllDataProps } from "@/types/services";
import axios from "axios";

export default async function GetAllData(): Promise<GetAllDataProps> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}surat`);
  return response.data;
}

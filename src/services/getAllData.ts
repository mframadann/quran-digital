import { GetAllDataProps } from "@/types/services";
import axios from "axios";

export default async function GetAllData(): Promise<GetAllDataProps | void> {
  try {
    const response = await axios.get(`https://equran.id/api/v2/surat`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

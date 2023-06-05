import { HomePageComponent } from "@/components";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";

export default async function Home() {
  const data = await axios.get("https://equran.id/api/v2/surat", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return (
    <main className="w-full h-[100vh] flex justify-center gap-4 items-center transition-all duration-500">
      <HomePageComponent data={data.data.data} />
    </main>
  );
}

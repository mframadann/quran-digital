import { HomePageComponent } from "@/components";
import { GetAllData } from "@/services";
import { HomePageProps } from "@/types/pages";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const response = await GetAllData();
  return {
    props: { lettersData: response.data },
  };
};

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main className="w-full h-full bg-home">
      <HomePageComponent data={props.lettersData} />
    </main>
  );
};

export default Home;

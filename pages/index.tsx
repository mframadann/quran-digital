import { HomePageComponent } from "@/components";
import DevPage from "@/components/organisms/devPage";
import { GetAllData } from "@/services";
import { HomePageProps } from "@/types/pages";
import { GetStaticProps, InferGetStaticPropsType } from "next";

// export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
//   const response = await GetAllData();
//   return {
//     props: { lettersData: response.data },
//   };
// };

// const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
//   return (
//     <main className="w-full h-full bg-white">
//       <HomePageComponent data={props.lettersData} />
//     </main>
//   );
// };

const Home = () => {
  return <DevPage />;
};

export default Home;

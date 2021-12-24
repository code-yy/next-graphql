import { HomeLayout } from "src/components/layout/HomeLayout";
import { Index } from "src/components/page/index";

const HomePage = () => {
  return <Index />;
};

HomePage.getLayout = HomeLayout;

export default HomePage;

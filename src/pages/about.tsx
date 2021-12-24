import { AboutLayout } from "src/components/layout/AboutLayout";
import { About } from "src/components/page/about";

const AboutPage = () => {
  return <About />;
};

AboutPage.getLayout = AboutLayout;

export default AboutPage;

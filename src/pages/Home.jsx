import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Work Loom | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
    </div>
  );
};

export default Home;

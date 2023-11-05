import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import Employees from "../components/Home/Employees";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Work Loom | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <Employees></Employees>
    </div>
  );
};

export default Home;

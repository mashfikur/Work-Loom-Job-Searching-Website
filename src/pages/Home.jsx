import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import Employees from "../components/Home/Employees";
import JobAlerts from "../components/Home/JobAlerts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Work Loom | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <Employees></Employees>
      <JobAlerts></JobAlerts>
    </div>
  );
};

export default Home;

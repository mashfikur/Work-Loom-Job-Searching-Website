import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="flex items-center justify-center">
      <Tabs
        className={"text-xl font-inter "}
        disableUpDownKeys={true}
        selectedTabClassName="active-tab"
      >
        <TabList>
          <Tab>On Site</Tab>
          <Tab>Remote</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part Time</Tab>
        </TabList>

        <div className="my-12">
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;

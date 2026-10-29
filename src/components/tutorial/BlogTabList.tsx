import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const BlogTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          All
        </Tab>
        <Tab index={1} variant="desktop">
          AI & Agents
        </Tab>
        <Tab index={2} variant="desktop">
          Automation
        </Tab>
        <Tab index={3} variant="desktop">
          Web & Apps
        </Tab>
        <Tab index={4} variant="desktop">
          UI/UX & Design
        </Tab>
        <Tab index={5} variant="desktop">
          Cloud & APIs
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          All
        </Tab>
        <Tab index={1} variant="mobile" className="text-nowrap">
          AI & Agents
        </Tab>
        <Tab index={2} variant="mobile" className="text-nowrap">
          Automation
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          Web & Apps
        </Tab>
        <Tab index={4} variant="mobile" className="text-nowrap">
          UI/UX & Design
        </Tab>
        <Tab index={5} variant="mobile" className="text-nowrap">
          Cloud & APIs
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default BlogTabList;

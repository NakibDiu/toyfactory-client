import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toy from "./Toy";
const Shop = () => {
  const categories = [
    "Avengers",
    "Spider-Man",
    "X-Men",
    "Black Panther",
    "Doctor Strange",
    "Guardians of the Galaxy",
    "Captain Marvel",
    "Ant-Man",
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const [toys, setToys] = useState(null);
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_backendUrl;

  const handleTabSelect = (index) => {
    setSelectedTab(index);
    const category = categories[index];
    setLoading(true);
    fetch(`${backendUrl}/toys/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleTabSelect(0);
  }, []);

  return (
    <div className="mb-20 space-y-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-600">
        Shop
      </h1>
      <div className="xl:max-w-[1200px] xl:mx-auto mx-6 lg:mx-10">
        <Tabs onSelect={handleTabSelect} selectedIndex={selectedTab}>
          <TabList>
            {categories.map((cat, index) => (
              <Tab key={index}>{cat}</Tab>
            ))}
          </TabList>
          {categories.map((cat, index) => (
            <TabPanel key={index}>
              {loading && (
                <div className="min-h-[250px]">
                  <h1 className="text-2xl text-center font-bold">Loading</h1>
                </div>
              )}
              {toys && (
                <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
                  {toys.map((toy) => (
                    <Toy key={toy?._id} toy={toy} />
                  ))}
                </div>
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;

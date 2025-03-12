import { useState, useEffect } from "react";
import Card from "./Card";

export default function TabComponent() {
  //State for managing active tab
  const [activeTab, setActiveTab] = useState("All");

  //State for managing coffee list
  const [coffeeList, setCoffeeList] = useState([]);

  //Fetch coffee list API
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffeeList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //function to handle tab change
  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  //Filter coffee list based on availability
  const filteredCoffeeList =
    activeTab === "Available Now"
      ? coffeeList.filter((coffee) => coffee.available)
      : coffeeList;

  //Create card component based on filtered coffee list
  const cardComponent = filteredCoffeeList.map((coffee) => {
    return <Card key={coffee.id} coffee={coffee} />;
  });

  return (
    <>
      <div className="relative min-h-screen bg-custom-radial bg-fixed bg-center p-16">
        <div className="relative w-4/5 mx-auto bg-white p-8 shadow-lg rounded-lg mt-12 bg-custom">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Our Collection</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={() => handleTabChange("All")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "All" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => handleTabChange("Available Now")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "Available Now"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Available Now
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {cardComponent}
          </div>
        </div>
      </div>
    </>
  );
}

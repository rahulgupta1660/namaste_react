import { useState } from "react";
import { data } from "../utils/data";
import RestaurentCard from "./RestaurantCard";

const Body = () => {
  const [Data, setData] = useState(data);

  const filterByRating = () => {
    setData(data.filter((res) => res.avgRating > 4));
  };

  return (
    <main className="container">
      <div className="filter">
        <button className="filter-btn" onClick={filterByRating}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurents">
        {Data.map((restaurent) => (
          <RestaurentCard key={restaurent?.id} data={restaurent} />
        ))}
      </div>
    </main>
  );
};

export default Body;

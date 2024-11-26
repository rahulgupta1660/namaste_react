import { useEffect, useState } from "react";
import { data } from "../utils/data";
import RestaurentCard from "./RestaurantCard";

const Body = () => {
  const [Data] = useState(data);

  const [FilteredRestaurant, setFilteredRestaurant] = useState(data);

  const [Search, setSearch] = useState("");

  return (
    <main className="container">
      <div className="RatingFilter">
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurant(data.filter((res) => res.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          value={Search}
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setFilteredRestaurant(
              Data.filter((res) =>
                res.name.toLowerCase().includes(Search.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurents">
        {FilteredRestaurant.map((restaurent) => (
          <RestaurentCard key={restaurent?.id} data={restaurent} />
        ))}
      </div>
    </main>
  );
};

export default Body;

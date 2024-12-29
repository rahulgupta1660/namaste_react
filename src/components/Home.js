import { useEffect, useState } from "react";
import RestaurantShimmer from "./RestaurantShimmer";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchterm, setSearchterm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7218106&lng=76.767071&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const { data } = await res.json();
      const { restaurants } =
        data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;
      setRestaurants(restaurants);
      setfilteredRestaurants(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type="text"
        className="border p-2 rounded-md text-sm"
        placeholder="Search..."
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            const searchedRestaurants = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchterm.toLowerCase())
            );
            setfilteredRestaurants(searchedRestaurants);
          }
        }}
      />
      <button
        className="border-2 p-2 mb-1 text-sm rounded-md ml-1"
        onClick={() => {
          const topRated = restaurants.filter(
            (res) => res.info.avgRating > 4.3
          );
          setfilteredRestaurants(topRated);
        }}
      >
        Top Rated Restaurants
      </button>
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-4 gap-y-10">
          {filteredRestaurants.map((restaurant) => {
            const {
              id,
              name,
              areaName,
              cloudinaryImageId,
              avgRatingString,
              cuisines,
              sla,
            } = restaurant.info;
            return (
              <div key={id}>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                  alt={name}
                  className="w-48 h-48 object-cover rounded-md shadow-xl"
                />
                <p className="font-semibold">{name}</p>
                <p>
                  ⭐{avgRatingString}🔸{sla?.slaString}
                </p>
                <div className="text-slate-600">
                  <p>{cuisines.toString()}</p>
                  <p>{areaName}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <RestaurantShimmer />
      )}
    </>
  );
};

export default Home;

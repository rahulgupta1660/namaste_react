import { useEffect, useState } from "react";
import RestaurantShimmer from "./RestaurantShimmer";

const Home = () => {
  let [restaurants, setRestaurants] = useState([]);

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
    } catch (error) {
      console.log(error);
    }
  };

  const topRated = () => {
    const filteredRestaurants = restaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    setRestaurants(filteredRestaurants);
  };
  return (
    <>
      <button
        className="border-2 p-2 mb-1 text-sm rounded-md"
        onClick={topRated}
      >
        Top Rated Restaurants
      </button>
      {restaurants.length > 0 ? (
        <div className="grid grid-cols-4 gap-y-10">
          {restaurants.map((restaurant) => {
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

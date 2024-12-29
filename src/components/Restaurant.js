import { useEffect, useState } from "react";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7218106&lng=76.767071&restaurantId=41350&catalog_qa=undefined&submitAction=ENTER"
    );
    const { data } = await res.json();
    const restaurant = data.cards[2].card.card.info;
    console.log(restaurant);
    setRestaurant(restaurant);
  };

  return (
    <>
      <p>{restaurant?.name}</p>
    </>
  );
};

export default Restaurant;

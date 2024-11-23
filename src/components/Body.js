import { data } from "../utils/data";
import RestaurentCard from "./RestaurantCard";

const Body = () => {
  return (
    <main className="container">
      <div className="search">search</div>
      <div className="restaurents">
        {data.map((restaurent) => (
          <RestaurentCard key={restaurent?.id} data={restaurent} />
        ))}
      </div>
    </main>
  );
};

export default Body;

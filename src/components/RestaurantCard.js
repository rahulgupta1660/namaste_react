import { CDN_URL } from "../utils/constants";

const RestaurentCard = ({ data }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwo } =
    data;
  return (
    <div className="card">
      <img className="card-img" src={`${CDN_URL}/${cloudinaryImageId}`} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>
          {avgRating} <b>. {sla?.slaString}</b>
        </p>
        <p className="cuisines">{cuisines.join(",")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurentCard;

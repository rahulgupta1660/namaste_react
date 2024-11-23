import { CDN_URL } from "../utils/constants";

const RestaurentCard = ({ data }) => {
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    sla,
    cuisines,
    costForTwo,
  } = data;
  return (
    <div className="card">
      <img className="card-img" src={`${CDN_URL}/${cloudinaryImageId}`} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>
          {avgRatingString} <b>. {sla?.slaString}</b>
        </p>
        <p>{cuisines.join(",")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurentCard;

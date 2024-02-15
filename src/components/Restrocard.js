import { CDN_URL } from "../../utils/constants";

const Restrocard = (props) => {
    const {resData} = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      locality
    } = resData?.info;
      return (
          <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-300 hover:scale-105">
              <img className="h-60 rounded-lg" src={CDN_URL + cloudinaryImageId}/>
              <h2 className="font-bold py-1 text-lg">{name}</h2>
              <h3>{cuisines.join(", ")}</h3>
              <h4>{avgRating} stars</h4>
              <h4>{locality}</h4>
              <h4>{resData.info.sla.deliveryTime} minutes</h4>
          </div>
      )
  };

  // Higher order component

  export const withPromotedLabel = (Restrocard) => {
    return () => {
      return(
        <div>
          <label>Promoted</label>
          <Restrocard />
        </div>
      );
    };
  };

  export default Restrocard;
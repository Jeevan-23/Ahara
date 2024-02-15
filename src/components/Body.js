import Restrocard, { withPromotedLabel } from "./Restrocard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";


const Body = () => {

  // const [reslist, setListofreslist] = useFetchData([]);
  // const [filteredres, setoffilterres] = useFetchData([]);
 

  const [reslist, setListofreslist] = useState([]);
  const [filteredres, setoffilterres] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  // const Promotedrestro = withPromotedLabel(Restrocard);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4644085&lng=75.921758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

    const json = await data.json();
    // console.log(json);

    // console.log(json);
    setListofreslist(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setoffilterres(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const OnlineStatus = useOnlineStatus();
  if(OnlineStatus === false) {
    return (
    <h1>
      Looks like you are offline please check your internet connection
    </h1>
    );
  }

  const { setusername, loggedinUser } = useContext(UserContext);
// console.log({filteredres});
 
  return filteredres?.length === 0 ? <Shimmer /> : (
      <div className="body">
          <div className="flex flex-wrap">
            <div className="Search px-4">
              <input type="text" className="border border-solid border-black justify-end px-2" value={searchtext} onChange={(e) => {
                  setsearchtext(e.target.value);
              }}/>
            </div>
            <div>
              <button className="ml-1 px-4 py-1 bg-green-100 rounded-lg" 
              onClick={() => {
                // filter the restro cards and update the ui
                const searh_filter = reslist.filter(res => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                setoffilterres(searh_filter);
              }}>Search</button>
            </div>
            <div>
              <button className="px-4 py-1 ml-2 bg-gray-100 rounded-lg" 
              onClick={() => {
                const filter = reslist.filter(res=>res.info.avgRating > 4.4);
                setListofreslist(filter);
              }}>Top rated restaurants</button>
            </div>
              <div className="mx-4">
                <label>Username: </label>
                <input type="text" className="px-2 ml-4 border border-solid border-black justify-end:" value={loggedinUser} onChange={(e) => {
                  setusername(e.target.value)
                }}/>
              </div>
            
          </div>
          <div className="flex flex-wrap">
            {
              filteredres?.map(info => 
              <Link 
              key={info.info.id} 
              to={"restaurants/"+info.info.id}>
                <Restrocard resData={info}/>
              </Link>)
            }
          </div>
      </div>
  )
}

export default Body;
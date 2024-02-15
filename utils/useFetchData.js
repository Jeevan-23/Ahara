import { useEffect, useState } from "react";

const useFetchData = () => {
    const [reslist, setListofreslist] = useState([]);
    // const [filteredres, setoffilterres] = useState([]);

    useEffect(() => {
        fetchdata();
    },[]);

    const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

    const json = await data.json();

    console.log(json);
    setListofreslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setoffilterres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  return [reslist, setListofreslist];
}

export default useFetchData;
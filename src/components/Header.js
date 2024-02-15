import { useState , useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../../utils/appStore";

const Title = () => (
    <Link to="/">
    <img 
    className="w-24"
    alt="this is a logo" src={LOGO_URL}>    
    </img>
    </Link>
);
const Header = () => {
    const OnlineStatus = useOnlineStatus();
    const {loggedinUser} = useContext(UserContext);
    // subscibing to the store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    // console.log(data);
    const [btn_name, setbtn_name] = useState("Login");
    return (
        <div className="flex justify-between m-2 bg-green-200  border border-solid border-black">
            <Title />
            <div className="flex items-center">
                <ul className="flex p-4 m-4 justify-center">
                    <li className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        Online Status: {OnlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className=" text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        <Link to="/about">About</Link>
                    </li>
                    <li className=" text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className=" text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className=" text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    <Link to="/cart">Cart - ({cartItems.length})</Link>
                    </li>
                    <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" onClick={() => {btn_name === "Login" ? setbtn_name("Logout") : setbtn_name("Login")}}>{btn_name}</button>
                    <li className=" text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        {loggedinUser}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
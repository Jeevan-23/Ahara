import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearcart } from "../../utils/cartslice";

const Carts = () => {
    
    const cartitems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleclearcart = () => {
        dispatch(clearcart());
    }

    return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>    
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleclearcart}>
                Clear Cart</button>
                {cartitems.length === 0 && <h1> Your cart is Empty</h1>}
            <ItemList items={cartitems} />
        </div>
    </div>
    );
};

export default Carts;
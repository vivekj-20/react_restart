import { useSelector , useDispatch} from "react-redux";
import ItemCategory from "./CategoryItems";
import { clearItems } from "../utils/cartSlice";

const Cart = () =>{
   
    const storeItem = useSelector((store) => store.cart.items);

    console.log(storeItem);

    const dispatch = useDispatch();

    const handleClearCart = () => {
      dispatch(clearItems());
    };

    return(
        <div className="text-center">
            <h1 className="font-bold text-2xl">cart</h1>
            <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
            Clear Cart
        </button>
           {storeItem?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
           )}
            <ItemCategory dish={storeItem}/>
          </div>     
        </div>
    )
}

export default Cart;
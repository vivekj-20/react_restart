import { useDispatch , useSelector} from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";
const ItemCategory = ({dish}) => {
    
    const dispatch = useDispatch();
    

    const itemHandler =(itemList)=>{
        dispatch(addItems(itemList));
    }
    
    return(
        <div>
            {dish.map((e) => 
               <div key={e.card.info.id} className="border-b-2 border-gray-300 p-2 m-2 text-left flex justify-between">
                   <div className="w-9/12">
                   <div className="py-2">
                      <span className="font-bold">{e.card.info.name}</span>
                      <span> - ₹ {e.card.info.price ? e.card.info.price/100 : e.card.info.defaultPrice/100}</span>
                   </div>
                      <p className="text-xs">{e.card.info.description}</p>
                   </div>
                   <div className="w-3/12">
                       <div className="absolute">
                           <button className="border border-black bg-black text-white font-bold rounded-lg" 
                           onClick={() => itemHandler(e)}>Add +</button>
                       </div>
                      {e.card.info.imageId && <img className="w-full h-[110px] rounded-lg"src={CDN_URL + e.card.info.imageId}></img>}
                   </div>
               </div>
            )}
        </div>
    )
}
export default ItemCategory;
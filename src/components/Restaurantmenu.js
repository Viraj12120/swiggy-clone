import { useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
//import {MENU_API} from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import { CDN_URL } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const resMenu = useRestaurantMenu(resId);

	const [showIndex, setShowIndex] = useState(1);

	/*  useEffect(()=>{
        fetchMenu();
    },[]);

const fetchMenu= async()=>{
const data=await fetch(MENU_API + resId );
const json=await data.json();
       console.log(json);
       setresMenu(json.data);
};*/
	if (resMenu == null) return <Shimmer />;

	const {
		name,
		cuisines,
		costForTwoMessage,
		locality,
		cloudinaryImageId,
		avgRating,
	} = resMenu?.cards[0]?.card?.card?.info;

	const { itemCards } =
		resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

	const categories =
		resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	console.log(categories);

	return (
		<div className="menu ">
			<div className="bg-orange-200 md:w-full shadow-2xl h-64 justify-center align-middle flex">
				<div className="  flex w-2/12 h[200px] 	 pb-8 mx-96 pt-7 ">
					<img
						className=" rounded-lg w[250px] h[170px]  content-center border-x-4 border-y-4 border-orange-400 mt-3 shadow-lg"
						src={CDN_URL + cloudinaryImageId}
					/>
					<div className="flex flex-col mt-5 mb-5 ml-7 mr-5">
						<h1 className="block justify-center w-96 text-2xl font-bold ">
							{name}
						</h1>
						<p className="whitespace-nowrap w-96 mx-8 text-base font-semibold">
							{locality}
						</p>
						<div className="flex w-80 justify-between align-middle mt-4 pb-2 text-base text">
							<div className="bg-orange-500 rounded  space-x-1 space-y-1 pt-1 pb-1 pl-2 pr-2 flex">
								{avgRating}⭐
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <ul>
            {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name} - {" " + " ₹ "}
            {item.card.info.price/100 ||item.card.info.defaultPrice/100 }
            </li>
        
            ))}
            
        </ul>  */}

			{categories.map((category, index) => (
				<RestaurantCategory
					key={category.card.card.title}
					data={category?.card?.card}
					showItems={index === showIndex ? true : false}
					setShowIndex={() => setShowIndex(index)}
				/>
			))}
		</div>
	);
};
export default RestaurantMenu;

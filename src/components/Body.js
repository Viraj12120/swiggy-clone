import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Body = () => {
	const [listofRestaurants, setlistofRestaurants] = useState([]);

	const [filteredRestaurant, setfilteredRestaurant] = useState([]);

	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

	const [searchText, setsearchText] = useState("");
	useEffect(() => {
		fetchdata();
	}, []);

	const fetchdata = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);

		const json = await data.json();
		console.log(json);

		setlistofRestaurants(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);

		setfilteredRestaurant(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};
	const onlineStatus = useOnlinestatus();
	if (onlineStatus === false)
		return <h3>Looks like you are offline,check internet connection</h3>;
	//conditional rendering
	if (listofRestaurants.length === 0) {
		return <Shimmer />;
	}
	return (
		<div className="body justify-center">
			<div className="filter flex justify-center ">
				<div className="Search m-4 p-4">
					<input
						type="text"
						className="border border-stone-950 "
						value={searchText}
						onChange={(e) => {
							setsearchText(e.target.value);
						}}
					/>

					<button
						className="m-4 px-2 py-0 bg-green-400 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-green-500 duration-300 ..."
						onClick={() => {
							const filteredRestaurant = listofRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);

							setfilteredRestaurant(filteredRestaurant);
						}}>
						Search
					</button>
				</div>
				<div className="flex items-center">
					<button
						className="px-4 py-3/12 bg-blue-300 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-blue-400 duration-300 ..."
						onClick={() => {
							const filterlist = listofRestaurants.filter(
								(res) => res.info.avgRating > 4.0
							);
							setlistofRestaurants(filterlist);
						}}>
						Top Rated Restaurant
					</button>
				</div>
			</div>
			<div className="flex flex-wrap">
				{filteredRestaurant.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={"/restaurant/" + restaurant.info.id}>
						{restaurant.info.promoted ? (
							<RestaurantCardPromoted resData={restaurant} />
						) : (
							<RestaurantCard resData={restaurant} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;

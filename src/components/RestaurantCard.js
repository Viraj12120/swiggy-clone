import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
	const { resData } = props;
	const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, areaName } =
		resData.info; //destructuring of props refer lines 29-32
	return (
		<div className=" w-64 m-4 p-3 rounded-lg  hover:scale-110 shadow-zinc-500  hover:shadow-lg flex-wrap justify-start">
			<img
				className="w-60 h-48 rounded-lg align-middle"
				src={CDN_URL + cloudinaryImageId}
			/>
			<h2 className=" font-bold bg-clip-content truncate break-words text-lg">
				{name}
			</h2>

			<h6 className="cuisines flex-wrap bg-clip-content truncate ">
				{cuisines.join(",")}
			</h6>
			<span className=" flex justify-between">
				<h6>{avgRating}⭐</h6>
				<h2 className=" mx-3 ">•</h2>
				<h2 className="flex items-center text-xs font-semibold mx-2 ">
					{areaName}
				</h2>
				<h2 className="mx-3">•</h2>
				<h4 className="heading text-sm justify-between  text-black font-semibold ">
					{costForTwo ?? "₹200 for two"}
				</h4>
			</span>
		</div>
	);
};
export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label>Promoted</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};
export default RestaurantCard;

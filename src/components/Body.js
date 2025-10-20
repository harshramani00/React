import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

// filteredList = resList;
const Body = () => {
    const [filteredList, setFilteredList] = useState(resList);
    return (
        <div className="body-container">
            <div className="filter-container">
                <button className="filter-btn" 
                onClick={() =>{
                    const filteredListRating = resList.filter(res => res.rating > 4)
                    setFilteredList(filteredListRating);
                    console.log(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
                <button 
                className="filter-btn"
                onClick={() => {
                    setFilteredList(resList);
                }}>
                    All Restaurants
                </button>       
            </div>
            <div className="restaurant-list">
                {filteredList.map((restaurant, index) => <RestaurantCard key={restaurant.id} resdata={restaurant} />)}
            </div>
        </div>
    )
};
export default Body;
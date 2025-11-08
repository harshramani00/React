import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { CLOUDINARY_LINK } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";

// filteredList = resList;
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        console.log(json);
        
        // Extract restaurants array from new API structure
        const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        if (restaurants) {
            // Transform API data to match our component structure
            const restaurantList = restaurants.map(restaurant => ({
                id: restaurant.info.id,
                name: restaurant.info.name,
                image: `${CLOUDINARY_LINK}${restaurant.info.cloudinaryImageId}`,
                cuisine: restaurant.info.cuisines.join(", "),
                rating: restaurant.info.avgRating,
                deliveryTime: restaurant.info.sla.slaString,
                location: restaurant.info.areaName
            }));
            
            setListOfRestaurants(restaurantList);
            setFilteredList(restaurantList);
        }
    };

    return (
        <div className="body-container">
            <div className="filter-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search Restaurants..." 
                    value={searchTerm}
                    onChange={(e) =>{
                        setSearchTerm(e.target.value)
                    }}
                />
                <button className="search-btn"
                onClick={() =>{
                    setFilteredList(listOfRestaurants.filter(res => res.name.toLowerCase().includes(searchTerm.toLowerCase())));
                }}
                >
                    Search
                </button>
                <button className="filter-btn"
                onClick={() =>{
                    setSearchTerm("");
                    setFilteredList(listOfRestaurants);
                }}>
                    Clear
                </button>
                <button className="filter-btn" 
                onClick={() =>{
                    const filteredListRating = listOfRestaurants.filter(res => res.rating > 4)
                    setFilteredList(filteredListRating);
                    console.log(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
                <button 
                className="filter-btn"
                onClick={() => {
                    setFilteredList(listOfRestaurants);
                }}>
                    All Restaurants
                </button>       
            </div>
            <div className="restaurant-list">
                {filteredList.length === 0 ? (
                    <Shimmer />
                ) : (
                    filteredList.map((restaurant, index) => <RestaurantCard key={restaurant.id} resdata={restaurant} />)
                )}
            </div>
        </div>
    )
};
export default Body;
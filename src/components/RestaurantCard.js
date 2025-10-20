const RestaurantCard = (props) => {
    const {resdata} = props
    const {name, cuisine, deliveryTime, rating, image, location} = resdata
    return (
        <div className="restaurant-card">
            <img alt="res-logo" className="res-logo" src={image}/>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>⏱️Delivery Time: {deliveryTime}</h4>
            <h4>Rating: {rating} ⭐</h4>
            <h4>📍Location: {location}</h4>
        </div>
    )
};
export default RestaurantCard;
import { IMAGE_URL } from "../utils/constants";

const RestroCard = (props) =>{
    const {resList}=props //prop is JS object
    // console.log(props);
    const {name,cuisines,costForTwo,avgRating}=resList?.info;
    return (
            <div className='restro-card' style={{backgroundColor:"#f0f0f0"}}>
               <img className='food-img' src={IMAGE_URL+resList.info.cloudinaryImageId} alt="food"/>
               <h3>{name}</h3>
               <h4>{cuisines}</h4>
               <h4>{costForTwo}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{resList.info.sla.deliveryTime} mins</h4>
            </div>
    )
}

export default RestroCard;
import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";


const Body=()=>{
    const[res,setRes]=useState([]);
    useEffect(()=>{
      fetchData();
    },[])

    const fetchData= async ()=>{
      const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.07968840595763&lng=72.62048707301636&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )

      const json =await data.json();

      console.log(json);
      setRes(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }
    return (
            <div className='body'>
               <div className='filter'>
                    <button className="filter-btn" 
                    onClick={()=>{
                      const filteredList=res.filter((rest)=>rest.info.avgRating>4);
                      // console.log("Filtered List:", filteredList);
                      setRes(filteredList);
                      // console.log("Updated State:", res);
                    }}>
                    Top rated Restaurants 
                    </button>
               </div>
               <div className='res-container'>
              
              {res.map((restaurant)=>(
                <RestroCard key={restaurant.info.id} resList={restaurant}/>
              ))}
                    
               </div>
            </div>
    )
}

export default Body;
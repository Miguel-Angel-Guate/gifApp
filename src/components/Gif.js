// import { useState, useEffect } from "react";
import GiftItem from "./GiftItem";
import UseFetchGifs from "../hooks/useFetchGifs";

const Gif = ({category}) => {

const {data: images, loading} = UseFetchGifs(category)
console.log(loading);
    return ( 
        <>
          <h3>{category}</h3>

         {loading && <h3>Loading</h3>}
        
            {images.map(  img => ( 
                
                <GiftItem
                key={img.id} 
                { ...img } 
                />
                
            ))}
        
        </>
     );
}
 
export default Gif;
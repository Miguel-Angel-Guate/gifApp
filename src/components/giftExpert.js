import { useState } from "react";
import AddCategory from "./AddCategory";
import Gif from "./Gif";
const GiftExpert = () => {
    
   const [categories, setCategory] = useState(['hahaha'])
    return ( 
        <>
            <h1>Gif</h1>
            <hr />
                <AddCategory setCategory={setCategory} />
            <ol>
                {categories.map((category, id) => {
                    return <Gif key={id} category={category}/>
                })}
            </ol>
        </>
     );
}
 
export default GiftExpert;
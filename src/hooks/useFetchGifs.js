import { useState, useEffect } from "react";
import { getGifts } from "../helper/getGifts";

const UseFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        setTimeout(() => {
            getGifts(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })
        },2000)
       
    }, [category])


    
    return state
}
 
export default UseFetchGifs;
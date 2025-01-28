import React,{useState} from "react";
import FirstPage from "./FirstPage";
export default function Category(params) {
    let[catagories,setCatagories]=useState([]);

    let showFetch=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then((rs)=>rs.json())
        .then((data)=>setCatagories(data.categories))
        .catch((err)=>console.log(err))
   }
    let clear=()=>{
        setCatagories([]);

    }
    return(
        <>
        <button className="btn btn-primary" onClick={showFetch}>Show data</button>
        <button className="btn btn-primary" onClick={clear}>Hide</button>
        {
            catagories.map((cat,idx)=>(<FirstPage key={idx} meal={cat}/>))
        }
        
        
        </>
    )
    
};

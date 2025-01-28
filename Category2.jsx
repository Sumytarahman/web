import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import SecondPage from "./SecondPage";
export default function Category2(params) {
    let[food,setFood]=useState([]);
    let{id}=useParams();

    useEffect(()=>{
        fetchData(id);

    },[id])

    let fetchData(id)=>{

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
        .then((res)=>res.json())
        .then((data)=>setFood(data.meals))
        .catch((err)=>console.log(err))
    }
    return(
        <div className="row row-cols-4">{
            food.map((cat2,idx2)=>(<SecondPage key={cat2} mealList={idx2}/>))
        }

        </div>
    )
    
};


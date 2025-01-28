import React from "react";
import { Link } from "react-router-dom";
export default function FirstPage({meal}) {
    return(
        <>
        <div className="row my-4 shadow-sm bg-white py-3">
            
            <div className="col-3 margin-bottom-10">
                <img src={meal.strCategoryThumb} alt="" />

            </div>
            <div className="col-9">
                <h2><Link to={"/"+meal.strCategory}>{meal.strCategory}</Link></h2>
                <p>{meal.strCategoryDescription}</p>

            </div>
        </div>
        
        
        
        </>
    )
    
};

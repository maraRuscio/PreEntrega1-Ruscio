import React from "react";
import "./ItemListContainer.css"

export const ItemListContainerComponent = (props) =>{
    return(
        <div className="item-list-container">
            <h2>{props.greeting}</h2>
        </div>


    );

};
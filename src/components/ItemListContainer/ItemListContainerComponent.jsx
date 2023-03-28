import React, {useEffect, useState} from "react";
import ItemListComponent from "../ItemList/ItemListComponent";
import "./ItemListContainer.css"


const product = [
    {id:1, nombre: "Troquel riñón plana", precio:10, imag:"../img/logo192.jpeg"},    {id:2, nombre: "Troquel riñón con fuelle inferior", precio:45, img:"../img/logo192.jpeg"},
    {id:3, nombre: "Asa flexible plana", precio:15, img:"../img/logo192.jpeg"},
    {id:4, nombre: "Asa flexible con fuelle inferior", precio:20, img:"../img/logo192.jpeg"}
]

export const ItemListContainerComponent = (props) =>{

    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve (product);
            }, 3000);
        });
        getData.then (res => setData(res));
    },[])

    
    return(
        <div className="item-list-container">
            <h2>{props.greeting}</h2>
            <ItemListComponent data={data}/>
        </div>


    );

};
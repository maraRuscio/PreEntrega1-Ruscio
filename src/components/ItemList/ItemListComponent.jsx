import React from 'react'
import ItemComponent from '../Item/ItemComponent'

const  ItamListComponent = ({data = []})=> {
    return (
        data.map(product => <ItemComponent key={product.id} info={product} />) 
        )
}

export default ItamListComponent

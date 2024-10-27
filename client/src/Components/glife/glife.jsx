import React from 'react'
import golden_life from '../Assets/Gproduct/GoldenLife'
import Item from '../Items/Item'

const Glife = () => {

  return (
    <div>
      {golden_life.map((item, i)=>{
        return <Item 
        key={i} 
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        />
      })}
    </div>
  )
}

export default Glife

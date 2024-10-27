import React from 'react'
import Hero1 from '../Components/Hero/Hero1';
import Popular from '../Components/Popular/Popular';
import Offer from '../Components/Offers/Offer';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetters/NewsLetter'



const Shop = () => {
  return (
    <div>
    <Hero1/>
    <Popular />
    <Offer />
    <NewCollections/>
    <NewsLetter/>
    </div>
  )
}

export default Shop

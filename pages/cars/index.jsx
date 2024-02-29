import React from 'react'
import carsData from '@/data/carsData'
import CarsPage from '@/components/templates/CarsPage'
import Category from '@/components/module/Category'
import SearchBar from '@/components/module/SearchBar'

function Details() {
    return (
        <div>
            <SearchBar/>
            <Category />
            <CarsPage carsData={carsData} />
        </div>
    )
}

export default Details
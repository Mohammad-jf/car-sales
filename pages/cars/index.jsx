import React from 'react'
import carsData from '@/data/carsData'
import CarsPage from '@/components/templates/CarsPage'
import Category from '@/components/module/Category'

function Details() {
    return (
        <div>
            <Category />
            <CarsPage carsData={carsData} />
        </div>
    )
}

export default Details
import React from 'react'
import carsData from '@/data/carsData'
import CarsPage from '@/components/templates/CarsPage'

function Details() {
    return (
        <div>
            <CarsPage carsData={carsData} />
        </div>
    )
}

export default Details
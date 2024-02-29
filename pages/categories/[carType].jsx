import CarsList from '@/components/templates/CarsList';
import carsData from '@/data/carsData';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function CarType() {
  const router = useRouter();
  const carType = router.query.carType
  const [carsList, setCarsList] = useState([]);

  useEffect(() => {
    setCarsList(carsData.filter((car) => car.category === carType))
  }, [carType])


  return (
    <div>
      <CarsList carsList={carsList} />
    </div>
  )
}

export default CarType
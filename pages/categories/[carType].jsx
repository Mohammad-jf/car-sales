import CarsList from '@/components/templates/CarsList';
import carsData from '@/data/carsData';
import { useRouter } from 'next/router'

function CarType() {
  const router = useRouter();
  const carType = router.query.carType
  const carsList = carsData.filter((car) => car.category === carType)

  return (
    <div>
      <CarsList carsList={carsList} />
    </div>
  )
}

export default CarType
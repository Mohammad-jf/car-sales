import CarDetails from "@/components/templates/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router"


function CarId() {
    const router = useRouter();
    const id = router.query.carId
    const carDetail = carsData[id - 1]

    return (
        <CarDetails carDetail={carDetail} />
    )
}

export default CarId
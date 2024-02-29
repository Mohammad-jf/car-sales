import CarsList from '@/components/templates/CarsList';
import carsData from '@/data/carsData';
import { useRouter } from 'next/router'
import React from 'react'

function FilterdCars() {
    const router = useRouter();

    const [min, max] = router.query.slugs || [];

    const filteredData = carsData.filter(
        (item) => item.price >= min && item.price <= max
    );

    if (!filteredData.length) return <h3>NotFound</h3>;

    return <CarsList carsList={filteredData} />;
}

export default FilterdCars
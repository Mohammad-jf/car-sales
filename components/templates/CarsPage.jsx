import React from 'react'
import styles from './carsPage.module.css'
import Card from '../module/Card'



function CarsPage({ carsData }) {
    return (
        <div className={styles.container}>
            {carsData.map((car) => <Card {...car} key={car.id} />)}
        </div>
    )
}

export default CarsPage
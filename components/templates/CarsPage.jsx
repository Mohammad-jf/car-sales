import React from 'react'
import styles from './carsPage.module.css'


function CarsPage({ carsData }) {
    return (
        <div className={styles.container}>
            {carsData.map((car) => <p key={car.id}>{car.name}</p>)}
        </div>
    )
}

export default CarsPage
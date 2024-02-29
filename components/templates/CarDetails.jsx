import React from 'react'
import styles from './carDetails.module.css'
import Company from '../icons/Company'
import Location from '../icons/Location'
import Model from '../icons/Model'
import Money from '../icons/Money'
import Road from '../icons/Road'
import Calender from '../icons/Calender'


const CarDetails = ({ carDetail }) => {
    const {
        id,
        name,
        model,
        year,
        distance,
        location,
        price,
        description,
        image,
        category
    } = carDetail


    return (
        <div className={styles.container}>
            <img src={image} alt={name} className={styles.image} />
            <h3 className={styles.header}>{name} {model}</h3>

            <div className={styles.details}>
                <div>
                    <Company />
                    <p>Company</p>
                    <span>{name}</span>
                </div>
                <div>
                    <Model />
                    <p>Model</p>
                    <span>{model}</span>
                </div>
                <div>
                    <Calender />
                    <p>first Registration</p>
                    <span>{year}</span>
                </div>
                <div>
                    <Road />
                    <p>Kilometer</p>
                    <span>{distance}</span>
                </div>
            </div>

            {/* location */}
            <div className={styles.details}>
                <div>
                    <Location />
                    <p>Location</p>
                    <span>{location}</span>
                </div>
            </div>


            {/* description */}
            <div className={styles.details}>
                <p className={styles.descriptionTitle}>Extra Information</p>
                <p className={styles.descriptionText}>{description}</p>
            </div>

            {/* price */}
            <div className={styles.details}>
                <div className={styles.price}>
                    <Money />
                    <p>price:</p>
                    <span>{price}</span>
                </div>
            </div>


            <button className={styles.button} >Buy</button>

        </div>
    )
}

export default CarDetails
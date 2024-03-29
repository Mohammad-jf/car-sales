import styles from './card.module.css'
import Location from '../icons/Location'
import Link from 'next/link'

const Card = (props) => {
    const { name, id, image, price, model, year, distance, location } = props

    return (
        <Link href={`/cars/${id}`}>
            <div className={styles.container}>
                <img src={image} className={styles.image} />
                <h4 className={styles.title}>{`${name} ${model}`}</h4>
                <p className={styles.detail}>{`${year} - ${distance}`}</p>
                <div className={styles.footer}>
                    <p className={styles.price}>$ {price}</p>
                    <div className={styles.location}>
                        <p>{location}</p>
                        <Location />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
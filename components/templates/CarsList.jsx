import styles from './carsList.module.css'
import Card from '../module/Card'
import { useRouter } from 'next/router'
import Back from '../icons/Back';

const CarsList = ({ carsList }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>

      <div className={styles.back} onClick={() => router.back()}>
        <Back />
        <p>Back</p>
      </div>

      <div className={styles.cards}>
        {carsList.map((car) => <Card {...car} key={car.id} />)}
      </div>

    </div>
  )
}

export default CarsList
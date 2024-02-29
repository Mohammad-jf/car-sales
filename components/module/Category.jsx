import Sedan from "../icons/Sedan"
import Hatchback from "../icons/Hatchback"
import Suv from "../icons/Suv"
import Sport from "../icons/Sport"
import Link from "next/link"
import styles from './category.module.css'

const Category = () => {
  return (
    <div className={styles.container}>
      <Link href={`/categories/sedan`}>
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>

      <Link href={`/categories/suv`}>
        <div>
          <p>Suv</p>
          <Suv />
        </div>
      </Link>

      <Link href={`/categories/hatchback`}>
        <div>
          <p>HatchBack</p>
          <Hatchback />
        </div>
      </Link>


      <Link href={`/categories/sport`}>
        <div>
          <p>Sport Car</p>
          <Sport />
        </div>
      </Link>
    </div>

  )
}

export default Category
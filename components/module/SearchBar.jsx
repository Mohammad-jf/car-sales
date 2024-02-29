import { useState } from 'react'
import styles from './searchBar.module.css'
import { useRouter } from 'next/router';


const SearchBar = () => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const router = useRouter();

    const searchHandler = () => {
        if (minPrice && maxPrice) {
            router.push(`/filter/${minPrice}/${maxPrice}`)
        }
        else {
            alert("please enter the both prices")
        }
    }


    return (
        <div className={styles.container}>
            <div>

                <input
                    type="text"
                    value={minPrice}
                    placeholder='enter min-price'
                    onChange={(e) => setMinPrice(e.target.value)} />

                <input
                    type="text"
                    value={maxPrice}
                    placeholder='enter max-price'
                    onChange={(e) => setMaxPrice(e.target.value)} />
            </div>


            <button onClick={searchHandler}>Search</button>

        </div>
    )
}

export default SearchBar
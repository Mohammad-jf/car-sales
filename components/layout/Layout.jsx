import Link from 'next/link'
import styles from './layout.module.css'


function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Link href='/'>
                    <h2>Car Sales </h2>
                    <p>Choose and buy your car</p>
                </Link>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                all rights reserved &copy; mohammad jalifathi
            </footer>
        </>
    )
}

export default Layout
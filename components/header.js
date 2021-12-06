import Link from 'next/link';
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <>
            <ul className={styles.header}>
                <li>
                    <Link href="/">
                        <a>Image 1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/imageTwo">
                        <a>Image 2</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Header;
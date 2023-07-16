import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.image}>
                <Image
                    className={styles.logo}
                    src={"/static/Holy-Antiseptic.jpeg"}
                    alt="Holy-Antiseptic-Logo"
                    width={300}
                    height={200}
                    priority
                />
            </div>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link
                        className={styles.a}
                        href="/">
                        Home
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link
                        className={styles.a}
                        href="/testimonials">
                        Testimonials
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link
                        className={styles.a}
                        href="/about">
                        About
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link
                        className={styles.a}
                        href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
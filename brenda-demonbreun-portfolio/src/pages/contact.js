import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar/NavBar'
import styles from '../styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Portfolio Page for the Author Brenda" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/BrendaDemonbreunFavicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <NavBar />
                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/BrendaDemonbreunHero.jpeg"
                        alt="Logo"
                        width={1330}
                        height={720}
                        priority
                    />
                </div>
            </main>
        </>
    )
}
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CardList from '@/components/Cards/cardList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const data = () => {
    const URL = 'http://localhost:3000/api/books'
    fetch(URL)
    .then(res => res.json())
    .then(console.log(res => res.json()))
  }
  return (
    <>
      <Head>
        <title>Brenda Demonbreun</title>
        <meta name="description" content="Portfolio Page for the Author Brenda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BrendaDemonbreunFavicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Brenda Demonbreun
          </p>
          <p>
            Brenda Demonbreun
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/BrendaDemonbreunHero.jpeg"
            alt="Logo"
            width={1280}
            height={720}
            priority
          />
        </div>

        <div className={styles.grid}>
          <CardList
            data = {data}
          />
        </div>
      </main>
    </>
  )
}

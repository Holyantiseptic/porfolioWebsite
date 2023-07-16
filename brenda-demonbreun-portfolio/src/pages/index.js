import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import CardList from '../components/Cards/CardList'
import NavBar from '../components/NavBar/navBar'

const inter = Inter({ subsets: ['latin'] })

const cardInfo = [
  {
    id: 1,
    BookTitle: 'Book1',
    AmazonAffiLink: 'www.google.com',
    BookImage: '/static/Holy-Antiseptic.jpeg',
  },
  {
    id: 2,
    BookTitle: 'Book2',
    AmazonAffiLink: 'www.google.com',
    BookImage: '/static/Holy-Antiseptic.jpeg',
  },
  {
    id: 3,
    BookTitle: 'Book3',
    AmazonAffiLink: 'www.google.com',
    BookImage: '/static/Holy-Antiseptic.jpeg',
  },
  {
    id: 4,
    BookTitle: 'Book4',
    AmazonAffiLink: 'www.google.com',
    BookImage: '/static/Holy-Antiseptic.jpeg',
  }
];

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
        <CardList
          cardData={cardInfo}
        />
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import CardList from '../components/Cards/CardList'

const inter = Inter({ subsets: ['latin'] })

const cardInfo = [
    {
        id: 1,
        BookTitle: 'The Soul of a Soldier',
        ReviewText: "I was charmed when I heard Brenda speak at a local library event and recite a snippet from her book, The Soul of a Soldier. She's a dynamic speaker; she captured everyone's attention, and we were all enchanted and wanted to hear more of her story. Like her auditory skills, she has a gift for the written word. Her book, The Soul of a Soldier is thoughtful, profound, and well-written. Brenda writes from the depth of her soul. Her unique perspective is refreshing, thought-provoking, and eloquent. Her words open your mind to new perspectives.Brenda is a gem both as a speaker and author. Her passion reaches through the pages and explodes through her voice. She's both talented and a kind human ( my favorite).",
    }
]

export default function Testimonials() {
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
               src="/BrendaDemonbreunHero.jpeg "
               alt="Logo"
               width={1330}
               height={720}
               priority
             />
           </div>
   
           <CardList
             cardData = {cardInfo}
           />
           
         </main>
       </>
     )
}
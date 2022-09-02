import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div >
      <Header />

      <p className={styles['title-homepage']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis excepturi dolorum sed similique culpa, sint nobis corporis laborum asperiores. Nihil optio dolorem temporibus, numquam officiis error atque sequi quia laborum.</p>

      <Footer />
    </div>
  )
}

export default Home

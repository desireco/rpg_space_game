import Head from 'next/head'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RPG::MMO::Game::In Space!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-sm p-10 border-dotted border-4 border-light-blue-500">
        <h1>RPG::MMO::Game::In Space!</h1>
        <p className="my-10">To start your adventure, click <a href="/story">here!</a></p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

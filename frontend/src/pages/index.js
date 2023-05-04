import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Bootstrap from '../../node_mo'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
const recipes = data.recipes;

  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className='mx-auto'>
          <img></img>
          <a href='/events'>Events</a>
          <a href='/'>Home</a>
          <a href='/about-us'>About Us</a>
        </nav>
      </header>

      <main className={`${styles.main} ${inter.className}`}>
      
      </main>

      <footer className={styles.footer}>

      </footer>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      data: {
        recipes: [{ title: "Pineapple Smoothie"}]
      }
    }
  }
}
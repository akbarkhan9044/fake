import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/component/Layout';
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({res}) {
  return (
    <>
          <div className={styles.banner}>
            <div className={styles.content}>
            <h1>
              FIRST TIME ON DISCOUNT
            </h1>
            <p>EXTRA 5% OFF ON PREPAID ORDERS</p>
            <button>Shop Now</button>
            </div>
          </div>
    <Layout title="Home">

      <h1 className={styles.h1}>TRENDING NOW</h1>
     <div className={styles.grid}>
      <div className={styles.card}>
        <Image 
        className={styles.image}
        src="/shoe.png" height={100}
        width={100}
        />
        <span>Shoe</span>
      </div>
      <div className={styles.card}>
      <Image 
      className={styles.image}
        src="/male.png" height={100}
        width={100}
        />
        <span>Shoe</span>
      </div>
      <div className={styles.card}>
      <Image 
      className={styles.image}
        src="/woman.png" height={100}
        width={100}
        />
        <span>Shoe</span>
      </div>
      <div className={styles.card}> <Image 
      className={styles.image}
        src="/sunglasses.png" height={100}
        width={100}
        />
        <span>Sunglasses</span></div>
     </div>
     
     
    </Layout>
    <div className={styles.second}></div>
    <div>
      
    <video 
     src="https://cdn.sanity.io/files/qa41whrn/staging/335db53a8496421d77808d251659e692b73b95cb.mp4"
     autoPlay
     muted
     loop
     playsInline
    >
 

      </video>


    </div>
    </>
  )
}


export async function getServerSideProps()
{
  const response=await fetch("https://fakestoreapi.com/products");
  const res=await response.json();
  return{
    props:{res:res}
  }
}
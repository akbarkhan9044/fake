import React from 'react'
import styles from '@/styles/Event.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function SingleEvent() {
  return (
    <div className={styles.hero}>
      <nav className={styles.nav}>
        <Image src="/logo.png" className={styles.logo}  height={100} width={100} />
        <ul>
            <li>
                <Link href="#">HOME</Link>
            </li>
            <li>
                <Link href="#">BEACHES</Link>
            </li>
            <li>
                <Link href="#">POPULAR PLACES</Link>
            </li>
            <li>
                <Link href="#">CONTACT US</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

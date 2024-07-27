import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
export default function Layout({children,title,keywords,descripition}) {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta  name='keywords' content='keywords' />
        <meta  name='descripition' content='descripition' />
    </Head>
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}


Layout.defaultProps={
    title:'Puma',
    keywords:'shoes,cloths,men,women',
    descripition:'Shopping Destination'
}
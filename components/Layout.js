import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Bdstore' : 'Bdstore'}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex min-h-screen flex-col justify-between '>
        <header>
          <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
            <Link href='/'>
              <a className='text-lg font-bold'>
                <Image
                  src='/bdstore.png'
                  alt='logo'
                  width={155}
                  height={42}
                ></Image>
              </a>
            </Link>
            <div>
            <Link href='/register'>
                <a className='p-2'>Register</a>
              </Link>
              <Link href='/login'>
                <a className='p-2'>Login</a>
              </Link>
              
              <Link href='/cart'>
                <a className='p-2'>Cart</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container mx-auto mt-4 px-4'>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>
          <p>Copyright © 2022- Bdstore Prague | By Cloudeventix</p>
        </footer>
      </div>
    </>
  )
}

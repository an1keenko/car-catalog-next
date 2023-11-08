import { FC, PropsWithChildren } from 'react'
import Header from '@/components/layout/header/Header'
import Meta from '@/components/seo/Meta'
import { IMeta } from '@/interfaces/meta.interface'
import Footer from '@/components/layout/Footer'
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main className={styles.items}>{children}</main>
      <Footer />
    </Meta>
  )
}

export default Layout

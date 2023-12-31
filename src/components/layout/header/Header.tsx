import { FC } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { useRouter } from 'next/router'

const Header: FC = () => {
  const { pathname } = useRouter()
  console.log(pathname)
  return (
    <header className={styles.header}>
      <Link href="/" className={pathname === '/' ? styles.active : ''}>
        Home
      </Link>
      <Link href="/src/pages/about" className={pathname === '/about' ? styles.active : ''}>
        About page
      </Link>
    </header>
  )
}

export default Header

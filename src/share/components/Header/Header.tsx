import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {

  return (
    <header className={styles['c-header']}>
      <Link href={`/`}>
        <h1>Logo</h1>
      </Link>
      <nav className={styles['c-header__nav']}>
        <ul className={`${styles['c-header__nav__list']}`}>
          <li className={styles['c-header__nav__list__item']}>
            <Link href={`/articles`}>お知らせ</Link>
          </li>
          <li className={styles['c-header__nav__list__item']}>
            <Link href={`/company`}>企業情報</Link>
          </li>
          <li className={styles['c-header__nav__list__item']}>
            <Link href={`/categories`}>事業紹介</Link>
          </li>
          <li className={styles['c-header__nav__list__contact']}>
            <Link href={`/`}>お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
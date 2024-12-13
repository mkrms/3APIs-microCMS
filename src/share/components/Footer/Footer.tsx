import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import classNames from 'classnames'

const Footer = () => {
  return (
    <footer className={styles['c-footer']}>
      <div className={styles['c-footer__wrapper']}>

        <div className={styles['c-footer__company']}>
          <h2>株式会社UNOTAME</h2>
          <p>テスト県テスト市テスト町00-0</p>
        </div>

        <div className={styles['c-footer__menu']}>

          <ul className={styles['c-footer__list']}>
            <li className={classNames(
              styles['c-footer__item'],
              styles['--parent']
            )}>
              <Link href={`/articles`}>企業情報</Link>
            </li>
            <li className={styles['c-footer__item']}>
              <Link href={`/articles`}>代表挨拶</Link>
            </li>
            <li className={styles['c-footer__item']}>
              <Link href={`/articles`}>沿革</Link>
            </li>
            <li className={styles['c-footer__item']}>
              <Link href={`/articles`}>経営メンバー</Link>
            </li>
            <li className={styles['c-footer__item']}>
              <Link href={`/articles`}>お問い合わせ</Link>
            </li>
          </ul>

          <ul className={styles['c-footer__list']}>
            <li className={classNames(
              styles['c-footer__item'],
              styles['--parent']
            )}>
              <Link href={`/categories`}>事業紹介</Link>
            </li>
            <li className={styles['c-footer__item']}>
              <Link href={`/articles`}>カテゴリ1</Link>
            </li>
            <li className={styles['c-footer__item']}>
              <Link href={`/articles`}>カテゴリ2</Link>
            </li>
            <li className={styles['c-footer__item']}>
              <Link href={`/articles`}>カテゴリ3</Link>
            </li>
            <li className={styles['c-footer__item']}>
              <Link href={`/articles`}>カテゴリ4</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
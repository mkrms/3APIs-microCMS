import React from 'react'
import styles from './Articles.module.scss'

function articles() {
  return (
    <div className={styles['p-articles']}>
      <div className="l-page__title">
        <h2>記事一覧</h2>
      </div>
      <div className="l-container">
        <ul className={styles['p-articles__list']}>
          <li className={styles['p-articles__item']}>
            <a href="">
              <img src="./img-thumbnail.png" alt="" />
              <div className={styles['p-articles__desc']}>
                <div>
                  <time>2024/12/10</time>
                  <span>カテゴリ</span>
                </div>
                <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
              </div>
            </a>
          </li>
          <li className={styles['p-articles__item']}>
            <a href="">
              <img src="./img-thumbnail.png" alt="" />
              <div className={styles['p-articles__desc']}>
                <div>
                  <time>2024/12/10</time>
                  <span>カテゴリ</span>
                </div>
                <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
              </div>
            </a>
          </li>
          <li className={styles['p-articles__item']}>
            <a href="">
              <img src="./img-thumbnail.png" alt="" />
              <div className={styles['p-articles__desc']}>
                <div>
                  <time>2024/12/10</time>
                  <span>カテゴリ</span>
                </div>
                <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
              </div>
            </a>
          </li>
          <li className={styles['p-articles__item']}>
            <a href="">
              <img src="./img-thumbnail.png" alt="" />
              <div className={styles['p-articles__desc']}>
                <div>
                  <time>2024/12/10</time>
                  <span>カテゴリ</span>
                </div>
                <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default articles
import React from 'react'
import styles from "./Categories.module.scss"
import Button from '@/share/components/Button/Button'

function categories() {
  return (
    <div className={styles['p-categories']}>
      <div className="l-page__title">
        <h2>事業詳細</h2>
      </div>

      <div className="l-container">
        <ul className={styles['p-categories__list']}>
          <li className={styles['p-categories__item']}>
            <h3>サービス名</h3>
            <img src="./img-thumbnail.png" alt="" />
            <Button color="gray" href="/">詳細</Button>
            <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
          </li>
          <li className={styles['p-categories__item']}>
            <h3>サービス名</h3>
            <img src="./img-thumbnail.png" alt="" />
            <Button color="gray" href="/">詳細</Button>
            <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
          </li>
          <li className={styles['p-categories__item']}>
            <h3>サービス名</h3>
            <img src="./img-thumbnail.png" alt="" />
            <Button color="gray" href="/">詳細</Button>
            <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
          </li>
          <li className={styles['p-categories__item']}>
            <h3>サービス名</h3>
            <img src="./img-thumbnail.png" alt="" />
            <Button color="gray" href="/">詳細</Button>
            <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default categories
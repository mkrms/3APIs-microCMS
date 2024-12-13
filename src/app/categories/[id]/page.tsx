import React from 'react'
import styles from "./Category.module.scss"
import Button from '@/share/components/Button/Button'

function category() {
  return (
    <div className={styles['p-category']}>
      <div className="l-page__title">
        <h2>事業詳細</h2>
      </div>

      <div className="l-container">
        <div className="p-single">
          <h2 className='p-single__title'></h2>
          <img src="./img-thumbnail.png" alt="" className='p-single__thumbnail' />
          <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。<br />
            <br />
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。<br />
            <br />
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
        </div>
      </div>
    </div>
  )
}

export default category
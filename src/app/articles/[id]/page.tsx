import React from 'react'
import styles from './Article.module.scss'

function article() {
  return (
    <div className={styles['p-categories']}>
      <div className="l-page__title">
        <h2>記事詳細</h2>
      </div>

      <div className="l-container">
        <div className="p-single">
          <h2 className='p-single__title'>タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</h2>
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

export default article
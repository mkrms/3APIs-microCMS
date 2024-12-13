import React from 'react'
import styles from './Contact.module.scss'
import Button from '../Button/Button'

const Contact = () => {
  return (
    <div className="l-container">
      <div className={styles['c-contact']}>
        <div>
          <h3>お問い合わせ</h3>
          <p>お問い合わせのテキストが入ります。お問い合わせのテキストが入ります。お問い合わせのテキストが入ります。お問い合わせのテキストが入ります。</p>
          <Button color="gray" href="/contact">詳細</Button>
        </div>
        <img src="./img-thumbnail.png" alt="" />
      </div>
    </div>
  )
}

export default Contact
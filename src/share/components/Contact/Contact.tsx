import React from 'react'
import styles from './Contact.module.scss'
import Button from '../Button/Button'
import Image from 'next/image'
import { getConfig } from '@/libs/client'

async function Contact() {
  const config = await getConfig();
  return (
    <div className="l-container">
      <div className={styles['c-contact']}>
        <div>
          <h3>お問い合わせ</h3>
          <p>{config.contactText}</p>
          <Button color="gray" href="/contact">詳細</Button>
        </div>
        <Image src={config.contactImg.url} alt="" />
      </div>
    </div>
  )
}

export default Contact
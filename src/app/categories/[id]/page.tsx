import React from 'react'
import styles from "./Category.module.scss"
import { getCategory } from '@/libs/client'
import parse from 'html-react-parser'
import Image from 'next/image'

async function category({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = await getCategory(id);

  return (
    <div className={styles['p-category']}>
      <div className="l-page__title">
        <h2>事業詳細</h2>
      </div>

      <div className="l-container">
        <div className="p-single">
          <h2 className='p-single__title'>{category.title}</h2>
          <Image src={category.thumbnail.url} alt="" className='p-single__thumbnail' />
          <p>{category.overview}</p>
          <div className="p-single__body">
            {parse(category.body)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default category
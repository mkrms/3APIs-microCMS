import React from 'react'
import styles from "./Categories.module.scss"
import Button from '@/share/components/Button/Button'
import { getCategories } from '@/libs/client';

async function categories() {
  const { contents: categories } = await getCategories();
  return (
    <div className={styles['p-categories']}>
      <div className="l-page__title">
        <h2>事業詳細</h2>
      </div>

      <div className="l-container">
        <ul className={styles['p-categories__list']}>
          {categories.map((category) => {
            return (
              <li className={styles['p-categories__item']} key={category.id}>
                <h3>{category.title}</h3>
                <img src={category.thumbnail.url} alt="" />
                <Button color="gray" href={`/categories/${category.id}`}>詳細</Button>
                <p>{category.overview}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default categories
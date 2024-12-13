import React from 'react'
import styles from './Articles.module.scss'
import { getArticles } from '@/libs/client';
import { toDate } from '@/libs/utils';
import Image from 'next/image';

async function articles() {
  const { contents: articles } = await getArticles();
  return (
    <div className={styles['p-articles']}>
      <div className="l-page__title">
        <h2>記事一覧</h2>
      </div>
      <div className="l-container">
        <ul className={styles['p-articles__list']}>
          {articles.map((article) => {
            return (
              <li className={styles['p-articles__item']} key={article.id}>
                <a href={`/articles/${article.id}`}>
                  <Image src={article.thumbnail.url} alt="" />
                  <div className={styles['p-articles__desc']}>
                    <div>
                      <time>{toDate(new Date(article.updatedAt))}</time>
                      <span>{article.category && article.category.title}</span>
                    </div>
                    <p>{article.title}</p>
                  </div>
                </a>
              </li>
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default articles
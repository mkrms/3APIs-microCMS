import React from 'react'
import styles from './Article.module.scss'
import { getArticle } from '@/libs/client';
import parse from 'html-react-parser'
import { toDate } from '@/libs/utils';

async function article({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticle(id);
  return (
    <div className={styles['p-categories']}>
      <div className="l-page__title">
        <h2>記事詳細</h2>
      </div>

      <div className="l-container">
        <div className="p-single">
          <h2 className='p-single__title'>{article.title}</h2>
          <div className="p-single__desc">
            <time>{toDate(new Date(article.updatedAt))}</time>
            <span>{article.category && article.category.title}</span>
          </div>
          <img src={article.thumbnail.url} alt="" className='p-single__thumbnail' />
          <div className="p-single__body">
            {parse(article.body)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default article
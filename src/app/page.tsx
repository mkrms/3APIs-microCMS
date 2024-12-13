
import { getArticles, getCategories, getConfig } from '../libs/client';
import styles from './Home.module.scss'
import Button from '@/share/components/Button/Button';
import { toDate } from '@/libs/utils';
import Image from 'next/image';

export default async function Home() {
  const config = await getConfig();
  const { contents: categories } = await getCategories();
  const { contents: articles } = await getArticles();

  return (
    <div className={styles['p-home']}>

      {/* mv */}
      <div className={styles['p-home__mv']}>
        <div className={styles['p-home__title']}>
          <h1>{config.title}</h1>
          <span>{config.subtitle}</span>
        </div>
      </div>

      {/* 事業紹介 */}
      <div className="l-container">
        <section className={styles['p-home__business']}>
          <h2 className={styles['p-home__business__header']}>事業紹介</h2>

          <ul className={styles['p-home__business__list']}>
            {categories.map((category) => {
              return (
                <li className={styles['p-home__business__item']} key={category.id}>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.overview}</p>
                    <Button color="gray" href={`/categories/${category.id}`}>詳細</Button>
                  </div>
                  <Image src={category.thumbnail.url} alt="" />
                </li>
              )
            })
            }
          </ul>

          <div className={styles['p-home__business__button']}>
            <Button color='gray' href='/categories'>事業一覧</Button>
          </div>
        </section>

        <section className={styles['p-home__company']}>
          <ul className={styles['p-home__company__list']}>
            <li className={styles['p-home__company__item']}>
              <a href="/company">
                <h3>Company</h3>
                <span>会社概要</span>
              </a>
            </li>
            <li className={styles['p-home__company__item']}>
              <a href="/message">
                <h3>代表挨拶</h3>
                <span>CEO Message</span>
              </a>
            </li>
            <li className={styles['p-home__company__item']}>
              <a href="/history">
                <h3>History</h3>
                <span>沿革</span>
              </a>
            </li>
            <li className={styles['p-home__company__item']}>
              <a href="/member">
                <h3>Member</h3>
                <span>経営メンバー</span>
              </a>
            </li>
          </ul>
        </section>

        <section className={styles['p-home__articles']}>
          <ul className={styles['p-home__articles__list']}>
            {/* max3つ */}
            {articles.slice(0, 3).map((article) => {
              return (
                <li className={styles['p-home__articles__item']} key={article.id}>
                  <a href={`/articles/${article.id}`}>
                    <Image src={article.thumbnail.url} alt="" />
                    <div>
                      <time>{toDate(new Date(article.updatedAt))}</time>
                      <span>{article.category && article.category.title}</span>
                    </div>
                    <p>{article.title}</p>
                  </a>
                </li>
              )
            })
            }
          </ul>
          <div className={styles['p-home__articles__button']}>
            <Button color='gray' href='/articles'>記事一覧</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
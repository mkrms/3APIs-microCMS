import Link from 'next/link';
import { client } from '../libs/client';
import { MicroCMSImage } from 'microcms-js-sdk';
import styles from './Home.module.scss'
import Button from '@/share/components/Button/Button';

export default async function Home() {
  return (
    <div className={styles['p-home']}>

      {/* mv */}
      <div className={styles['p-home__mv']}>
        <div className={styles['p-home__title']}>
          <h1>サイトタイトルが入ります。サイトタイトルが入ります。</h1>
          <span>サブタイトルが入ります。</span>
        </div>
      </div>

      {/* 事業紹介 */}
      <div className="l-container">
        <section className={styles['p-home__business']}>
          <h2 className={styles['p-home__business__header']}>事業紹介</h2>

          <ul className={styles['p-home__business__list']}>
            <li className={styles['p-home__business__item']}>
              <div>
                <h3>カテゴリタイトル</h3>
                <p>カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。</p>
                <Button color="gray" href="/categories">詳細</Button>
              </div>
              <img src="./img-thumbnail.png" alt="" />
            </li>
            <li className={styles['p-home__business__item']}>
              <div>
                <h3>カテゴリタイトル</h3>
                <p>カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。</p>
                <Button color="gray" href="/categories">詳細</Button>
              </div>
              <img src="./img-thumbnail.png" alt="" />
            </li>
            <li className={styles['p-home__business__item']}>
              <div>
                <h3>カテゴリタイトル</h3>
                <p>カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。</p>
                <Button color="gray" href="/categories">詳細</Button>
              </div>
              <img src="./img-thumbnail.png" alt="" />
            </li>
            <li className={styles['p-home__business__item']}>
              <div>
                <h3>カテゴリタイトル</h3>
                <p>カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。カテゴリの説明が入ります。</p>
                <Button color="gray" href="/categories">詳細</Button>
              </div>
              <img src="./img-thumbnail.png" alt="" />
            </li>
          </ul>

          <div className={styles['p-home__business__button']}>
            <Button color='gray' href='/categories'>事業一覧</Button>
          </div>
        </section>

        <section className={styles['p-home__company']}>
          <ul className={styles['p-home__company__list']}>
            <li className={styles['p-home__company__item']}>
              <a href="/">
                <h3>Company</h3>
                <span>会社概要</span>
              </a>
            </li>
            <li className={styles['p-home__company__item']}>
              <a href="/">
                <h3>代表挨拶</h3>
                <span>CEO Message</span>
              </a>
            </li>
            <li className={styles['p-home__company__item']}>
              <a href="/">
                <h3>History</h3>
                <span>沿革</span>
              </a>
            </li>
            <li className={styles['p-home__company__item']}>
              <a href="/">
                <h3>Member</h3>
                <span>経営メンバー</span>
              </a>
            </li>
          </ul>
        </section>

        <section className={styles['p-home__articles']}>
          <ul className={styles['p-home__articles__list']}>
            {/* max3つ */}
            <li className={styles['p-home__articles__item']}>
              <a href="">
                <img src="./img-thumbnail.png" alt="" />
                <div>
                  <time>2024/12/10</time>
                  <span>カテゴリ</span>
                </div>
                <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
              </a>
            </li>
            <li className={styles['p-home__articles__item']}>
              <a href="">
                <img src="./img-thumbnail.png" alt="" />
                <div>
                  <time>2024/12/10</time>
                  <span>カテゴリ</span>
                </div>
                <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
              </a>
            </li>
            <li className={styles['p-home__articles__item']}>
              <a href="">
                <img src="./img-thumbnail.png" alt="" />
                <div>
                  <time>2024/12/10</time>
                  <span>カテゴリ</span>
                </div>
                <p>説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
              </a>
            </li>
          </ul>
          <div className={styles['p-home__articles__button']}>
            <Button color='gray' href='/articles'>記事一覧</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
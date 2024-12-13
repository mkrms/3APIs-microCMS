// libs/microcms.ts
import { createClient, MicroCMSDate, MicroCMSImage, MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Client SDKの初期化を行う
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// configの型定義
export type Config = {
  id: string;
  logoImg: MicroCMSImage;
  title: string;
  subtitle: string;
  companyName: string;
  companyAddress: string;
  contactImg: MicroCMSImage;
  contactText: string;
}

//getリクエストでconfigを取得
export const getConfig = async () => {
  const configData = await client.get<Config>({
    endpoint: "config",
  })
  return configData;
}

export type Category = {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  overview: string;
  body: string;
} & MicroCMSDate;

export const getCategories = async (queries?: MicroCMSQueries): Promise<MicroCMSListResponse<Category>> => {
  const listData = await client.getList<Category>({
    endpoint: "categories",
    queries,
  });
  return listData
};

export const getCategory = async (id: string) => {
  const data = await client.get({
    endpoint: "categories",
    contentId: `${id}`,
  });
  return data;
}

export type Article = {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  body: string;
  category: Category;
} & MicroCMSDate;

export const getArticles = async (queries?: MicroCMSQueries): Promise<MicroCMSListResponse<Article>> => {
  const listData = await client.getList<Article>({
    endpoint: "articles",
    queries,
  });
  return listData
};

export const getArticle = async (id: string) => {
  const data = await client.get({
    endpoint: "articles",
    contentId: `${id}`,
  });
  return data;
}
// libs/microcms.ts
import { createClient, MicroCMSImage } from 'microcms-js-sdk';

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
  const topPageData = await client.get<Config>({
    endpoint: "config",
  })
  return topPageData;
}
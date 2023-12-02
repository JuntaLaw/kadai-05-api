# 課題　API：
ChatGPTとLangchain、Pineconeを使用したReactについてのTutor bot

## DEMO

  - デプロイしている場合はURLを記入（任意）
    https://kadai-05-api.vercel.app/
  - ![使用例](/capimg/Screenshot%202023-12-02%20at%209.26.35.png)

## 紹介と使い方

  - Reactの公式ドキュメントを読み込んだ、ChatGPT3.5ベースのChat Botです。
  - 質問文を入力して「Ask Me」ボタンを押すと、返答が表示されます。
  

## 工夫した点

  - LangChainとPinecone APIをJavascriptとTypescriptで使用
   ChatGptだけだと最新版のReactについての質問への精度が低いので、そこをLangChainとPinecone APIで最新の公式ドキュメントを読み込み強化した（はずだったけどうまくいっていない。作成したインデックスへのクエリがうまくいかないと、結局ChatGPT 3.5が答えるので情報が古い）
  - LangCainとは： 大規模言語モデル（LLM）を活用したアプリケーションの開発を効率化するためのフレームワーク。LangChainを使用してChatGPTの機能を高機能化することができる。プロンプトのテンプレートやチェーンの内容を変更することで、様々な拡張機能を実装することができる。Pythonライブラリがメインだが、TypeScriptでも使用できる。
  - Pineconeとは： 機械学習用のベクトル検索エンジン。ベクトル表現でデータを表現し、ベクトル間の類似性を計算してデータを検索する。Pinecone は、大量のベクトルデータをリアルタイムで高速に検索することを目的としている。
  

## 苦戦した点

  - PineconeのIndex作成が難しかった。indexは作成できているが、読み込み時に若干エラーができている模様。再作成で何度か失敗しているので、このままにしてあげておきます。
  - 上記のindex読み込みエラーのせいだと思われるが、Pinecone indexへのクエリがタイムアウトになったり、エラーになったりして、結局、公式ドキュメントからの情報が持ってこられずに、GPT3.5が古い情報で回答していることが多い模様。
  - 参考にした情報（YoutubeチュートリアルとZennの記事、下記に記載）はいずれも2023年春頃のもので、それほど古くはないが、アップデートの早い世界なので、参照元の公式情報が改訂で無くなっていることが多く、情報の整理に多少苦労した。
 

## 参考にした web サイトなど

  - https://zenn.dev/seya/articles/605079117fb614
  - https://www.youtube.com/watch?v=6_mfYPPcZ60
  - Langchain JavaScript Docs - https://js.langchain.com/docs/
  - Pinecone  https://app.pinecone.io/
  - OpenAI https://platform.openai.com/


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

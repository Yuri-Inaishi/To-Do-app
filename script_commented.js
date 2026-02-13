// ToDoApplication Script

// 1. モジュールのインポート
// ここでは必要なモジュールやライブラリをインポートします。例えば、ExpressやMongooseなどのサーバーサイドで使うものです。

// 2. アプリケーションの初期設定
// Expressアプリケーションを初期化し、ミドルウェアを設定します。

const express = require('express');
const app = express();

// 3. データモデルの定義
// ToDoアイテムのデータ構造を定義し、MongoDBに保存するためのモデルを作成します。

// 4. ルーティングの設定
// 各HTTPメソッドに対するエンドポイントを定義します。GETリクエストでToDoリストを取得したり、POSTリクエストで新しいToDoを追加したりします。

// 5. サーバーの起動
// アプリケーションを指定したポ���トでリッスンさせるための設定を行います。

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました`);
});

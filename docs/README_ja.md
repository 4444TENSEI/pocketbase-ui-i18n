[English](https://github.com/4444TENSEI/pocketbase-ui-i18n/blob/main/README.md) | [中文](https://github.com/4444TENSEI/pocketbase-ui-i18n/blob/main/docs/README_zh.md) | 日本語

> ## オンライン体験

アドレス：https://pb.uc1.icu

>  上記のサイトに入ったら、左下隅のボタンをクリックし、ポップアップ ウィンドウでバックエンド アドレスを設定します。
>
>  静的サイトではデータ漏洩などのセキュリティ上の問題が発生しないことは、[F12 ネットワーク] タブで確認できます。

このウェアハウスは、元のウェアハウス [pocketbase](https://github.com/pocketbase/pocketbase) のフロントエンド インターフェースに基づいて拡張されています。

1. i18n
2.  はフロントエンド ページのバックエンド アドレスを動的に切り替えることができます

> ## 自己展開 (フロントエンド ページのみ)

1.  が [Vercel](https://vercel.com/signup) アカウントを申請します

2. このボタンをクリック👉[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/4444TENSEI/pocketbase-ui-i18n)
3. `Private Repository Name`**入力ボックス**にカスタム名を入力します
4. `Vercel Team`** ドロップダウン ボックス**で適切な場所を選択します
5. 「`Create`」ボタンをクリックして、デプロイが完了するまで待ちます

#### *オプションの Vercel 構成*

- *Vercel 設定パネルの `/settings/environment-variables` ページで、環境変数 `PB_BACKEND_URL` をバックエンド アドレスに設定します。ただし、設定しなくても、フロントエンド ページでいつでも手動で変更できます*
- *Vercel プロジェクトの `settings/domains` ページに独自のドメイン名を追加します*

> ## 開発環境

####  インストールの依存関係

```
pnpm install
```

#### 開始

```
pnpm dev
```

####  パッケージのビルド

```
pnpm build
```

// Claude Code Operations Manual - Comprehensive Data
// Based on actual project records from Miratuku/Essence

const MANUAL = {
  title: "Claude Code 実務マニュアル",
  subtitle: "ミラツク / エッセンス 完全版",
  version: "1.0",
  date: "2026年4月",

  parts: [
    // =====================================================================
    // PART 1: ENVIRONMENT SETUP
    // =====================================================================
    {
      id: "env",
      title: "環境構築",
      description: "ゼロからClaude Codeが使える状態にするまで",
      chapters: [
        {
          id: "env-mac",
          title: "macOSの準備",
          content: `
## macOSの準備

Claude Codeを使うには、いくつかのツールをMacにインストールする必要があります。すべてClaude Codeが案内してくれますが、最初の1回だけ手動で行う作業があります。

### Homebrewのインストール

Homebrewは、Macにソフトウェアを簡単にインストールするためのツールです。App Storeのコマンドライン版だと思ってください。

**やること:**
1. 「ターミナル」アプリを開く（Spotlight検索で「ターミナル」と入力）
2. 以下のコマンドをコピーして貼り付け、Enterを押す

\`\`\`
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
\`\`\`

3. パスワードを聞かれたら、Macのログインパスワードを入力（画面には表示されないが入力されている）
4. 数分待つと完了

**確認方法:**
\`\`\`
brew --version
\`\`\`
バージョン番号が表示されれば成功。

### Node.jsのインストール

Node.jsは、Webアプリを動かすために必要なソフトウェアです。

**やること:**
\`\`\`
brew install node
\`\`\`

**確認方法:**
\`\`\`
node --version
npm --version
\`\`\`

### Pythonの確認

Pythonは既にMacに入っていることが多いですが、バージョンを確認します。

**やること:**
\`\`\`
python3 --version
\`\`\`

Python 3.9以上が表示されればOK。表示されない場合:
\`\`\`
brew install python
\`\`\`

### Gitの確認

Git（ファイルの変更履歴を管理するツール）はmacOSに標準で入っています。

**確認方法:**
\`\`\`
git --version
\`\`\`

### 現在のミラツク環境の実際の構成

| ソフトウェア | バージョン | 用途 |
|---|---|---|
| macOS | Sequoia 26.2 | OS |
| MacBook Air | M2チップ | ハードウェア |
| Homebrew | 最新 | パッケージ管理 |
| Node.js | 24.x | Webアプリ実行 |
| Python | 3.13.x | スクリプト・AI連携 |
| Git | 最新 | バージョン管理 |
| bash | デフォルト | シェル |
`
        },
        {
          id: "env-accounts",
          title: "アカウント作成",
          content: `
## 必要なアカウントの作成

Claude Codeでアプリを作り、公開するために必要なアカウントは以下の通りです。すべて無料で作成できます。

### 必須アカウント（最初に作る）

#### 1. GitHub（ギットハブ）

**何のため:** 作ったアプリのコード（ファイル一式）をインターネット上に保存・管理する場所。開発者のDropboxのようなもの。

**作り方:**
1. ブラウザで \`github.com\` にアクセス
2. 「Sign up」をクリック
3. メールアドレス、パスワード、ユーザー名を入力
4. メール認証を完了

**ミラツクでの実績:**
- アカウント名: \`yuyanishimura0312\`
- 作成済みリポジトリ: 50以上（各アプリに1つ）
- リポジトリの公開/非公開は選択可能

**次にやること — GitHub CLIの設定:**
\`\`\`
brew install gh
gh auth login
\`\`\`
ブラウザが開くので、GitHubアカウントでログイン。これにより、ターミナルからGitHubを操作できるようになる。

**確認方法:**
\`\`\`
gh auth status
\`\`\`
「Logged in to github.com as ユーザー名」と表示されればOK。

---

#### 2. Vercel（バーセル）

**何のため:** 作ったアプリをインターネットに公開する場所。GitHubと連携し、コードを保存するだけで自動的にWebサイトとして公開される。

**作り方:**
1. ブラウザで \`vercel.com\` にアクセス
2. 「Sign Up」→「Continue with GitHub」を選択
3. GitHubアカウントと連携を許可

**ミラツクでの実績:**
- 16以上のアプリをVercelで公開中
- 無料プランで運用（月間100GBの転送量まで無料）
- URLの形式: \`https://アプリ名.vercel.app\`

**次にやること — Vercel CLIの設定:**
\`\`\`
npm install -g vercel
vercel login
\`\`\`

**確認方法:**
\`\`\`
vercel whoami
\`\`\`

---

#### 3. Anthropic（アンソロピック）

**何のため:** Claude（AI）のAPIを使うためのアカウント。Claude Codeがアプリの中でAI機能を使う場合に必要。

**作り方:**
1. ブラウザで \`console.anthropic.com\` にアクセス
2. アカウントを作成
3. 「API Keys」ページで新しいキーを作成
4. 表示されたキー（\`sk-ant-\`で始まる文字列）をコピー

**キーの安全な保存方法（macOS Keychain）:**
\`\`\`
security add-generic-password -s "ANTHROPIC_API_KEY" -a "anthropic" -w "ここにAPIキーを貼り付け"
\`\`\`

**確認方法:**
\`\`\`
security find-generic-password -s "ANTHROPIC_API_KEY" -w
\`\`\`
APIキーが表示されればOK。

**ミラツクでの実績:**
- 20以上のアプリ・スクリプトがこのAPIキーを使用
- Pythonアプリは自動でKeychainからキーを取得する仕組みになっている

---

### 必要に応じて作るアカウント

| サービス | 用途 | どんなアプリで必要か | 無料枠 |
|---|---|---|---|
| Supabase | データベース + ユーザー認証 | 会員管理、ログイン機能があるアプリ | 2プロジェクトまで無料 |
| Firebase | データベース + 認証 + ストレージ | リアルタイム更新があるアプリ | 寛大な無料枠あり |
| Turso | 軽量データベース | データ量が少ないアプリ | 500DBまで無料 |
| SendGrid | メール送信 | メール通知・メルマガがあるアプリ | 月100通まで無料 |
| Stripe | 決済 | 有料イベント・会員課金があるアプリ | 決済手数料のみ |
| Brave Search | Web検索API | 検索機能があるアプリ | 月2,000クエリ無料 |

これらは必要になった時点でClaude Codeが「○○のアカウントが必要です」と教えてくれるので、事前に全部作る必要はありません。
`
        },
        {
          id: "env-cursor",
          title: "Cursorのセットアップ",
          content: `
## Cursorのセットアップ

### インストール

1. ブラウザで \`cursor.com\` にアクセス
2. 「Download」ボタンをクリック
3. ダウンロードされたファイルを開き、アプリケーションフォルダにドラッグ
4. Cursorを起動

### 初期設定

1. アカウント作成（Googleアカウントでログイン可能）
2. AIモデルの選択画面で「Claude」を選ぶ
3. テーマ（見た目）は好みで選択

### 画面の見方

\`\`\`
┌──────────────────────────────────────────────┐
│ メニューバー                                    │
├──────────┬────────────────┬───────────────────┤
│          │                │                   │
│ ファイル  │   エディタ      │   AIチャット       │
│ 一覧     │  （ファイルの    │  （ここにAIへの     │
│          │   中身が表示）   │   指示を入力）     │
│          │                │                   │
│          │                │                   │
├──────────┴────────────────┴───────────────────┤
│ ターミナル（下部に表示、必要に応じて）              │
└──────────────────────────────────────────────┘
\`\`\`

- **左**: フォルダ内のファイル一覧。クリックでファイルを開く
- **中央**: 選択したファイルの中身。直接編集も可能
- **右**: AIチャット。ここに日本語で指示を書く
- **下**: ターミナル。AIがコマンドを実行する場所（基本的に触らなくてよい）

### フォルダの開き方

1. メニュー「File」→「Open Folder...」
2. 作業したいフォルダを選択
3. 「Open」をクリック

**フォルダ名のルール:**
- 半角英数字とハイフン（\`-\`）のみ使用
- 日本語・スペース・特殊文字は使わない
- 例: \`expense-checker\`（OK）、\`経費チェッカー\`（NG）

### フォルダ構成の規則（ミラツクでの実際の構成）

\`\`\`
~/
├── projects/
│   ├── apps/          ← Webアプリ・業務アプリ
│   │   ├── expense-checker/
│   │   ├── schedule-sync/
│   │   └── ...（50以上のアプリ）
│   ├── research/      ← リサーチ系ツール
│   │   ├── research-dashboard/
│   │   └── research-agents/
│   └── utils/         ← ユーティリティ
├── work/              ← 業務関連文書
├── writings/          ← 論文・レポート
└── tools/             ← CLIツール
\`\`\`

新しいアプリを作るときは \`~/projects/apps/\` の中に新しいフォルダを作る。
`
        }
      ]
    },

    // =====================================================================
    // PART 2: SERVICES GUIDE
    // =====================================================================
    {
      id: "services",
      title: "サービス接続ガイド",
      description: "各外部サービスの登録・設定・接続方法",
      chapters: [
        {
          id: "svc-github",
          title: "GitHub",
          content: `
## GitHub — コードの保管と共有

### このサービスでできること

- アプリのコード（ファイル一式）をクラウドに保存
- 変更履歴の自動記録（いつ、何を変えたか）
- 複数人での共同作業
- Vercelと連携した自動デプロイ

### アカウント情報

| 項目 | 値 |
|---|---|
| URL | github.com |
| アカウント名 | yuyanishimura0312 |
| 認証方法 | GitHub CLI（\`gh\`コマンド） |
| トークンのスコープ | gist, read:org, repo, workflow |

### 基本操作（すべてClaude Codeが自動で行う）

**新しいリポジトリの作成:**
Claude Codeに「GitHubに保存して」と言うと、以下が自動実行される:
\`\`\`
git init                          ← フォルダをGit管理下に置く
git add -A                        ← すべてのファイルを記録対象にする
git commit -m "メッセージ"          ← 変更を記録する
gh repo create リポジトリ名 --private --source=. --push
                                   ← GitHubにリポジトリを作成し、コードを送信
\`\`\`

**既存リポジトリへの保存:**
\`\`\`
git add -A                        ← 変更ファイルを記録対象にする
git commit -m "変更内容の説明"      ← 変更を記録する
git push                          ← GitHubに送信する
\`\`\`

### リポジトリの公開/非公開

- **Private（非公開）**: URLを知っていてもアカウント権限がないと見れない。社内ツールのデフォルト
- **Public（公開）**: 誰でもコードを見れる。GitHub Pagesで公開するアプリはこちら

Claude Codeに「プライベートで作って」「パブリックで作って」と指定可能。

### ミラツクで作成済みのリポジトリ例

| リポジトリ名 | 種類 | 用途 |
|---|---|---|
| research-dashboard | Public | リサーチ結果の公開ダッシュボード |
| miratuku-team-hub | Private | 組織管理アプリ |
| policy-db | Public | 政策データベース |
| schedule-sync | Private | 日程調整ツール |
| claude-code-manual-app | Public | このマニュアル |

### GitHubで確認できること

ブラウザで \`github.com/yuyanishimura0312\` にアクセスすると:
- 作成したリポジトリの一覧が見える
- 各リポジトリをクリックするとコードが見える
- 「Commits」タブで変更履歴が見える
- 「Settings」でリポジトリの公開/非公開を切り替えられる
`
        },
        {
          id: "svc-vercel",
          title: "Vercel（デプロイ）",
          content: `
## Vercel — アプリの公開

### このサービスでできること

- 作ったアプリをインターネットに公開
- GitHubと連携し、コードを更新するたびに自動で再公開
- URLの自動発行（\`https://アプリ名.vercel.app\`）
- 無料でHTTPS対応（セキュリティ証明書が自動で付く）

### アカウント情報

| 項目 | 値 |
|---|---|
| URL | vercel.com |
| ログイン方法 | GitHubアカウント連携 |
| チーム名 | yuyas-projects-bb14d0d5 |
| CLI | \`npx vercel\` |

### デプロイの実際の手順

Claude Codeに「公開して」と言うと、以下が自動実行される:

**ステップ1: GitHubにコードを保存**
\`\`\`
git add -A && git commit -m "説明" && git push
\`\`\`

**ステップ2: Vercelプロジェクトを作成（初回のみ）**
\`\`\`
npx vercel link --yes --scope yuyas-projects-bb14d0d5
\`\`\`
→ GitHubリポジトリとVercelプロジェクトが接続される

**ステップ3: 本番環境にデプロイ**
\`\`\`
npx vercel --prod --scope yuyas-projects-bb14d0d5 --yes
\`\`\`
→ 数秒〜数十秒で公開完了。URLが発行される

**ステップ4: 以降の更新**
GitHubにpushするだけで自動的にVercelが再デプロイする（GitHub連携済みの場合）

### 環境変数の設定

アプリがAPIキーなどの秘密情報を使う場合、Vercelの管理画面で設定する:

1. \`vercel.com\` のダッシュボードにログイン
2. プロジェクトを選択
3. 「Settings」→「Environment Variables」
4. 変数名と値を入力して「Save」

**または、CLIから設定:**
\`\`\`
npx vercel env add VARIABLE_NAME
\`\`\`

**ミラツクでよく設定する環境変数:**

| 変数名 | 用途 | 設定が必要なアプリ |
|---|---|---|
| ANTHROPIC_API_KEY | Claude AI機能 | AI機能があるアプリ全般 |
| TURSO_DATABASE_URL | データベース接続 | Turso使用アプリ |
| TURSO_AUTH_TOKEN | データベース認証 | Turso使用アプリ |
| SENDGRID_API_KEY | メール送信 | メール機能があるアプリ |
| NEXT_PUBLIC_SUPABASE_URL | Supabase接続 | Supabase使用アプリ |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase認証 | Supabase使用アプリ |

### Vercelで公開中のアプリ一覧

\`vercel.com\` のダッシュボードで全プロジェクトを確認可能。
各プロジェクトには「Visit」ボタンがあり、公開URLに直接アクセスできる。

### GitHub Pages との使い分け

| | Vercel | GitHub Pages |
|---|---|---|
| 用途 | Next.js等の動的アプリ | 静的HTML/CSS/JSのサイト |
| 費用 | 無料（制限あり） | 無料 |
| URL | xxx.vercel.app | ユーザー名.github.io/リポジトリ名 |
| サーバー処理 | あり（API Routes使える） | なし（静的ファイルのみ） |
| 自動デプロイ | あり | あり |

**ミラツクでの使い分け:**
- Vercel → Next.jsアプリ、サーバー処理があるもの（16プロジェクト）
- GitHub Pages → 静的ダッシュボード、ドキュメントサイト（research-dashboard, app-launcher等）
`
        },
        {
          id: "svc-database",
          title: "データベース",
          content: `
## データベース — データの保存

アプリがデータを保存する必要がある場合、データベースを使います。ミラツクでは用途に応じて4種類のデータベースを使い分けています。

### 選び方の早見表

| やりたいこと | 選ぶデータベース | 理由 |
|---|---|---|
| 自分のPCだけで使うアプリ | SQLite | 設定不要、ファイル1つで完結 |
| 公開アプリで少量のデータ | Turso | 無料枠が大きい、セットアップが簡単 |
| ユーザーログインが必要 | Supabase | 認証機能が組み込み済み |
| リアルタイム更新が必要 | Firebase | データ変更が即座に画面に反映 |

---

### SQLite（ローカルデータベース）

**概要:** ファイル1つで動くデータベース。サーバー不要、アカウント不要。自分のPC内だけで使うアプリに最適。

**必要な設定:** なし（Claude Codeが自動で作成する）

**ミラツクでの使用例:**
| アプリ | データベースファイル | 保存しているデータ |
|---|---|---|
| researcher-profiler | researcher.db | 研究者情報、論文、委員会履歴 |
| policy-db | policy.db | 全省庁の審議会・委員データ |
| keyword-analyzer | keywords.db | キーワード分析結果 |

**特徴:**
- アプリのフォルダ内に \`.db\` ファイルとして保存される
- バックアップ = このファイルをコピーするだけ
- 制限: 同時に複数人がアクセスすると問題が起きることがある

---

### Turso（クラウドデータベース）

**概要:** SQLiteをクラウド化したもの。Vercelで公開するアプリで、複数人が使う場合に適している。

**アカウント作成:**
1. \`turso.tech\` にアクセス
2. GitHubアカウントでサインアップ
3. 無料プラン（500データベースまで）を選択

**データベースの作成:**
\`\`\`
brew install tursodatabase/tap/turso
turso auth login
turso db create アプリ名-db
turso db tokens create アプリ名-db
\`\`\`

**取得する情報（Vercelの環境変数に設定）:**

| 変数名 | 取得方法 | 例 |
|---|---|---|
| TURSO_DATABASE_URL | \`turso db show アプリ名-db --url\` | libsql://アプリ名-db-ユーザー名.turso.io |
| TURSO_AUTH_TOKEN | \`turso db tokens create アプリ名-db\` | eyJhbG...（長い文字列） |

**ミラツクでの使用例:**
- miratuku-team-hub（組織管理）
- organization-app（組織情報）
- miratuku-events（イベント管理）
- qualitative-research-tool（質的調査）

---

### Supabase（データベース + 認証）

**概要:** データベースに加えて、ユーザーログイン機能が最初から組み込まれている。会員制のアプリに最適。

**アカウント作成:**
1. \`supabase.com\` にアクセス
2. GitHubアカウントでサインアップ
3. 「New project」で新しいプロジェクトを作成
4. リージョンは「Northeast Asia (Tokyo)」を選択
5. データベースパスワードを設定（メモしておく）

**取得する情報:**
プロジェクトの「Settings」→「API」から:

| 変数名 | 場所 | 説明 |
|---|---|---|
| NEXT_PUBLIC_SUPABASE_URL | Project URL | https://xxxxx.supabase.co |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | anon public | eyJhbG...（公開用キー） |
| SUPABASE_SERVICE_ROLE_KEY | service_role | eyJhbG...（管理用キー、非公開） |

**ミラツクでの使用例:**
- schedule-sync（日程調整）
- librarian（学術検索）
- miratuku-commons（メンバーシップサイト）

---

### Firebase（リアルタイムデータベース）

**概要:** Googleが提供するバックエンドサービス。データが更新されると、全ユーザーの画面にリアルタイムで反映される。

**アカウント作成:**
1. \`console.firebase.google.com\` にアクセス
2. Googleアカウントでログイン
3. 「プロジェクトを追加」

**ミラツクでの構成:**

| 項目 | 値 |
|---|---|
| プロジェクトID | miratuku-afa2c |
| 認証ドメイン | miratuku-afa2c.firebaseapp.com |
| 使用サービス | Firestore, Authentication, Storage |

**使用例:**
- future-insight-workspace（未来洞察ワークスペース）
- research-dashboard（リサーチダッシュボードのFirestore連携）
- miratuku-news（ニュース管理）
- cxo-team（CxO経営会議シミュレーション）
`
        },
        {
          id: "svc-email",
          title: "メール送信（SendGrid）",
          content: `
## SendGrid — メール送信

### このサービスでできること

- アプリからのメール自動送信
- メルマガの一括配信
- 送信状況の追跡（開封率、クリック率）

### アカウント情報

| 項目 | 値 |
|---|---|
| URL | sendgrid.com |
| 無料枠 | 月100通 |
| 有料プラン | 月$19.95〜（月50,000通） |

### APIキーの取得

1. SendGridダッシュボードにログイン
2. 「Settings」→「API Keys」
3. 「Create API Key」→「Full Access」
4. 生成されたキー（\`SG.\`で始まる文字列）をコピー

**保存方法:**
\`\`\`
security add-generic-password -s "SENDGRID_API_KEY" -a "sendgrid" -w "SG.ここにキーを貼り付け"
\`\`\`

### 送信元メールアドレスの認証

SendGridでメールを送るには、送信元アドレスの認証が必要:
1. 「Settings」→「Sender Authentication」
2. 「Single Sender Verification」でメールアドレスを登録
3. 確認メールが届くので、リンクをクリックして認証完了

### ミラツクでの使用例

| アプリ | 用途 | 送信元 |
|---|---|---|
| email-system | メルマガ一括配信 | 設定済みアドレス |
| newsletter-app | ニュースレター | 設定済みアドレス |
| organization-app | 通知メール | 設定済みアドレス |
| miratuku-events | イベント案内 | 設定済みアドレス |
| meeting-scheduler | 会議招待 | 設定済みアドレス |

### Vercelでの環境変数設定

公開アプリでSendGridを使う場合、Vercelに環境変数を設定:
\`\`\`
SENDGRID_API_KEY=SG.xxxxx
SENDGRID_FROM_EMAIL=送信元アドレス
SENDGRID_FROM_NAME=送信者名
\`\`\`
`
        },
        {
          id: "svc-payment",
          title: "決済（Stripe）",
          content: `
## Stripe — オンライン決済

### このサービスでできること

- クレジットカード決済の受付
- サブスクリプション（月額課金）の管理
- 領収書の自動発行

### アカウント作成

1. \`stripe.com\` にアクセス
2. 「今すぐ始める」でアカウント作成
3. ビジネス情報を入力
4. 本番利用には銀行口座の登録が必要

### テスト環境と本番環境

Stripeには2つの環境がある:
- **テスト環境**: 実際のお金は動かない。開発中はこちらを使う
- **本番環境**: 実際に課金される。公開時に切り替える

**APIキーの取得:**
ダッシュボード →「開発者」→「APIキー」

| キー | 環境 | 用途 |
|---|---|---|
| pk_test_... | テスト | フロントエンド（ブラウザ側） |
| sk_test_... | テスト | バックエンド（サーバー側、非公開） |
| pk_live_... | 本番 | フロントエンド |
| sk_live_... | 本番 | バックエンド（絶対に公開しない） |

### ミラツクでの使用例

| アプリ | 用途 |
|---|---|
| miratuku-membership | メンバーシップの月額課金 |
| miratuku-events | イベント参加費の決済 |
`
        },
        {
          id: "svc-other",
          title: "その他のサービス",
          content: `
## その他のサービス

### Brave Search API（Web検索）

**用途:** アプリ内でWeb検索機能を提供する
**取得方法:** \`brave.com/search/api/\` でAPIキーを取得
**保存:** macOS Keychainに \`BRAVE_API_KEY\` として保存
**使用例:** researcher-profiler（委員会情報の自動検索）

---

### Google Books API（書籍検索）

**用途:** 書籍の検索・書誌情報の取得
**取得方法:** \`console.cloud.google.com\` → APIライブラリ → Books API を有効化 → 認証情報を作成
**保存:** macOS Keychainに \`google-books-api\` として保存
**使用例:** book-agent（書籍情報管理）

---

### Zoom API（会議作成）

**用途:** Zoomミーティングの自動作成
**必要な情報:**

| 変数名 | 取得場所 |
|---|---|
| ZOOM_ACCOUNT_ID | Zoom App Marketplace → Server-to-Server OAuth アプリ |
| ZOOM_CLIENT_ID | 同上 |
| ZOOM_CLIENT_SECRET | 同上 |

**使用例:** meeting-scheduler

---

### Slack API（メッセージ送受信）

**用途:** Slackチャンネルの監視、メッセージの送信
**取得方法:** \`api.slack.com/apps\` でアプリを作成 → Bot Token を取得
**変数名:** SLACK_BOT_TOKEN
**使用例:** miratuku-team-hub, organization-app

---

### EDINET API（金融データ）

**用途:** 有価証券報告書等の取得
**取得方法:** \`disclosure2dl.edinet-fsa.go.jp\` でアカウント作成 → APIキー取得
**変数名:** EDINET_API_KEY
**使用例:** ir-collector（IR情報収集）

---

### Notion API

**用途:** Notionページの作成・検索・更新
**取得方法:** \`developers.notion.com\` でインテグレーションを作成 → Internal Integration Token を取得
**変数名:** NOTION_TOKEN
**使用例:** notion-proxy（Notionデータのプロキシ）

---

### Plaud API（音声記録）

**用途:** Plaud録音デバイスの録音データ取得・文字起こし
**変数名:** PLAUD_TOKEN
**保存:** macOS Keychainに保存
**使用例:** secretary-app, ~/tools/plaud.py
`
        }
      ]
    },

    // =====================================================================
    // PART 3: CREDENTIALS MANAGEMENT
    // =====================================================================
    {
      id: "credentials",
      title: "認証情報の管理",
      description: "APIキー・パスワードの安全な保存と使い方",
      chapters: [
        {
          id: "cred-keychain",
          title: "macOS Keychainの使い方",
          content: `
## macOS Keychain — 認証情報の安全な保管庫

### Keychainとは

macOS Keychainは、パスワードやAPIキーを暗号化して安全に保存する仕組みです。Macのログインパスワードでロックされているので、他人がアクセスすることはできません。

ミラツクでは、すべてのAPIキーをKeychainに保存しています。

### 保存されている認証情報の一覧

| サービス名（-s の値） | アカウント（-a の値） | 用途 |
|---|---|---|
| ANTHROPIC_API_KEY | anthropic | Claude AI |
| PLAUD_TOKEN | plaud | Plaud録音API |
| BRAVE_API_KEY | brave | Brave検索 |
| google-books-api | google-books-api | Google Books |
| SENDGRID_API_KEY | sendgrid | メール送信 |

### 操作方法

**新しいキーを保存する:**
\`\`\`
security add-generic-password -s "サービス名" -a "アカウント名" -w "キーの値"
\`\`\`

例: Anthropic APIキーを保存する場合
\`\`\`
security add-generic-password -s "ANTHROPIC_API_KEY" -a "anthropic" -w "sk-ant-api03-xxxxx"
\`\`\`

**保存したキーを確認する:**
\`\`\`
security find-generic-password -s "サービス名" -w
\`\`\`

**キーを更新する（古いものを削除して新しく追加）:**
\`\`\`
security delete-generic-password -s "サービス名"
security add-generic-password -s "サービス名" -a "アカウント名" -w "新しいキー"
\`\`\`

### アプリからの自動取得の仕組み

Pythonアプリは以下のパターンでKeychainからキーを自動取得する:

\`\`\`python
import os, subprocess

def get_api_key(service_name):
    # まず環境変数をチェック
    key = os.environ.get(service_name, "")
    if key:
        return key
    # なければKeychainから取得
    result = subprocess.run(
        ["security", "find-generic-password",
         "-s", service_name, "-w"],
        capture_output=True, text=True
    )
    return result.stdout.strip()
\`\`\`

この仕組みにより、コードにAPIキーを直接書く必要がない。
`
        },
        {
          id: "cred-env",
          title: "環境変数の設定",
          content: `
## 環境変数 — アプリごとの設定情報

### 環境変数とは

アプリが動くときに参照する設定情報です。APIキーやデータベースの接続先など、環境によって変わる値を外部から渡す仕組みです。

### .envファイル（ローカル開発用）

プロジェクトのルートに \`.env.local\` ファイルを作成し、キーと値のペアを書く:

\`\`\`
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
SENDGRID_API_KEY=SG.xxxxx
TURSO_DATABASE_URL=libsql://xxxxx.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZDI1NTE5...
\`\`\`

**重要なルール:**
- \`.env.local\` は絶対にGitHubにアップロードしない（\`.gitignore\` に記載されている）
- 他の人と共有する場合は、値を空にした \`.env.example\` を用意する

### Vercel環境変数（本番環境用）

公開アプリで使う環境変数はVercelの管理画面で設定する:

1. \`vercel.com\` にログイン
2. プロジェクトを選択
3. 「Settings」→「Environment Variables」
4. 変数名と値を入力
5. 適用する環境を選択（Production / Preview / Development）
6. 「Save」

**CLIから設定する場合:**
\`\`\`
cd プロジェクトフォルダ
npx vercel env add VARIABLE_NAME
\`\`\`
値の入力を求められるので入力。

### 環境変数のプレフィックス規則（Next.jsの場合）

| プレフィックス | 見えるか | 用途 |
|---|---|---|
| NEXT_PUBLIC_ | ブラウザから見える | 公開して問題ない情報（SupabaseのURL等） |
| （プレフィックスなし） | サーバーのみ | 秘密にすべき情報（APIキー等） |

例:
- \`NEXT_PUBLIC_SUPABASE_URL\` → ブラウザに露出してOK
- \`SUPABASE_SERVICE_ROLE_KEY\` → サーバーのみ、絶対に公開しない
`
        }
      ]
    },

    // =====================================================================
    // PART 4: DEVELOPMENT WORKFLOW
    // =====================================================================
    {
      id: "workflow",
      title: "開発ワークフロー",
      description: "アプリを作る・動かす・公開する手順",
      chapters: [
        {
          id: "wf-create",
          title: "新しいアプリを作る",
          content: `
## 新しいアプリを作る — 実際の手順

### 手順の全体像

\`\`\`
1. フォルダを作る
2. Cursorで開く
3. AIに依頼する
4. ブラウザで確認する
5. 修正を繰り返す
6. GitHubに保存する
7. Vercelで公開する
\`\`\`

### 手順1: フォルダを作る

\`\`\`
mkdir ~/projects/apps/アプリ名
\`\`\`

例: 経費チェッカーを作る場合
\`\`\`
mkdir ~/projects/apps/expense-checker
\`\`\`

### 手順2: Cursorで開く

Cursorアプリで「File」→「Open Folder」→ 作ったフォルダを選択

### 手順3: AIに依頼する

Cursorの右側チャットパネルに依頼を入力。第6章の4要素（役割・文脈・制約・形式）を意識する。

### 手順4: ブラウザで確認する

**HTMLファイル1つのアプリ:**
- Finderで \`index.html\` をダブルクリック

**サーバーが必要なアプリ:**
- AIが「\`http://localhost:XXXX\` で確認できます」と言ったら、そのURLをブラウザに入力
- localhostは「自分のPC内だけで見える状態」の意味

### 手順5: 修正を繰り返す

「ここを変えて」「色を変えて」「機能を追加して」と日本語で指示。何度でも修正可能。

### 手順6: GitHubに保存する

AIに「GitHubに保存して」と伝える。以下が自動実行される:
- コードがGitHubにアップロードされる
- 変更履歴が記録される
- URLが発行される（例: github.com/yuyanishimura0312/expense-checker）

### 手順7: Vercelで公開する

AIに「Vercelで公開して」と伝える。以下が自動実行される:
- アプリがインターネットに公開される
- URLが発行される（例: expense-checker.vercel.app）
- 以降はGitHubに保存するだけで自動更新される

### Claude Codeに最初に送るメッセージのテンプレート

\`\`\`
【作りたいもの】
○○を管理するWebアプリを作ってください。

【背景】
現在は○○で管理しているが、○○という課題がある。

【機能】
- 機能1
- 機能2
- 機能3

【使う人】
社内スタッフ○名。ITに詳しくない。

【デザイン】
シンプルで見やすく、スマホでも使えるように。

【技術的な希望】
（以下から選ぶ）
- 1つのHTMLファイルで完結させて（最もシンプル）
- Next.jsで作って（本格的なWebアプリ）
- Pythonのflaskで作って（データ処理が多い場合）
\`\`\`
`
        },
        {
          id: "wf-maintain",
          title: "既存アプリの修正・更新",
          content: `
## 既存アプリの修正・更新

### 修正の手順

1. Cursorでアプリのフォルダを開く
2. AIに修正内容を伝える
3. ブラウザで確認する
4. 「保存して」と伝える（GitHubに保存 → Vercelに自動反映）

### よくある修正依頼の例

**機能追加:**
\`\`\`
このアプリにCSVエクスポート機能を追加してください。
一覧画面に「CSV出力」ボタンを置いて、表示中のデータを
ダウンロードできるようにして。
\`\`\`

**デザイン修正:**
\`\`\`
以下のデザインを修正してください:
- ヘッダーの背景色を #1a1a1a に変更
- フォントサイズを全体的に1段階大きくして
- モバイルでの表示が崩れているので修正して
\`\`\`

**バグ修正:**
\`\`\`
以下の問題を修正してください:
- 日付の表示が「2026-04-10」になっているが「2026年4月10日」にしたい
- 金額が0円のデータを入力するとエラーが出る
- ページをリロードするとフィルタ設定がリセットされる
\`\`\`

### 更新の公開

修正が完了したら:
\`\`\`
保存して公開して。
\`\`\`

AIが git commit → git push → Vercel自動デプロイの一連を実行。数十秒で公開版に反映される。
`
        },
        {
          id: "wf-local",
          title: "ローカルサーバーの操作",
          content: `
## ローカルサーバーの操作

### ローカルサーバーとは

アプリを自分のPC上で動かすための仕組みです。\`http://localhost:XXXX\` というURLでアクセスします。公開前の確認に使います。

### 起動と停止

**起動（AIが自動で行うことが多い）:**

| アプリの種類 | 起動コマンド | デフォルトURL |
|---|---|---|
| Next.js | \`npm run dev\` | http://localhost:3000 |
| Python Flask | \`python app.py\` | http://localhost:5000〜5300 |
| 静的HTML | \`python3 -m http.server 8000\` | http://localhost:8000 |

**停止:**
ターミナルで \`Ctrl + C\` を押す

### ポート番号について

\`localhost:5210\` の \`5210\` がポート番号。同時に複数のアプリを動かす場合、それぞれ別のポート番号を使う。

**ミラツクで使用中のポート割り当て:**

| ポート | アプリ |
|---|---|
| 3000 | Next.jsアプリ（デフォルト） |
| 5050 | secretary-app |
| 5055 | document-generator |
| 5065 | mail-reply-assistant |
| 5200 | organization-app |
| 5210 | researcher-profiler |
| 5211 | schedule-checker |
| 5300 | book-agent |

### 「ポートが既に使われています」エラー

\`\`\`
OSError: [Errno 48] Address already in use
\`\`\`

このエラーが出たら、該当ポートで動いているプロセスを停止する:
\`\`\`
lsof -ti:ポート番号 | xargs kill
\`\`\`

例: ポート5210を解放する場合
\`\`\`
lsof -ti:5210 | xargs kill
\`\`\`
`
        }
      ]
    },

    // =====================================================================
    // PART 5: PROJECT REFERENCE
    // =====================================================================
    {
      id: "reference",
      title: "プロジェクトリファレンス",
      description: "作成済みアプリの構成と使用サービス一覧",
      chapters: [
        {
          id: "ref-list",
          title: "全アプリ一覧",
          content: `
## 作成済みアプリ一覧

### Vercelで公開中のアプリ

| アプリ名 | 用途 | 使用技術 | DB | 外部サービス |
|---|---|---|---|---|
| miratuku-team-hub | 組織管理 | Next.js | Turso | Slack, Claude AI |
| policy-db | 政策データベース | Next.js | SQLite→JSON | なし |
| schedule-sync | 日程調整 | Next.js | Supabase | Google Calendar |
| librarian | 学術検索 | Next.js | Supabase | Claude AI |
| miratuku-events | イベント管理 | Next.js | Turso | Stripe, SendGrid |
| pr-generator-public | プレスリリース | Next.js | なし | Claude AI |
| essence-crm | 営業管理 | Next.js | Turso | Claude AI |
| claude-code-manual | このマニュアル | 静的HTML | なし | なし |
| newsletter-app | メルマガ管理 | Next.js | なし | SendGrid |
| document-generator | 文書生成 | Flask | なし | Claude AI |
| miratuku-commons | メンバーシップ | Next.js | Supabase | Resend |

### GitHub Pagesで公開中のサイト

| サイト名 | URL | 用途 |
|---|---|---|
| research-dashboard | yuyanishimura0312.github.io/research-dashboard | リサーチ結果の公開 |
| app-launcher | yuyanishimura0312.github.io/app-launcher | アプリランチャー |
| future-insight-app | yuyanishimura0312.github.io/future-insight-app | 未来洞察データ |
| miratuku-news | yuyanishimura0312.github.io/miratuku-news | ニュース管理 |

### ローカル専用アプリ

| アプリ名 | ポート | 用途 | DB |
|---|---|---|---|
| researcher-profiler | 5210 | 研究者情報管理 | SQLite |
| secretary-app | 5050 | AI秘書 | なし |
| book-agent | 5300 | 書籍情報管理 | SQLite |
| keyword-analyzer | なし | キーワード分析 | SQLite |
| lecture-video-editor | なし | 講義動画編集 | なし |
`
        }
      ]
    }
  ]
};

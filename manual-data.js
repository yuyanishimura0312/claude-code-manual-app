// Claude Code Operations Manual - Comprehensive Data

const MANUAL = {
  title: "Claude Code 実務マニュアル",
  subtitle: "完全版",
  version: "2.0",
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

Claude Codeを使い始めるには、いくつかのソフトウェアをMacにインストールする必要があります。「インストール」と聞くと難しそうですが、やることは「コマンドをコピーして貼り付ける」だけです。

この章では、必要なソフトウェアを1つずつ順番にインストールしていきます。

---

### 「ターミナル」を開く

まず「ターミナル」というアプリを開きます。ターミナルは、文字を入力してパソコンに指示を出すためのアプリです。普段はアイコンをクリックして操作しますが、ターミナルでは文字で指示を出します。

**開き方:**
1. キーボードで \`Command\` + \`Space\` を同時に押す（Spotlight検索が開く）
2. 「ターミナル」と入力する
3. 表示された「ターミナル」をクリック

黒い（または白い）ウィンドウが開き、文字が入力できる状態になります。これがターミナルです。

**覚えておくこと:**
- ターミナルに文字を入力して \`Enter\` を押すと、その指示が実行されます
- 間違えた場合は、ウィンドウを閉じれば止まります。壊れることはありません
- パスワードを入力するとき、画面には何も表示されませんが、ちゃんと入力されています

---

### Homebrewをインストールする

Homebrewは「ソフトウェアのインストールを簡単にするツール」です。App Storeでアプリをインストールするのと同じことを、ターミナルからできるようにしてくれます。このあとの手順で何度も使うので、最初にインストールします。

**やること:**
1. ターミナルを開く
2. 以下のコマンドを**まるごとコピー**して、ターミナルに貼り付ける
3. \`Enter\` を押す

\`\`\`
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
\`\`\`

4. 「Password:」と表示されたら、**Macのログインパスワード**を入力して \`Enter\`（画面には何も表示されませんが入力されています）
5. 「Press RETURN to continue」と表示されたら \`Enter\` を押す
6. 数分間待つ。たくさんの文字が流れますが、正常です

**うまくいったか確認する:**
\`\`\`
brew --version
\`\`\`
「Homebrew 4.x.x」のようにバージョン番号が表示されれば成功です。

**エラーが出た場合:**
「command not found: brew」と表示された場合、ターミナルに以下を貼り付けて実行してください:
\`\`\`
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
\`\`\`
そのあと、もう一度 \`brew --version\` を試してください。

---

### Node.jsをインストールする

Node.jsは、Webアプリを動かすために必要なソフトウェアです。「Webアプリのエンジン」だと思ってください。Claude Codeが作るアプリの多くがNode.jsで動きます。

**やること:**
\`\`\`
brew install node
\`\`\`

数分かかります。完了したら確認:
\`\`\`
node --version
\`\`\`
「v20.x.x」や「v24.x.x」のように表示されればOKです。

---

### Pythonを確認する

Pythonは、データ処理やAI連携でよく使うプログラミング言語です。Macには最初から入っていることが多いので、まず確認します。

**確認方法:**
\`\`\`
python3 --version
\`\`\`

「Python 3.9」以上が表示されればOKです。表示されない場合:
\`\`\`
brew install python
\`\`\`

---

### Gitを確認する

Gitは、ファイルの変更履歴を自動的に記録してくれるツールです。Wordで「報告書_ver1」「報告書_ver2」とファイル名を変えて管理していた作業を、自動でやってくれるものだと思ってください。

**確認方法:**
\`\`\`
git --version
\`\`\`
バージョンが表示されればOKです。Macには最初から入っています。

---

### この章のまとめ

以下の4つがインストールされていれば、環境構築は完了です。

| ソフトウェア | 確認コマンド | 何のために使うか |
|---|---|---|
| Homebrew | \`brew --version\` | 他のソフトをインストールするため |
| Node.js | \`node --version\` | Webアプリを動かすため |
| Python | \`python3 --version\` | データ処理・AI連携のため |
| Git | \`git --version\` | ファイルの変更履歴を管理するため |

すべて1回だけやれば、以降は必要ありません。
`
        },
        {
          id: "env-accounts",
          title: "アカウントを作る",
          content: `
## 必要なアカウントを作る

Claude Codeでアプリを作り、インターネットに公開するためには、いくつかの外部サービスのアカウントが必要です。すべて無料で作れます。

「なぜこんなにたくさんのサービスが必要なの？」と思うかもしれません。それぞれのサービスには専門の役割があります:

- **GitHub**: 作ったファイルを保管する倉庫
- **Vercel**: 作ったアプリをインターネットに公開する場所
- **Anthropic**: AIの頭脳を使うための鍵

この3つだけあれば、ほとんどのアプリを作って公開できます。

<div class="concept-cards"><div class="concept-card" style="border-left:3px solid #7A4033"><div class="icon">&#128193;</div><div class="title">GitHub</div><div class="body">コードの倉庫。パソコンが壊れてもファイルが残る</div></div><div class="concept-card" style="border-left:3px solid #A86B50"><div class="icon">&#127760;</div><div class="title">Vercel</div><div class="body">公開の窓口。URLを発行してくれる</div></div><div class="concept-card" style="border-left:3px solid #CEA26F"><div class="icon">&#129504;</div><div class="title">Anthropic</div><div class="body">AIの頭脳。アプリにAI機能をつけるための鍵</div></div></div>

---

### 1. GitHub（ギットハブ）アカウントを作る

**GitHubとは:** 作ったアプリのファイル一式をインターネット上に保存しておく場所です。Googleドライブと似ていますが、「誰が、いつ、何を変更したか」が自動で記録される点が違います。

**作り方:**
1. ブラウザで <a href="https://github.com/signup" target="_blank" rel="noopener">github.com</a> にアクセスする
2. 「Sign up」ボタンをクリック
3. メールアドレスを入力 → 「Continue」
4. パスワードを設定（15文字以上、または8文字以上+数字+小文字を含む）
5. ユーザー名を決める（半角英数字。あとで変更可能）
6. メール認証を完了する（届いたメールのリンクをクリック）

**次にやること — パソコンからGitHubを使えるようにする:**

ターミナルで以下を実行します。これにより、ターミナルからGitHubにファイルを送れるようになります。

\`\`\`
brew install gh
\`\`\`

インストールが終わったら:
\`\`\`
gh auth login
\`\`\`

いくつか質問されるので、以下のように答えてください:
1. 「What account do you want to log into?」→ **GitHub.com** を選択（矢印キーで選んでEnter）
2. 「What is your preferred protocol?」→ **HTTPS** を選択
3. 「Authenticate Git with your GitHub credentials?」→ **Yes**
4. 「How would you like to authenticate?」→ **Login with a web browser**
5. 表示されるコード（8桁）をメモする
6. ブラウザが開くので、コードを入力してGitHubアカウントでログイン

**うまくいったか確認する:**
\`\`\`
gh auth status
\`\`\`
「Logged in to github.com as あなたのユーザー名」と表示されれば成功です。

---

### 2. Vercel（バーセル）アカウントを作る

**Vercelとは:** 作ったアプリをインターネットに公開してくれるサービスです。GitHubに保存したファイルを自動的に読み取り、Webサイトとして世界中からアクセスできる状態にしてくれます。

**作り方:**
1. ブラウザで <a href="https://vercel.com/signup" target="_blank" rel="noopener">vercel.com</a> にアクセス
2. 「Sign Up」をクリック
3. 「Continue with GitHub」を選択（さっき作ったGitHubアカウントで連携）
4. GitHubへのアクセスを許可する

これだけで完了です。GitHubと連携しているので、別のパスワードを覚える必要はありません。

**次にやること — パソコンからVercelを使えるようにする:**
\`\`\`
npm install -g vercel
vercel login
\`\`\`
ブラウザが開くので、Vercelアカウントでログイン。

**うまくいったか確認する:**
\`\`\`
vercel whoami
\`\`\`
あなたのアカウント名が表示されれば成功です。

---

### 3. Anthropic（アンソロピック）アカウントを作る

**Anthropicとは:** Claude（AI）を開発している会社です。アプリの中でAI機能を使いたい場合、Anthropicの「APIキー」が必要になります。

「APIキー」とは、AIを使うための「パスワード」のようなものです。このキーがないと、アプリからAIに質問を送ることができません。

**作り方:**
1. ブラウザで <a href="https://console.anthropic.com/" target="_blank" rel="noopener">console.anthropic.com</a> にアクセス
2. 「Sign up」でアカウントを作成（メールアドレスまたはGoogleアカウント）
3. ログイン後、左メニューから「API Keys」をクリック
4. 「Create Key」をクリック
5. キーの名前を入力（例: 「work」など何でもOK）
6. 表示されたキー（\`sk-ant-\` で始まる長い文字列）を**必ずコピー**する

**重要:** このキーは一度しか表示されません。閉じてしまうと二度と見れないので、必ずこの時点でコピーしてください。

**キーを安全に保存する:**

コピーしたキーを、Macの「キーチェーン」という安全な保管庫に保存します。ターミナルで以下を実行してください（\`sk-ant-...\` の部分を、コピーしたキーに置き換えます）:

\`\`\`
security add-generic-password -s "ANTHROPIC_API_KEY" -a "anthropic" -w "sk-ant-ここにコピーしたキーを貼り付ける"
\`\`\`

**保存できたか確認する:**
\`\`\`
security find-generic-password -s "ANTHROPIC_API_KEY" -w
\`\`\`
キーが表示されれば成功です。

---

### 必要になったときに作るアカウント

上の3つ（GitHub、Vercel、Anthropic）があれば、多くのアプリを作れます。以下のサービスは、特定の機能が必要になったときにClaude Codeが「○○のアカウントが必要です」と教えてくれるので、その時点で作ればOKです。

| サービス | どんなときに必要か | 無料枠 |
|---|---|---|
| Supabase | ユーザーのログイン機能を作るとき | 2プロジェクトまで |
| Firebase | データがリアルタイムで更新されるアプリを作るとき | 寛大な無料枠 |
| Turso | データを大量に保存するWebアプリを作るとき | 500DBまで |
| SendGrid | アプリからメールを自動送信するとき | 月100通まで |
| Stripe | アプリで決済（課金）を受け付けるとき | 手数料のみ |
| Brave Search | アプリにWeb検索機能をつけるとき | 月2,000回まで |

各サービスの詳しいセットアップ手順は「サービス接続ガイド」の章で説明します。
`
        },
        {
          id: "env-cursor",
          title: "開発環境のセットアップ",
          content: `
## 開発環境のセットアップ

Claude Codeを使う方法は主に2つあります。どちらでも同じことができますが、それぞれ特徴があります。

| 方法 | 特徴 | おすすめの人 |
|---|---|---|
| **Claude Code CLI（ターミナル）** | 最も高機能。全機能が使える | メインの開発環境。本マニュアルの推奨 |
| **Cursor（エディタアプリ）** | ファイルの中身を見ながら作業できる | コードを目で確認したい人 |

---

### Claude Code CLI をインストールする

Claude Code CLIは、ターミナルで直接AIに指示を出せるツールです。ファイルの作成・編集、コマンドの実行、Git操作まですべてAIが行ってくれます。

**やること:**
\`\`\`
npm install -g @anthropic-ai/claude-code
\`\`\`

**うまくいったか確認する:**
\`\`\`
claude --version
\`\`\`

バージョン番号が表示されれば成功です。

**初回起動:**
\`\`\`
cd ~/projects/apps/アプリの名前
claude
\`\`\`

初回はAnthropicアカウントでのログインが求められます。ブラウザが開くので、ログインしてください。

**基本操作:**
- 起動したら、そのまま日本語で指示を入力して \`Enter\` を押す
- AIがファイルの作成・編集を提案してきたら、承認（\`y\`）または拒否（\`n\`）を選ぶ
- 終了するには \`/quit\` と入力するか、\`Ctrl\` + \`C\` を2回押す

---

### Cursor（オプション）

Cursorは、Claude Codeを使うためのエディタアプリです。ChatGPTのようなチャット画面があり、そこにやりたいことを日本語で入力すると、AIがファイルを作成・編集してくれます。

---

### インストール

1. ブラウザで <a href="https://www.cursor.com/" target="_blank" rel="noopener">cursor.com</a> にアクセス
2. 「Download」ボタンをクリック（Mac版が自動で選ばれます）
3. ダウンロードされた \`.dmg\` ファイルを開く
4. Cursorのアイコンをアプリケーションフォルダにドラッグ
5. アプリケーションフォルダからCursorを起動

初回起動時に「開発元を確認できないため開けません」と出る場合:
→ 「システム設定」→「プライバシーとセキュリティ」→「このまま開く」をクリック

---

### 初期設定

1. **アカウント作成**: 「Sign up」をクリック。Googleアカウントでログインするのが簡単です
2. **AIモデルの選択**: 「Claude」を選んでください
3. **テーマ**: 画面の見た目です。好みで選んでOK（あとから変更可能）

---

### 画面の見方

Cursorを開くと、こんな画面になります:

<div class="diagram"><div class="diagram-title">Cursor の画面構成</div><div class="mockup"><div class="mockup-bar"><div class="mockup-dot r"></div><div class="mockup-dot y"></div><div class="mockup-dot g"></div><span style="margin-left:8px;color:#6c7086;font-size:11px">Cursor - my-app</span></div><div class="mockup-body"><div class="mockup-panel"><div class="mockup-panel-title">ファイル一覧</div><div class="mockup-file active">index.html</div><div class="mockup-file">style.css</div><div class="mockup-file">app.js</div></div><div class="mockup-panel"><div class="mockup-panel-title">エディタ（ファイルの中身）</div><div style="padding:4px 0"><span class="mockup-comment">&lt;!-- コードが表示される --&gt;</span></div><div><span class="mockup-code">&lt;h1&gt;</span>経費チェッカー<span class="mockup-code">&lt;/h1&gt;</span></div></div><div class="mockup-panel mockup-chat"><div class="mockup-panel-title">AIチャット</div><div class="mockup-chat-msg user">経費管理アプリを作って</div><div class="mockup-chat-msg ai">承知しました。入力フォームと集計機能を作成します...</div></div></div></div></div>

**それぞれの役割:**
- **左側（ファイル一覧）**: フォルダの中にあるファイルが表示されます。クリックでファイルを開けます
- **中央（エディタ）**: ファイルの中身が表示されます。直接編集することもできますが、基本はAIに任せます
- **右側（AIチャット）**: ここに日本語で指示を書きます。AIとのやりとりはすべてここで行います
- **下部（ターミナル）**: AIがコマンドを実行する場所です。基本的に触る必要はありません

---

### フォルダを開く

Cursorで作業するには、まず「作業フォルダ」を開きます。

1. メニューの「File」→「Open Folder...」をクリック
2. 作業したいフォルダを選んで「Open」

**新しいアプリを作る場合は、先にフォルダを作ります:**

Finderで新しいフォルダを作るか、ターミナルで:
\`\`\`
mkdir ~/projects/apps/アプリの名前
\`\`\`

**フォルダ名のルール（重要）:**
- **半角英数字** と **ハイフン（-）** だけを使う
- 日本語、スペース、特殊文字（!@#など）は使わない
- すべて小文字にする

| OK | NG | 理由 |
|---|---|---|
| \`expense-checker\` | \`経費チェッカー\` | 日本語はエラーの原因になる |
| \`meeting-notes\` | \`Meeting Notes\` | スペースと大文字は避ける |
| \`report-2026\` | \`report 2026!\` | スペースと特殊文字はNG |

---

### AIに話しかける

フォルダを開いたら、右側のチャットパネルに日本語で指示を入力します。

**例:**
\`\`\`
経費を記録・集計できるWebアプリを作ってください。
1つのHTMLファイルで完結させてください。
\`\`\`

AIがファイルの作成を提案してきます。内容を確認して:
- **Accept（承認）**: 変更を適用する
- **Reject（拒否）**: 変更を取り消す

「Accept」を押すと、実際にファイルが作成・変更されます。

---

### この章のまとめ

| やること | 状態 |
|---|---|
| Cursorをインストールした | □ |
| アカウントを作成してログインした | □ |
| AIモデルでClaudeを選択した | □ |
| フォルダの開き方を理解した | □ |
| フォルダ名のルールを理解した | □ |
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
      description: "各外部サービスの登録・設定・接続の手順",
      chapters: [
        {
          id: "svc-github",
          title: "GitHub（コードの保管）",
          content: `
## GitHub — コードを安全に保管する

### GitHubの役割

あなたがClaude Codeでアプリを作ると、パソコンの中にファイルが作られます。しかし、このままではパソコンが壊れたらファイルが消えてしまいますし、他の人と共有することもできません。

GitHubは、これらのファイルをインターネット上に安全に保存してくれるサービスです。

**GitHubがやってくれること:**
- ファイルのバックアップ（パソコンが壊れても安心）
- 変更履歴の自動記録（いつ、何を変えたかが全部残る）
- 他のメンバーとの共有
- Vercel（公開サービス）との自動連携

<div class="diagram"><div class="diagram-title">あなたのPC・GitHub・Vercel の関係</div><div class="diagram-body"><div class="arch"><div class="arch-box local"><div class="arch-icon">&#128187;</div><div class="arch-label">あなたのPC</div><div class="arch-desc">Cursorで作業する場所。ファイルはここに作られる</div></div><div class="arch-arrow">&#10132;</div><div class="arch-box cloud"><div class="arch-icon">&#128193;</div><div class="arch-label">GitHub</div><div class="arch-desc">ファイルのバックアップ先。変更履歴も自動記録</div></div><div class="arch-arrow">&#10132;</div><div class="arch-box public"><div class="arch-icon">&#127760;</div><div class="arch-label">Vercel</div><div class="arch-desc">アプリを公開する場所。URLが発行される</div></div></div></div></div>

---

### 知っておくべき用語

GitHubを使っていると、AIが以下の言葉を使うことがあります。難しく考える必要はありませんが、意味を知っておくとAIの動作が理解しやすくなります。

| AIが言うこと | 意味 | あなたの日常に例えると |
|---|---|---|
| 「リポジトリを作成します」 | アプリ専用の保管フォルダを作る | Googleドライブに新しいフォルダを作るようなもの |
| 「コミットします」 | 変更を記録する | 「上書き保存」のようなもの（ただし履歴が残る） |
| 「プッシュします」 | 記録した変更をGitHubに送信する | ファイルをクラウドにアップロードするようなもの |
| 「プルします」 | GitHubから最新の状態を取得する | クラウドからファイルをダウンロードするようなもの |

---

### 基本的な操作（Claude Codeが自動で行う）

以下は、Claude Codeに「保存して」と伝えたときにAIが自動で行うことです。あなたが直接操作する必要はありません。

**初めてのアプリを保存するとき:**
\`\`\`
git init                              ← フォルダを「Git管理下」に置く
git add -A                            ← すべてのファイルを保存対象にする
git commit -m "最初のバージョン"        ← 変更を記録する
gh repo create アプリ名 --private      ← GitHubにフォルダ（リポジトリ）を作る
git push                              ← ファイルをGitHubに送信する
\`\`\`

**2回目以降の保存:**
\`\`\`
git add -A                            ← 変更されたファイルを保存対象にする
git commit -m "○○を修正"              ← 変更を記録する
git push                              ← GitHubに送信する
\`\`\`

---

### リポジトリの「公開」と「非公開」

GitHubのリポジトリ（保管フォルダ）には2つの状態があります:

| 設定 | 意味 | 使い分け |
|---|---|---|
| Private（非公開） | 自分（と許可した人）だけがコードを見れる | 社内ツール、業務アプリ |
| Public（公開） | 誰でもコードを見れる | 公開するダッシュボード、資料サイト |

Claude Codeに「プライベートで」「パブリックで」と指定できます。指定しなければ、通常はプライベートで作成されます。

---

### GitHubの画面で確認する方法

ブラウザで \`github.com\` にログインすると:
- **自分のリポジトリ一覧**: トップページに表示される
- **コードの中身**: リポジトリをクリック → ファイルの一覧と中身が見れる
- **変更履歴**: リポジトリ内の「Commits」タブで、過去のすべての変更が見れる

普段はClaude Codeがすべて操作してくれるので、GitHubの画面を使う機会は少ないかもしれません。ただ、「ちゃんと保存されているかな」と確認したいときに便利です。
`
        },
        {
          id: "svc-vercel",
          title: "Vercel（アプリの公開）",
          content: `
## Vercel — アプリをインターネットに公開する

### Vercelの役割

アプリを作った段階では、あなたのパソコンの中でしか動いていません。他の人がブラウザからアクセスできるようにするには、アプリを「インターネット上のコンピュータ」に置く必要があります。この作業を「デプロイ（公開）」と呼びます。

Vercelは、このデプロイを自動的にやってくれるサービスです。

**Vercelがやってくれること:**
- アプリをインターネットに公開する
- \`https://あなたのアプリ名.vercel.app\` というURLを自動で発行する
- GitHubにコードを保存するたびに、自動で最新版に更新してくれる
- 世界中からアクセスできるように高速化してくれる
- HTTPS（セキュリティ付きの通信）を自動で設定してくれる

---

### デプロイの手順（Claude Codeが自動で行う）

Claude Codeに「公開して」と伝えると、以下が自動で行われます:

**ステップ1 — GitHubに保存する**
\`\`\`
git add -A && git commit -m "説明" && git push
\`\`\`
→ 最新のコードがGitHubに送信される

**ステップ2 — Vercelと接続する（初回のみ）**
\`\`\`
npx vercel link --yes
\`\`\`
→ 「このフォルダとVercelを紐づけますよ」という設定が行われる

**ステップ3 — 本番公開する**
\`\`\`
npx vercel --prod --yes
\`\`\`
→ 数秒〜数十秒で公開完了。URLが表示される

**ステップ4 — 以降の更新**
GitHubに保存（push）するだけで、Vercelが自動的に最新版に更新してくれる。手動で「公開して」と言う必要はない。

---

### 公開後のURLについて

公開が完了すると、こんなURLが発行されます:
\`\`\`
https://アプリ名.vercel.app
\`\`\`

このURLを他の人に共有すれば、誰でもブラウザからアプリにアクセスできます。

**注意:** このURLを知っている人なら誰でもアクセスできます。社内だけで使いたい場合は:
- URLを社内メンバーにだけ共有する
- Claude Codeに「パスワード認証をつけて」と依頼する

---

### 環境変数の設定

アプリがAPIキー（AIの鍵やメール送信の鍵など）を使う場合、その情報をVercelに教える必要があります。コードの中に直接書くと、GitHubで公開したときに鍵が漏れてしまうからです。

**環境変数とは:** アプリに渡す「秘密の設定値」です。コードとは別の場所に保管され、アプリが動くときだけ参照されます。

**設定方法（ブラウザから）:**
1. \`vercel.com\` にログイン
2. プロジェクト（アプリ）を選択
3. 「Settings」タブ →「Environment Variables」
4. 「Key」に変数名、「Value」に値を入力
5. 「Save」をクリック

**設定方法（ターミナルから、Claude Codeが行うことが多い）:**
\`\`\`
npx vercel env add 変数名
\`\`\`
→ 値の入力を求められるので入力する

**よく設定する環境変数の例:**

| 変数名 | 何のため | どんなアプリで必要か |
|---|---|---|
| ANTHROPIC_API_KEY | AIの機能を使うため | AI機能があるアプリ |
| SENDGRID_API_KEY | メールを送信するため | メール送信機能があるアプリ |
| TURSO_DATABASE_URL | データベースに接続するため | データを保存するアプリ |
| TURSO_AUTH_TOKEN | データベースの認証 | 同上 |
| NEXT_PUBLIC_SUPABASE_URL | Supabaseに接続するため | ログイン機能があるアプリ |

---

### もう一つの公開方法: GitHub Pages

Vercelのほかに、GitHub Pagesという無料の公開方法もあります。

| | Vercel | GitHub Pages |
|---|---|---|
| 向いているアプリ | 本格的なWebアプリ | 静的なサイト（HTML/CSS/JSだけ） |
| サーバー処理 | できる | できない |
| URL | xxx.vercel.app | ユーザー名.github.io/リポジトリ名 |
| 費用 | 無料（制限あり） | 完全無料 |

Claude Codeに「GitHub Pagesで公開して」と伝えれば、GitHub Pagesでの公開も可能です。
`
        },
        {
          id: "svc-database",
          title: "データベース（データの保存）",
          content: `
## データベース — アプリのデータを保存する

### データベースとは

アプリで扱うデータ（顧客情報、イベント参加者、経費の記録など）を、整理して保存しておく仕組みです。

「Excelの超強力版」と考えてください。Excelと同じように行と列でデータを管理しますが、10万件・100万件のデータでも問題なく動き、複数人が同時に使えます。

---

### どのデータベースを使えばいい？

データベースにはいくつかの種類があります。Claude Codeに「○○を管理するアプリを作って」と依頼すれば、AIが適切なものを選んでくれますが、それぞれの特徴を知っておくと、AIとの相談がスムーズになります。

<div class="diagram"><div class="diagram-title">どのデータベースを使う？</div><div class="diagram-body"><div class="decision"><div class="decision-q">アプリを自分のPCだけで使う？</div><div class="decision-branches"><div class="decision-branch" style="background:#FAF4EE"><div class="label">はい</div><div class="answer">SQLite</div><div class="detail">設定不要。ファイル1つで動く</div></div><div class="decision-branch"><div class="label">いいえ（公開する）</div><div class="answer">&#8595; 次の質問へ</div><div class="detail"></div></div></div></div><div class="decision"><div class="decision-q">ユーザーのログイン機能が必要？</div><div class="decision-branches"><div class="decision-branch" style="background:#F5EFE8"><div class="label">はい</div><div class="answer">Supabase</div><div class="detail">ログイン機能が最初から付いている</div></div><div class="decision-branch"><div class="label">いいえ</div><div class="answer">&#8595; 次の質問へ</div><div class="detail"></div></div></div></div><div class="decision"><div class="decision-q">データがリアルタイムで更新される？</div><div class="decision-branches"><div class="decision-branch" style="background:#FFF4EC"><div class="label">はい</div><div class="answer">Firebase</div><div class="detail">画面を開いたまま最新データが反映</div></div><div class="decision-branch" style="background:#F5EFE8"><div class="label">いいえ</div><div class="answer">Turso</div><div class="detail">無料枠が大きく設定も簡単</div></div></div></div></div></div></div>

| やりたいこと | 最適なデータベース | 理由 |
|---|---|---|
| 自分のパソコンだけで使う | **SQLite** | 設定不要。ファイル1つで動く |
| 公開アプリでデータを保存する | **Turso** | 無料枠が大きく、設定が簡単 |
| ユーザーのログイン機能も欲しい | **Supabase** | ログイン機能が最初から付いている |
| データがリアルタイムで変わる | **Firebase** | 画面を開いたまま最新データが反映される |

---

### SQLite（最もシンプル）

**特徴:** アプリのフォルダ内に \`.db\` という1つのファイルとして保存される。アカウント作成不要、インターネット接続不要。

**使う場面:** 自分のパソコンでだけ使うアプリ。試作段階のアプリ。

**Claude Codeへの伝え方:**
\`\`\`
データはSQLiteで保存してください。
\`\`\`

**バックアップ方法:** \`.db\` ファイルをコピーするだけ。

---

### Turso（公開アプリ向け）

**特徴:** SQLiteをクラウドに置いたもの。公開アプリで複数人がアクセスしてもOK。

**アカウント作成:**
1. ブラウザで <a href="https://turso.tech/" target="_blank" rel="noopener">turso.tech</a> にアクセス
2. 「Sign up」→ GitHubアカウントで登録

**データベースの作成（ターミナルで）:**
\`\`\`
brew install tursodatabase/tap/turso
turso auth login
turso db create 好きな名前
\`\`\`

**接続に必要な情報を取得する:**
\`\`\`
turso db show 好きな名前 --url
turso db tokens create 好きな名前
\`\`\`

1つ目のコマンドで表示される URL → 環境変数 \`TURSO_DATABASE_URL\` に設定
2つ目のコマンドで表示されるトークン → 環境変数 \`TURSO_AUTH_TOKEN\` に設定

**Vercelの環境変数に設定する（公開アプリの場合）:**
Vercelのダッシュボード → プロジェクト → Settings → Environment Variables で上の2つを設定。

---

### Supabase（ログイン機能付き）

**特徴:** データベースに加えて、ユーザーのログイン機能（メール+パスワード、Googleログインなど）が最初から組み込まれている。

**アカウント作成:**
1. ブラウザで <a href="https://supabase.com/dashboard" target="_blank" rel="noopener">supabase.com</a> にアクセス
2. 「Start your project」→ GitHubアカウントで登録
3. 「New project」をクリック
4. プロジェクト名を入力
5. データベースのパスワードを設定（メモしておく！）
6. リージョン（サーバーの場所）は「Northeast Asia (Tokyo)」を選択
7. 「Create new project」をクリック

**接続に必要な情報を取得する:**
プロジェクトのダッシュボード → 「Settings」→「API」

| 変数名 | 画面上の表示 | 説明 |
|---|---|---|
| NEXT_PUBLIC_SUPABASE_URL | Project URL | https://xxxxx.supabase.co の形式 |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | anon public | ブラウザから使える公開キー |
| SUPABASE_SERVICE_ROLE_KEY | service_role secret | サーバーだけで使う管理キー。**絶対に公開しない** |

---

### Firebase（リアルタイム更新）

**特徴:** データが更新されると、アプリを開いている全員の画面にリアルタイムで反映される。Googleが運営しているので信頼性が高い。

**アカウント作成:**
1. ブラウザで <a href="https://console.firebase.google.com/" target="_blank" rel="noopener">console.firebase.google.com</a> にアクセス
2. Googleアカウントでログイン
3. 「プロジェクトを追加」をクリック
4. プロジェクト名を入力
5. Google アナリティクスは「無効」でOK
6. 「プロジェクトを作成」をクリック

**接続に必要な情報を取得する:**
プロジェクト設定（歯車アイコン）→「全般」→「マイアプリ」→ ウェブアプリを追加
表示される設定情報（apiKey, authDomain, projectId 等）をコピー。

Claude Codeに「Firebaseで作って」と伝えれば、AIがこれらの情報をもとにアプリを構築してくれます。
`
        },
        {
          id: "svc-email",
          title: "SendGrid（メール送信）",
          content: `
## SendGrid — アプリからメールを送る

### SendGridの役割

アプリから自動でメールを送りたいとき（イベントの案内、パスワードリセット、通知メールなど）に使うサービスです。

通常、メールを送るには自分でメールサーバーを用意する必要がありますが、SendGridを使えばその手間がなくなります。

---

### アカウント作成と設定

**ステップ1 — アカウント作成:**
1. ブラウザで <a href="https://signup.sendgrid.com/" target="_blank" rel="noopener">sendgrid.com</a> にアクセス
2. 「Start For Free」をクリック
3. メールアドレス、パスワードを入力して登録
4. 会社情報やWebサイトの入力を求められることがある（任意のもので可）

**ステップ2 — APIキーを作成:**
1. ログイン後、左メニュー「Settings」→「API Keys」
2. 「Create API Key」をクリック
3. キーの名前を入力（例: 「my-app」）
4. 「Full Access」を選択
5. 「Create & View」をクリック
6. 表示されたキー（\`SG.\` で始まる文字列）を**必ずコピー**

**ステップ3 — キーを安全に保存:**
\`\`\`
security add-generic-password -s "SENDGRID_API_KEY" -a "sendgrid" -w "SG.ここにコピーしたキーを貼り付け"
\`\`\`

**ステップ4 — 送信元メールアドレスの認証:**
SendGridでメールを送るには、「このアドレスから送りますよ」という認証が必要です:
1. 左メニュー「Settings」→「Sender Authentication」
2. 「Verify a Single Sender」をクリック
3. 送信元にしたいメールアドレスと名前を入力
4. そのアドレスに確認メールが届くので、リンクをクリック

---

### Vercelの環境変数に設定する

公開アプリでSendGridを使う場合:

| 変数名 | 値 |
|---|---|
| SENDGRID_API_KEY | SG.で始まるAPIキー |
| SENDGRID_FROM_EMAIL | 認証済みの送信元アドレス |
| SENDGRID_FROM_NAME | 送信者の表示名 |

---

### 無料枠と料金

| プラン | メール数 | 月額 |
|---|---|---|
| Free | 月100通まで | 無料 |
| Essentials | 月50,000通まで | $19.95〜 |
| Pro | 月100,000通まで | $89.95〜 |

テスト段階では無料枠で十分です。本格運用する場合は有料プランを検討してください。
`
        },
        {
          id: "svc-stripe",
          title: "Stripe（決済）",
          content: `
## Stripe — アプリで決済を受け付ける

### Stripeの役割

アプリでクレジットカード決済を受け付けるためのサービスです。イベントの参加費、会員制サービスの月額課金などに使います。

---

### テスト環境と本番環境

Stripeには必ず2つの環境があります:

| | テスト環境 | 本番環境 |
|---|---|---|
| 目的 | 開発中の動作確認 | 実際のお金のやりとり |
| お金 | 動かない（架空の決済） | 動く（本物の決済） |
| カード番号 | テスト用の番号を使う | 実際のカードを使う |
| 切り替え | ダッシュボードのトグルスイッチ | 同左 |

**テスト用カード番号:** \`4242 4242 4242 4242\`（有効期限・CVVは適当でOK）

---

### アカウント作成

1. ブラウザで <a href="https://dashboard.stripe.com/register" target="_blank" rel="noopener">stripe.com</a> にアクセス
2. 「今すぐ始める」をクリック
3. メールアドレス、名前、パスワードを入力

**本番環境を使うには追加の設定が必要:**
- ビジネス情報の入力（法人名、住所）
- 銀行口座の登録（売上の入金先）
- 本人確認書類の提出

テスト環境はアカウント作成直後から使えます。

---

### APIキーの取得

1. Stripeダッシュボードにログイン
2. 左メニュー「開発者」→「APIキー」
3. 以下の2種類のキーを確認:

| キーの種類 | 先頭の文字列 | 用途 | 公開してよいか |
|---|---|---|---|
| 公開可能キー | \`pk_test_\` または \`pk_live_\` | ブラウザ側の処理 | はい |
| シークレットキー | \`sk_test_\` または \`sk_live_\` | サーバー側の処理 | **絶対にNo** |

**シークレットキーの保存:**
\`\`\`
security add-generic-password -s "STRIPE_SECRET_KEY" -a "stripe" -w "sk_test_ここにキー"
\`\`\`
`
        },
        {
          id: "svc-other",
          title: "その他のサービス",
          content: `
## その他のサービス

必要になったときに参照してください。Claude Codeが「○○のAPIキーが必要です」と言ったとき、このページで該当サービスの手順を確認します。

---

### Brave Search API（Web検索機能を追加する）

**何のため:** アプリの中でWeb検索ができるようにする
**取得方法:**
1. <a href="https://brave.com/search/api/" target="_blank" rel="noopener">brave.com/search/api</a> にアクセス
2. 「Get Started」でアカウント作成
3. 「Free」プランを選択（月2,000回まで無料）
4. APIキーを取得

**キーの保存:**
\`\`\`
security add-generic-password -s "BRAVE_API_KEY" -a "brave" -w "取得したキー"
\`\`\`

---

### Google Books API（書籍情報を検索する）

**何のため:** 書名やISBNから書籍の情報（著者、出版社、表紙画像など）を取得する
**取得方法:**
1. <a href="https://console.cloud.google.com/" target="_blank" rel="noopener">console.cloud.google.com</a> にアクセス（Googleアカウントでログイン）
2. 「新しいプロジェクト」を作成
3. 「APIとサービス」→「ライブラリ」→「Books API」を検索して有効化
4. 「認証情報」→「認証情報を作成」→「APIキー」

**キーの保存:**
\`\`\`
security add-generic-password -s "google-books-api" -a "google-books-api" -w "取得したキー"
\`\`\`

---

### Zoom API（会議を自動作成する）

**何のため:** アプリからZoomミーティングを自動的に作成する
**取得方法:**
1. <a href="https://marketplace.zoom.us/" target="_blank" rel="noopener">marketplace.zoom.us</a> にアクセス（Zoomアカウントでログイン）
2. 「Develop」→「Build App」
3. 「Server-to-Server OAuth」を選択
4. アプリ名を入力して作成

**取得する情報:**

| 変数名 | 取得場所 |
|---|---|
| ZOOM_ACCOUNT_ID | App Credentials → Account ID |
| ZOOM_CLIENT_ID | App Credentials → Client ID |
| ZOOM_CLIENT_SECRET | App Credentials → Client Secret |

---

### Slack API（Slackと連携する）

**何のため:** アプリからSlackにメッセージを送る、Slackの情報を読み取る
**取得方法:**
1. <a href="https://api.slack.com/apps" target="_blank" rel="noopener">api.slack.com/apps</a> にアクセス
2. 「Create New App」→「From scratch」
3. アプリ名とワークスペースを選択
4. 「OAuth & Permissions」→ 必要な権限（Scopes）を追加
5. 「Install to Workspace」でインストール
6. 「Bot User OAuth Token」（\`xoxb-\` で始まる）をコピー

**変数名:** \`SLACK_BOT_TOKEN\`

---

### Notion API（Notionと連携する）

**何のため:** アプリからNotionのページを作成・編集・検索する
**取得方法:**
1. <a href="https://developers.notion.com/" target="_blank" rel="noopener">developers.notion.com</a> にアクセス
2. 「+ New integration」をクリック
3. 名前を入力、ワークスペースを選択
4. 「Submit」で作成
5. 表示される「Internal Integration Secret」（\`ntn_\` で始まる）をコピー
6. **Notion側で、連携したいページで「接続先を追加」から、作ったインテグレーションを選択する**（この手順を忘れると、APIからページにアクセスできない）

**変数名:** \`NOTION_TOKEN\`

---

### EDINET API（企業の財務情報を取得する）

**何のため:** 有価証券報告書などの企業開示情報を取得する
**取得方法:**
1. <a href="https://disclosure2dl.edinet-fsa.go.jp/" target="_blank" rel="noopener">disclosure2dl.edinet-fsa.go.jp</a> にアクセス
2. ユーザー登録（メールアドレスと個人情報）
3. API利用申請
4. 承認後、APIキーがメールで届く

**変数名:** \`EDINET_API_KEY\`
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
      description: "APIキー・パスワードを安全に扱う方法",
      chapters: [
        {
          id: "cred-keychain",
          title: "macOS Keychainの使い方",
          content: `
## macOS Keychain — APIキーの安全な保管庫

### Keychainとは

APIキー（各サービスを使うための「鍵」）は、万が一漏洩すると他人に悪用されるリスクがあります。たとえば、決済サービスのキーが漏洩すれば、不正な取引が行われる可能性があります。

macOS Keychainは、これらの鍵を暗号化して安全に保管する仕組みです。Macのログインパスワードで保護されているので、パソコンを直接操作しない限りアクセスできません。

---

<div class="diagram"><div class="diagram-title">Keychain のイメージ</div><div class="diagram-body"><div class="concept-cards"><div class="concept-card" style="background:#fde8e8;border-color:#f0c0c0"><div class="icon">&#9888;</div><div class="title">やってはいけない方法</div><div class="body">コードの中にAPIキーを直接書く → GitHubにアップロード → 世界中から丸見え</div></div><div class="concept-card" style="background:#e8f8e8;border-color:#c0e8c0"><div class="icon">&#128274;</div><div class="title">安全な方法（Keychain）</div><div class="body">APIキーをMacの暗号化された保管庫に保存 → アプリが必要なときだけ自動で取り出す</div></div></div></div></div>

### 基本操作

すべてターミナルで行います。

**キーを保存する:**
\`\`\`
security add-generic-password -s "サービス名" -a "アカウント名" -w "キーの値"
\`\`\`

例:
\`\`\`
security add-generic-password -s "ANTHROPIC_API_KEY" -a "anthropic" -w "sk-ant-api03-xxxxx"
\`\`\`

コマンドの意味:
- \`-s\`: サービス名（ラベル）。あとで検索するときに使う
- \`-a\`: アカウント名。メモ代わり
- \`-w\`: 保存したい値（APIキー本体）

**保存したキーを確認する:**
\`\`\`
security find-generic-password -s "サービス名" -w
\`\`\`

例:
\`\`\`
security find-generic-password -s "ANTHROPIC_API_KEY" -w
\`\`\`
→ 保存したキーが表示される

**キーを更新する（新しいキーに差し替える）:**

古いキーを削除してから、新しいキーを保存します:
\`\`\`
security delete-generic-password -s "サービス名"
security add-generic-password -s "サービス名" -a "アカウント名" -w "新しいキー"
\`\`\`

---

### 保存すべきキーの一覧

| サービス名（-sの値） | アカウント名（-aの値） | 何のキーか |
|---|---|---|
| ANTHROPIC_API_KEY | anthropic | Claude AI |
| SENDGRID_API_KEY | sendgrid | メール送信 |
| BRAVE_API_KEY | brave | Web検索 |
| google-books-api | google-books-api | 書籍検索 |
| STRIPE_SECRET_KEY | stripe | 決済 |
| PLAUD_TOKEN | plaud | 録音API |

---

### Pythonアプリが自動でキーを取得する仕組み

Claude Codeが作るPythonアプリには、以下のような仕組みが組み込まれています:

\`\`\`
手順:
1. まず「環境変数」にキーが設定されているか確認
2. なければ、macOS Keychainから取得
\`\`\`

つまり、一度Keychainにキーを保存しておけば、あとはアプリが自動で取り出してくれます。コードの中にキーを直接書く必要はありません。

---

### やってはいけないこと

| NG | 理由 | 代わりにやること |
|---|---|---|
| コードの中にキーを直接書く | GitHubにアップロードしたときに漏洩する | Keychainまたは環境変数に保存 |
| Slackやメールでキーを送る | 受信者以外にも見える可能性 | 直接会って伝える、またはパスワード管理ツール |
| CLAUDE.mdにキーを書く | テキストファイルなので簡単に見える | Keychainに保存 |
`
        },
        {
          id: "cred-env",
          title: "環境変数の設定方法",
          content: `
## 環境変数 — アプリに秘密の設定を渡す

### 環境変数とは

アプリが動くときに必要な設定情報（APIキー、データベースの接続先など）を、コードとは別の場所に保管して渡す仕組みです。

なぜ必要かというと:
- コードはGitHubに保存される → 公開リポジトリなら誰でも見られる
- APIキーをコードに書くと → キーが漏洩するリスクがある
- 環境変数に分離すれば → コードを公開してもキーは安全

---

### ローカル開発での環境変数（自分のPCで動かすとき）

方法は2つあります:

<div class="concept-cards"><div class="concept-card"><div class="icon">&#128187;</div><div class="title">ローカル開発</div><div class="body">自分のPCでアプリを動かすとき<br>→ Keychain または .env ファイル</div></div><div class="concept-card"><div class="icon">&#127760;</div><div class="title">本番環境（Vercel）</div><div class="body">インターネットに公開するとき<br>→ Vercelの環境変数設定画面</div></div></div>

**方法A: macOS Keychainを使う（推奨）**
前のページで説明した方法です。Pythonアプリは自動でKeychainからキーを取得します。

**方法B: .envファイルを使う**
プロジェクトのフォルダに \`.env.local\` というファイルを作り、設定を書きます:

\`\`\`
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
SENDGRID_API_KEY=SG.xxxxx
TURSO_DATABASE_URL=libsql://xxxxx.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZDI1NTE5...
\`\`\`

**重要なルール:**
- \`.env.local\` は絶対にGitHubにアップロードしてはいけない
- 通常、Claude Codeが \`.gitignore\` というファイルに自動で登録してくれる（\`.gitignore\` = 「GitHubに送らないファイルのリスト」）
- 他の人と環境変数の「名前だけ」を共有したい場合は、\`.env.example\` という値を空にしたファイルを用意する

---

### 本番環境での環境変数（Vercelで公開するとき）

Vercelで公開するアプリの場合、環境変数はVercelの管理画面で設定します。

**設定手順:**
1. ブラウザで \`vercel.com\` にログイン
2. 対象のプロジェクト（アプリ）をクリック
3. 上部メニューの「Settings」をクリック
4. 左メニューの「Environment Variables」をクリック
5. 「Key」に変数名（例: \`ANTHROPIC_API_KEY\`）を入力
6. 「Value」に値（例: \`sk-ant-api03-xxxxx\`）を入力
7. 環境を選択（通常は「Production」「Preview」「Development」すべてにチェック）
8. 「Save」をクリック

設定した環境変数は、次回のデプロイから反映されます。すぐに反映したい場合は、Claude Codeに「再デプロイして」と伝えてください。

---

### 変数名の命名規則（Next.jsの場合）

Next.jsで作ったアプリには特別なルールがあります:

| 変数名の先頭 | 意味 | 例 |
|---|---|---|
| \`NEXT_PUBLIC_\` が付く | ブラウザからも見える（公開してよい情報） | \`NEXT_PUBLIC_SUPABASE_URL\` |
| 何も付かない | サーバーだけが使う（秘密の情報） | \`SUPABASE_SERVICE_ROLE_KEY\` |

\`NEXT_PUBLIC_\` が付いた変数は、ブラウザの開発者ツールで見ることができます。APIキーなどの秘密情報には絶対に \`NEXT_PUBLIC_\` を付けないでください。
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
      description: "アプリを作る・動かす・公開する一連の手順",
      chapters: [
        {
          id: "wf-create",
          title: "新しいアプリを作る",
          content: `
## 新しいアプリを作る — 手順の全体像

ここでは、ゼロからアプリを作ってインターネットに公開するまでの、一連の手順を説明します。

---

### 全体の流れ

<div class="diagram"><div class="diagram-title">ゼロから公開までの8ステップ</div><div class="diagram-body"><div class="flow-diagram"><div class="flow-d-step"><div class="flow-d-icon gray">1</div><div class="flow-d-label">フォルダ作成</div><div class="flow-d-sub">30秒</div></div><div class="flow-d-arrow">&#10132;</div><div class="flow-d-step"><div class="flow-d-icon gray">2</div><div class="flow-d-label">Cursorで開く</div><div class="flow-d-sub">10秒</div></div><div class="flow-d-arrow">&#10132;</div><div class="flow-d-step"><div class="flow-d-icon blue">3</div><div class="flow-d-label">AIに依頼</div><div class="flow-d-sub">数分</div></div><div class="flow-d-arrow">&#10132;</div><div class="flow-d-step"><div class="flow-d-icon blue">4</div><div class="flow-d-label">AIが作成</div><div class="flow-d-sub">数分〜数十分</div></div><div class="flow-d-arrow">&#10132;</div><div class="flow-d-step"><div class="flow-d-icon orange">5</div><div class="flow-d-label">ブラウザ確認</div><div class="flow-d-sub">数分</div></div><div class="flow-d-arrow">&#10132;</div><div class="flow-d-step"><div class="flow-d-icon orange">6</div><div class="flow-d-label">修正依頼</div><div class="flow-d-sub">繰り返し</div></div><div class="flow-d-arrow">&#10132;</div><div class="flow-d-step"><div class="flow-d-icon green">7</div><div class="flow-d-label">GitHub保存</div><div class="flow-d-sub">自動</div></div><div class="flow-d-arrow">&#10132;</div><div class="flow-d-step"><div class="flow-d-icon red">8</div><div class="flow-d-label">公開!</div><div class="flow-d-sub">自動</div></div></div></div></div>

---

### 手順1: フォルダを作る

ターミナルで:
\`\`\`
mkdir ~/projects/apps/アプリの英語名
\`\`\`

例: 経費管理アプリを作る場合
\`\`\`
mkdir ~/projects/apps/expense-checker
\`\`\`

「~/projects/apps/」は「ホームフォルダの中のprojectsフォルダの中のappsフォルダ」という意味です。アプリはすべてここに作るとわかりやすくなります。

### 手順2: Cursorで開く

Cursorアプリで「File」→「Open Folder...」→ 手順1で作ったフォルダを選択 →「Open」

### 手順3-4: AIに依頼して待つ

右側のチャットパネルに、作りたいものを日本語で入力します。

**最初のメッセージのテンプレート:**
\`\`\`
【作りたいもの】
○○を管理するWebアプリを作ってください。

【背景】
現在は○○で管理しているが、○○が不便。

【機能】
- 機能1の説明
- 機能2の説明
- 機能3の説明

【使う人】
社内のスタッフ○名。ITに詳しくない。

【デザイン】
シンプルで余白が多く、見やすいデザイン。
スマホでも使えるように。
\`\`\`

AIがファイルの作成を始めます。「Accept」をクリックして変更を承認してください。

### 手順5: ブラウザで確認する

**HTMLファイル1つで完結するアプリの場合:**
→ Cursorのファイル一覧で \`index.html\` をダブルクリック、またはFinderから開く

**サーバーが必要なアプリの場合:**
→ AIが「\`http://localhost:3000\` で確認できます」のように伝えてくる
→ ブラウザのアドレスバーにそのURLを入力して Enter

### 手順6: 修正を依頼する

気になる点があれば、チャットでそのまま伝えます:
\`\`\`
いくつか修正をお願いします。
- テーブルの文字をもう少し大きくして
- 「追加」ボタンの色を青に変えて
- スマホで見たとき、サイドバーが邪魔なので非表示にして
\`\`\`

何度でも修正できます。納得いくまで繰り返してください。

### 手順7-8: 保存と公開

\`\`\`
完成です。GitHubに保存して、Vercelで公開してください。
\`\`\`

AIが自動ですべて行い、公開URLを教えてくれます。

---

### AIへの依頼のコツ

| コツ | 悪い例 | 良い例 |
|---|---|---|
| 具体的に伝える | 「アプリを作って」 | 「経費を日付・カテゴリ・金額で記録し、月別集計できるアプリを作って」 |
| 使う人を伝える | （何も言わない） | 「ITに詳しくないスタッフ5名が使います」 |
| 一度にたくさん頼みすぎない | 「全機能を一気に作って」 | 「まず基本の入力・一覧機能だけ作って。OKだったら機能を追加します」 |
| 参考を見せる | 「いい感じで」 | 「このサイト（URL）のような雰囲気で」 |
`
        },
        {
          id: "wf-maintain",
          title: "既存アプリの修正・更新",
          content: `
## 既存アプリを修正・更新する

一度作ったアプリに機能を追加したり、不具合を直したりする手順です。

---

### 修正の基本手順

1. **Cursorでアプリのフォルダを開く**
   File → Open Folder → 対象アプリのフォルダを選択

2. **AIに修正内容を伝える**
   チャットパネルに日本語で指示を入力

3. **ブラウザで確認する**
   修正前と変わっているかをチェック

4. **「保存して」と伝える**
   AIがGitHubに保存 → Vercel連携済みなら自動で公開版にも反映

---

### 修正依頼の書き方

**機能を追加するとき:**
\`\`\`
このアプリにCSVエクスポート機能を追加してください。
一覧画面に「CSV出力」ボタンを置いて、
表示中の全データをCSVファイルとしてダウンロードできるようにしてください。
\`\`\`

**見た目を変えるとき:**
\`\`\`
以下のデザインを変更してください:
- ヘッダーの背景色を黒（#1a1a1a）に変更
- 全体のフォントサイズを1段階大きくして
- ボタンの角を少し丸くして
\`\`\`

**バグを直すとき:**
\`\`\`
以下の問題を修正してください:
- 「日付」の欄に未来の日付も入力できてしまう。今日以前だけにして
- 金額が0のデータを保存するとエラーが出る
- ブラウザをリロードすると、フィルタ設定がリセットされてしまう
\`\`\`

**コツ:** 「おかしい」「変」という抽象的な表現ではなく、「○○をしたときに△△になる。本来は□□であるべき」と具体的に伝えるほうが、AIが正確に修正できます。

---

### 更新を公開に反映する

修正が終わったら:
\`\`\`
保存して公開に反映してください。
\`\`\`

AIが以下を自動実行します:
1. 変更をGitHubに保存（git commit + push）
2. Vercelが検知して自動で再デプロイ（通常10-30秒）

公開URLにアクセスすると、最新の状態が反映されています。
`
        },
        {
          id: "wf-local",
          title: "ローカルサーバーの操作",
          content: `
## ローカルサーバー — 自分のPCでアプリを動かす

### ローカルサーバーとは

アプリをインターネットに公開する前に、自分のパソコンの中だけで動かして確認するための仕組みです。

ブラウザに \`http://localhost:3000\` のようなURLを入力してアクセスします。「localhost」は「自分自身のパソコン」を意味します。つまり、他の人からはアクセスできません。

---

### よく見るURL

| URL | 意味 |
|---|---|
| \`http://localhost:3000\` | 自分のPCのポート3000で動いているアプリ |
| \`http://localhost:5210\` | 自分のPCのポート5210で動いているアプリ |
| \`http://127.0.0.1:8000\` | localhostと同じ意味（数字表記版） |

「ポート」とは、パソコンの中の「部屋番号」のようなものです。同時に複数のアプリを動かすとき、それぞれ別のポート（部屋）で動きます。

---

### 起動と停止

**起動:**
通常、Claude Codeがアプリを作った時点で自動的にサーバーを起動してくれます。
手動で起動する場合は、ターミナルでアプリのフォルダに移動してからコマンドを実行:

| アプリの種類 | コマンド | URL |
|---|---|---|
| Next.js | \`npm run dev\` | http://localhost:3000 |
| Python (Flask) | \`python app.py\` | http://localhost:5000〜 |
| 静的HTMLファイル | \`python3 -m http.server 8000\` | http://localhost:8000 |

**停止:**
ターミナルで \`Ctrl\` + \`C\` を押す（キーボードのControlキーとCキーを同時に押す）。

---

### よくあるトラブル

**「Address already in use」（ポートが使用中）エラー:**

\`\`\`
OSError: [Errno 48] Address already in use
\`\`\`

同じポート番号で別のアプリが既に動いています。解決方法:
\`\`\`
lsof -ti:ポート番号 | xargs kill
\`\`\`

例: ポート3000が使用中の場合
\`\`\`
lsof -ti:3000 | xargs kill
\`\`\`

そのあと、もう一度サーバーを起動してください。

**ブラウザでアクセスしても何も表示されない:**
- サーバーが起動しているか確認（ターミナルにエラーが出ていないか）
- URLが正しいか確認（ポート番号が合っているか）
- ブラウザをリロード（\`Command\` + \`R\`）

**「command not found: npm」エラー:**
Node.jsがインストールされていません。「環境構築」の章に戻ってインストールしてください。
`
        }
      ]
    },

    // =====================================================================
    // PART 5: TROUBLESHOOTING
    // =====================================================================
    {
      id: "troubleshoot",
      title: "トラブルシューティング",
      description: "よくある問題と解決方法",
      chapters: [
        {
          id: "ts-common",
          title: "よくある問題と解決方法",
          content: `
## よくある問題と解決方法

### AIが「許可が必要です」と言ってきた

**状況:** AIがファイルを作成・変更しようとしたとき、確認ダイアログが表示される
**対応:** 内容を確認して「Accept」「Allow」「Yes」をクリック。これはセキュリティのための確認です。

---

### 「npm install」で大量のエラーが出る

**状況:** AIが \`npm install\` を実行したとき、赤い文字でエラーが大量に表示される
**対応:**
1. まず、最後に「added XX packages」と表示されているか確認。表示されていれば、途中のメッセージは警告であり、問題ない場合が多い
2. 最後が「ERR!」で終わっている場合は、AIに「npm installでエラーが出ました。解決してください」と伝える

---

### デプロイしたのに古い画面のまま

**状況:** Vercelに公開したが、ブラウザに古い内容が表示される
**対応:**
1. ブラウザで \`Command\` + \`Shift\` + \`R\` を押す（キャッシュを無視してリロード）
2. それでもダメなら、ブラウザの「シークレットウィンドウ」（プライベートウィンドウ）で開いてみる
3. デプロイが完了しているか確認。AIに「Vercelのデプロイ状況を確認して」と聞く

---

### GitHubへのpushが失敗する

**状況:** 「rejected」「failed to push」のようなエラーが出る
**対応:** AIに「pushが失敗しました。解決してください」と伝える。多くの場合、AIが自動で解決してくれます。

---

### 「APIキーが設定されていません」エラー

**状況:** アプリを起動したとき、APIキーがない旨のエラーが表示される
**対応:**
1. 該当するAPIキーがKeychainに保存されているか確認:
\`\`\`
security find-generic-password -s "キーの名前" -w
\`\`\`
2. 保存されていなければ、「サービス接続ガイド」の該当サービスの章を見て設定する
3. Vercel上のアプリの場合、Vercelの環境変数に設定されているか確認する

---

### Claude Codeが暴走しているように見えるとき

**状況:** AIが大量のファイルを変更し続けている、意図しない操作をしている
**対応:**
1. \`Escape\` キーを押すとAIの操作をキャンセルできます
2. それでも止まらない場合は \`Ctrl\` + \`C\` を押す
3. 変更を元に戻したい場合は「直前の変更をすべて取り消して」と伝える

---

### セッションが長くなってAIの反応が遅い・おかしい

**状況:** 長時間使い続けると、AIが以前の指示を忘れたり、同じことを繰り返す
**対応:**
1. \`/compact\` コマンドを実行して会話を圧縮する
2. それでもダメなら \`/clear\` で会話をリセットして新しく始める
3. 重要な指示はCLAUDE.mdに書いておけば、セッションをまたいでも忘れない

---

### 何をしてもうまくいかないとき

1. **新しいセッションを始める**: \`/clear\` または Claude Codeを再起動する。長い会話はAIの精度を下げる
2. **問題を具体的に伝える**: 「動きません」ではなく「○○をクリックすると△△というエラーが表示される」
3. **エラーメッセージをコピーして渡す**: 赤い文字のエラーメッセージをそのままAIに貼り付ける
4. **スクリーンショットを渡す**: Claude Codeは画像を理解できるので、画面のスクリーンショットをドラッグ&ドロップで渡せる
5. **担当者に相談する**: それでもダメなら、エラーの画面をスクリーンショットに撮って共有
`
        }
      ]
    },

    // =====================================================================
    // PART 6: ADVANCED TECHNIQUES
    // =====================================================================
    {
      id: "advanced",
      title: "実践テクニック",
      description: "Claude Codeをより効果的に使いこなすための上級テクニック",
      chapters: [
        {
          id: "adv-claudemd",
          title: "CLAUDE.mdの書き方",
          content: `
## CLAUDE.md — プロジェクトのルールブック

### CLAUDE.mdとは

CLAUDE.mdは、Claude Codeに対して「このプロジェクトではこういうルールで作業してほしい」と伝えるためのファイルです。人間でいえば「業務マニュアル」や「引き継ぎ資料」のようなものです。

このファイルがあると、Claude Codeは毎回のセッション開始時に自動で読み込み、ルールに従って作業してくれます。

**なぜ必要なの？**
- セッションが変わるたびに同じ指示を繰り返さなくて済む
- チーム内でAIの動作を統一できる
- プロジェクトの方針をAIが「覚えている」状態を作れる

---

### 配置場所

| ファイルの場所 | 効果範囲 | 用途 |
|---|---|---|
| \`プロジェクトフォルダ/CLAUDE.md\` | そのプロジェクトだけ | アプリ固有のルール |
| \`~/.claude/CLAUDE.md\` | すべてのプロジェクト | 自分の共通ルール |
| \`~/.claude/rules/ファイル名.md\` | 条件付きで適用 | 特定の条件で使うルール |

最もよく使うのは、プロジェクトフォルダ直下の \`CLAUDE.md\` です。

---

### 書き方の実例

以下は、社内アプリを開発するときのCLAUDE.mdの例です:

\`\`\`markdown
# プロジェクトルール

## 言語
- 日本語で対応してください
- コードのコメントとコミットメッセージは英語

## コーディング
- シンプルで読みやすいコードを優先
- フレームワークはNext.jsを使用

## Git運用
- コミットメッセージは feat:, fix:, docs: で始める
- 完成したら自動でGitHubにpush

## デザイン
- 配色はブラウン系（#7A4033）を基調
- モバイル対応必須
\`\`\`

---

### 書くときのコツ

| やるべきこと | やりがちな間違い |
|---|---|
| 短く具体的に書く | 長い文章で説明しすぎる |
| 「○○してください」と明確に指示 | 「できれば○○のほうがいいかも」と曖昧に書く |
| 本当に守ってほしいルールだけ書く | 思いつく限りのルールを詰め込む |
| コードから読み取れないことを書く | ファイル構造やコード規約をコピペする |

**重要:** CLAUDE.mdは「AIへの指示書」です。人間向けのREADMEとは別のファイルとして管理してください。

---

### Rulesファイル — 条件付きルール

CLAUDE.mdに加えて、\`~/.claude/rules/\` フォルダにルールファイルを配置できます。ルールファイルは特定の条件やテーマごとにルールを分離できるため、CLAUDE.mdが肥大化するのを防げます。

**フォルダ構成例:**
\`\`\`
~/.claude/
  CLAUDE.md            ← 共通ルール（常に読み込まれる）
  rules/
    apps-development.md  ← アプリ開発時のルール
    research-writing.md  ← リサーチ・執筆のルール
    integrations.md      ← 外部サービス連携の設定
\`\`\`

**ルールファイルの例（apps-development.md）:**
\`\`\`markdown
# App Development Rules

## Tech Standards
- Favicon: esse-sense.comの反転版（黒背景、白い'e'）
- 完成したら自動でGitHub保存
- Notionのアプリ一覧に登録

## Security
- APIキーは環境変数またはKeychainに保存
- ハードコードは絶対禁止
\`\`\`

**ポイント:**
- プロジェクトのCLAUDE.mdには、そのプロジェクト固有のルールだけを書く
- 共通のルール（言語設定、コーディング規約など）はグローバルなCLAUDE.mdに書く
- 特定の作業カテゴリのルールはrulesファイルに分離する
- ルールファイルが増えすぎたら整理する — 10ファイル以下が目安
`
        },
        {
          id: "adv-commands",
          title: "コマンドとモード",
          content: `
## コマンドとモード — Claude Codeの操作を覚える

### よく使うコマンド

Claude Codeのチャット中に、\`/\` で始まるコマンドを入力すると特別な操作ができます。

| コマンド | 何をするか | いつ使うか |
|---|---|---|
| \`/help\` | 使い方ガイドを表示 | 操作に迷ったとき |
| \`/clear\` | 会話履歴をリセット | 話題を変えたいとき |
| \`/compact\` | 会話を要約して圧縮 | セッションが長くなったとき |
| \`/quit\` | Claude Codeを終了 | 作業を終えるとき |

---

### Plan Mode（計画モード）

Plan Modeは、AIに「まずは計画だけ立てて、実行はまだしないで」と伝えるモードです。大きな変更をする前に、方針を確認してから実行に移せます。

**使い方:**
- キーボードで \`Shift\` + \`Tab\` を押すと、Plan Mode のオン/オフが切り替わる
- または、チャットで「まず計画を見せて」と伝えるだけでもOK

**どんなときに使う？**
- 新しい機能を追加する前に、影響範囲を確認したいとき
- 「この変更で他の部分が壊れないかな？」と心配なとき
- AIの作業方針を事前に確認・修正したいとき

**Plan Modeのイメージ:**

<div class="diagram"><div class="diagram-title">通常モード vs Plan Mode</div><div class="diagram-body"><div class="arch"><div class="arch-box local"><div class="arch-icon">&#9889;</div><div class="arch-label">通常モード</div><div class="arch-desc">指示 → すぐに実行。手軽だが大きな変更は不安</div></div><div class="arch-arrow">vs</div><div class="arch-box cloud"><div class="arch-icon">&#128221;</div><div class="arch-label">Plan Mode</div><div class="arch-desc">指示 → 計画を提示 → 承認 → 実行。安全で確実</div></div></div></div></div>

---

### Fast Mode（高速モード）

Fast Modeは、AIの出力速度を上げるモードです。同じモデルが使われますが、応答が速くなります。

**使い方:** チャットで \`/fast\` と入力してオン/オフを切り替え

**いつ使う？** 小さな修正や、定型的な作業を素早く終わらせたいとき

---

### カスタムコマンド

よく使う指示をコマンドとして保存できます。

**やること:**
1. \`~/.claude/commands/\` フォルダの中に \`.md\` ファイルを作る
2. ファイルの中身に、実行したい指示を書く

**例: レビューコマンドを作る**

\`~/.claude/commands/review.md\` というファイルを作り、中身に:
\`\`\`
現在のブランチの変更をレビューしてください。
バグ、セキュリティ問題、改善点を指摘してください。
\`\`\`

これで、Claude Codeのチャットで \`/review\` と入力するだけで、このレビュー指示が実行されます。

---

### キーボードショートカット

| ショートカット | 動作 |
|---|---|
| \`Enter\` | メッセージを送信 |
| \`Escape\` | AIの操作をキャンセル |
| \`Shift + Tab\` | Plan Modeのオン/オフ |
| \`Ctrl + C\` | 強制終了（2回押す） |
| \`上矢印キー\` | 前のメッセージを再表示 |

---

### 利用環境 — CLI以外の選択肢

Claude CodeはターミナルのCLI版だけでなく、複数の環境で利用できます。

| 環境 | 特徴 | おすすめの場面 |
|---|---|---|
| **CLI（ターミナル）** | 最もフル機能。すべてのツールが使える | 本格的な開発作業 |
| **デスクトップアプリ** | Mac/Windows対応。CLI同様の機能 | 日常的な作業 |
| **Webアプリ（claude.ai/code）** | ブラウザから利用。インストール不要 | 外出先や別のPC |
| **VS Code拡張** | エディタ内でClaude Codeが使える | コード編集に集中したいとき |
| **JetBrains拡張** | IntelliJ系IDEに対応 | Java/Kotlin開発者 |

**ポイント:** どの環境でも同じClaudeモデルが使われます。違いはUI/UXと一部のツールの利用可否です。CLIが最も高機能なので、メインの開発にはCLIまたはデスクトップアプリをおすすめします。

---

### 権限管理 — 安全な運用のために

Claude Codeはファイルの編集やコマンドの実行ができます。安全に使うために、権限の仕組みを理解しましょう。

**権限モード:**

Claude Codeのツール実行時に、許可を求めるプロンプトが表示されることがあります。これは安全のための仕組みです。

- **常に許可（Allow）**: そのツールの実行を今後も許可する
- **今回だけ許可**: この1回だけ許可する
- **拒否（Deny）**: 実行しない

**許可リスト（Allowlist）の設定:**

よく使う安全なコマンドは、設定ファイルで事前に許可しておけます。\`~/.claude/settings.json\` で設定します:

\`\`\`json
{
  "permissions": {
    "allow": [
      "Bash(npm run dev)",
      "Bash(git status)",
      "Bash(git diff)",
      "Read",
      "Glob",
      "Grep"
    ]
  }
}
\`\`\`

**おすすめの考え方:**
- 読み取り系（Read, Grep, Glob）は許可しても安全
- ファイル書き込み（Edit, Write）は確認を残すのが安全
- \`git push\` や \`rm\` は毎回確認するのがおすすめ
`
        },
        {
          id: "adv-mcp",
          title: "MCPサーバーの活用",
          content: `
## MCPサーバー — 外部ツールとの接続

### MCPサーバーとは

MCP（Model Context Protocol）サーバーは、Claude Codeに「外部ツールを使う能力」を追加する仕組みです。たとえば:

- **GitHub MCP**: Claude CodeからGitHubのIssueを作成・管理できる
- **Playwright MCP**: ブラウザを操作して、Webサイトのスクリーンショットを撮ったりテストできる
- **Notion MCP**: Notionのページを検索・作成できる
- **Slack MCP**: Slackにメッセージを送信できる

人間でいえば、「秘書にメール送信やスケジュール管理の権限を与える」ようなものです。

---

### どんなMCPサーバーがある？

| MCPサーバー | できること | 活用例 |
|---|---|---|
| GitHub | Issue管理、PR作成、コード検索 | 「このバグのIssueを作って」 |
| Playwright | ブラウザ操作、スクリーンショット | 「このページの表示を確認して」 |
| Notion | ページ検索・作成 | 「Notionに議事録を作って」 |
| Slack | メッセージ送受信 | 「Slackの最新メッセージを確認して」 |
| Google Workspace | Docs, Sheets, Calendar操作 | 「今日の予定を確認して」 |
| Fetch | Webページの内容を取得 | 「このURLの内容を読んで」 |

---

### 設定方法

MCPサーバーの設定は、専門知識が必要です。Claude Codeに「○○のMCPサーバーを設定して」と依頼すれば、設定ファイルの作成を手伝ってくれます。

設定ファイルは \`~/.claude/mcp.json\` に保存されます。

**注意点:**
- MCPサーバーを増やしすぎると、Claude Codeの起動が遅くなります
- 最初は必要なものだけ（GitHub、Playwright程度）にとどめるのがおすすめです
- 各MCPサーバーにはAPIキーやアクセストークンが必要な場合があります
`
        },
        {
          id: "adv-tips",
          title: "効果的な指示の出し方",
          content: `
## 効果的な指示の出し方 — 実践で学んだコツ

半年以上Claude Codeを使い込んで分かった、生産性を大きく上げるコツをまとめます。

---

### 1.「まず計画を見せて」で始める

大きな作業を始めるとき、いきなり「作って」と言うのではなく、「まず計画を見せて」と伝えましょう。AIが作業方針を提示してくれるので、方向性を確認してから実行に移せます。

\`\`\`
経費管理アプリに月別レポート機能を追加したい。
まず計画を見せてください。
\`\`\`

これにより「思っていたのと違う」という手戻りを防げます。

---

### 2. スクリーンショットを活用する

Claude Codeは画像を理解できます。「ここのデザインを変えたい」というとき、言葉で説明するよりスクリーンショットを見せたほうが圧倒的に速く正確です。

**やり方:**
- スクリーンショットを撮る（\`Command\` + \`Shift\` + \`4\`）
- Claude Codeのチャットにドラッグ&ドロップ
- 「この画像の○○を△△に変えて」と指示

---

### 3.「保存して」の意味を明確にする

Claude Codeに「保存して」と伝えると、通常は以下の一連の操作が行われます:

1. \`git add\` — 変更をステージング
2. \`git commit\` — 変更を記録
3. \`git push\` — GitHubに送信

Vercelと連携済みなら、pushだけで自動的に本番にも反映されます。

---

### 4. 修正が2回失敗したら別アプローチを試す

同じ問題をAIが2回修正しても直らない場合、同じ方法を繰り返しても解決しません。明確に「別のアプローチを試して」と伝えましょう。

\`\`\`
この方法では2回試しても直りません。
別のアプローチで解決してください。
\`\`\`

---

### 5. セッションが長くなったら圧縮する

Claude Codeとの会話が長くなると、AIが以前の文脈を忘れたり、応答が遅くなることがあります。

**対策:**
- \`/compact\` で会話を圧縮する（要約されて短くなる）
- 話題が完全に変わるなら \`/clear\` でリセット
- 重要な指示はCLAUDE.mdに書いておけば、リセットしても失われない

---

### 6. 具体的に、でもやりすぎない

| 悪い指示 | 良い指示 |
|---|---|
| 「いい感じにして」 | 「ヘッダーの背景色を#7A4033に、文字色を白に変えて」 |
| 「全部直して」 | 「日付の表示形式をYYYY/MM/DDに統一して」 |
| 「React使ってボタンコンポーネントを作って、propsはlabel, onClick, variant, size, disabled, loading, icon, className, styleを受け取って...」 | 「送信ボタンを作って。ローディング中は"送信中..."と表示して」 |

最後の例のように、実装の詳細まで指定しすぎると、かえってAIの良い判断を妨げます。**何を実現したいか**を伝え、**どう実装するか**はAIに任せるのが最も効果的です。

---

### 7. よく使う指示パターン

| やりたいこと | 指示の書き方 |
|---|---|
| 新規作成 | 「○○ができるWebアプリを作って」 |
| 機能追加 | 「このアプリに○○機能を追加して」 |
| バグ修正 | 「○○をすると△△になる。□□になるように直して」 |
| 保存 | 「保存して」（= commit + push） |
| デプロイ | 「Vercelにデプロイして」 |
| 状況確認 | 「このプロジェクトの状況をまとめて」 |
| コードレビュー | 「今回の変更をレビューして」 |
`
        }
      ]
    },

    // =====================================================================
    // PART 7: ADVANCED PRACTICAL TECHNIQUES
    // =====================================================================
    {
      id: "mastery",
      title: "上級実践テクニック",
      description: "60以上のアプリを運用してきた実体験から生まれた、Claude Codeの真価を引き出すテクニック",
      chapters: [
        {
          id: "mastery-hooks",
          title: "Hooks（フック）",
          content: `
## Hooks — ツール実行時の自動処理

### Hooksとは

Hooksは、Claude Codeがツールを実行する「前」や「後」に、自動的にシェルコマンドを実行する仕組みです。人間でいえば、「書類を提出する前に必ず上司に確認を取る」「提出した後に記録をつける」というルーティンを自動化するようなものです。

**活用例:**
- ファイルを保存した後に自動でリンターを走らせる
- Git pushの前にテストを実行する
- 特定のコマンドを実行した後に通知を送る

---

### 設定方法

\`~/.claude/settings.json\` に設定を追加します:

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "echo 'File modified: $CLAUDE_FILE_PATH'"
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "command": "echo 'About to run command'"
      }
    ]
  }
}
\`\`\`

---

### Hookの種類

| Hook名 | いつ実行されるか | 活用例 |
|---|---|---|
| \`PreToolUse\` | ツール実行の直前 | 危険なコマンドの確認、入力の検証 |
| \`PostToolUse\` | ツール実行の直後 | ログ記録、フォーマッター実行 |
| \`Notification\` | AIからの通知時 | デスクトップ通知、音を鳴らす |
| \`Stop\` | AIが応答を完了した時 | 完了通知を送る |

---

### 実践的な活用パターン

**コード品質の自動チェック:**
ファイルを編集するたびに自動でフォーマッターを実行すれば、コードスタイルが常に統一されます。

**安全装置として:**
\`rm\` や \`git push --force\` などの危険なコマンドの前に確認ステップを入れることで、事故を防げます。

**注意点:**
- Hookが失敗するとClaude Codeの動作が止まることがあります
- まずはシンプルなHookから始め、徐々に増やしていくのがおすすめです
- Hookの中でClaude Codeに依存するコマンドは避けてください
`
        },
        {
          id: "mastery-memory",
          title: "メモリシステム",
          content: `
## メモリシステム — セッションを超えた記憶

### なぜメモリが必要か

Claude Codeは、セッション（会話）が終わると、その内容を忘れます。毎回「私はこういう人です」「このプロジェクトではこうしてください」と説明するのは非効率です。

メモリシステムは、この問題を解決します。AIが自動的に重要な情報をファイルに保存し、次のセッションで読み込むことで、あなたとの「共有知識」を蓄積していきます。

---

### メモリの種類

| 種類 | 何を保存するか | 例 |
|---|---|---|
| **user** | ユーザーの役割・専門性・好み | 「非営利団体の代表。人類学研究者」 |
| **feedback** | AIの動作への修正指示 | 「メール作成時は必ずCRM形式UIを使う」 |
| **project** | プロジェクトの状況・背景 | 「メンバーシップサイトはデプロイ設定待ち」 |
| **reference** | 外部リソースへのポインタ | 「APIキーはmacOSキーチェーンに保存」 |

---

### メモリの仕組み

メモリは \`~/.claude/projects/（プロジェクト名）/memory/\` フォルダに保存されます。

\`\`\`
memory/
  MEMORY.md          ← メモリの一覧（インデックス）
  user_role.md       ← ユーザー情報メモリ
  feedback_email.md  ← フィードバックメモリ
  project_app_x.md   ← プロジェクトメモリ
  reference_api.md   ← リファレンスメモリ
\`\`\`

\`MEMORY.md\` はインデックスファイルで、各メモリファイルへのリンクと1行の説明が並んでいます。Claude Codeはセッション開始時にこのファイルを読み、必要なメモリを参照します。

---

### メモリを活用するコツ

**明示的に記憶させる:**
\`\`\`
これを覚えておいて：APIキーはKeychainの「myapp-api」に保存してある
\`\`\`

**自動で記憶される:**
作業中にAIが「これは今後も使える情報だ」と判断した場合、自動的にメモリに保存します。たとえば:
- あなたの修正指示（「こうしないで」「こうして」）
- プロジェクトの重要な決定
- 外部サービスの接続情報

**メモリの整理:**
メモリが増えすぎると逆効果です。月に1回程度、「メモリを整理して」と依頼すると、古くなった情報を更新・削除してくれます。

**注意:**
- メモリはあくまで「補助的な記憶」です。確実に守ってほしいルールはCLAUDE.mdに書きましょう
- メモリは時間とともに古くなります。AIは重要な判断の前にメモリの内容を現在の状態と照合します
`
        },
        {
          id: "mastery-agents",
          title: "サブエージェントの活用",
          content: `
## サブエージェント — チームで働かせる

### サブエージェントとは

Claude Codeの強力な機能の1つが「サブエージェント」です。メインのAIが別の専門AIを呼び出して、特定のタスクを委任できます。

人間の組織でいえば、プロジェクトマネージャーが専門チームに仕事を振り分けるようなものです。

---

### なぜサブエージェントを使うのか

**1. コンテキストの分離:**
メインの会話が調査結果や詳細なコードで埋まると、AIが重要な文脈を見失うことがあります。サブエージェントに探索や調査を委任すれば、メインの会話をクリーンに保てます。

**2. 並列処理:**
複数のサブエージェントを同時に起動して、それぞれ別の調査やレビューを行わせることができます。

**3. 専門性:**
セキュリティ監査、UXレビュー、パフォーマンステストなど、専門的な視点でのチェックを専門のサブエージェントに任せられます。

---

### サブエージェントの種類（例）

| エージェント | 役割 | 使い方 |
|---|---|---|
| **Explore** | コードベースの探索 | 「この関数がどこで使われているか調べて」 |
| **researcher** | Web調査 | 「このライブラリのベストプラクティスを調べて」 |
| **reviewer** | コードレビュー | 「今回の変更をレビューして」 |
| **security-auditor** | セキュリティ監査 | 「認証コードのセキュリティを確認して」 |
| **qa-lead** | 品質検証統括 | 「アプリ全体のQAを実施して」 |
| **sentinel** | 最終承認ゲート | 「デプロイ前の最終チェック」 |

---

### 実際の使い方

サブエージェントは通常、Claude Codeが判断して自動的に起動します。ただし、明示的に指示することもできます:

\`\`\`
このアプリのセキュリティレビューをしてほしい。
専門のエージェントを使って、OWASP Top 10の観点でチェックして。
\`\`\`

\`\`\`
QAチームを使って、このアプリの品質レビューをお願い。
機能テスト、UXレビュー、セキュリティチェックを並列で実行して。
\`\`\`

---

### サブエージェントの使い分けのコツ

| 状況 | 推奨 |
|---|---|
| 特定のファイルを探すだけ | サブエージェント不要。直接検索 |
| 複数ファイルにまたがる調査 | Exploreエージェント |
| Webで情報収集 | researcherエージェント |
| コード実装 | engineerスキル |
| 品質確認 | qa-lead（複数の専門家を束ねる） |

**注意:** サブエージェントは便利ですが、使いすぎると処理時間とコストが増えます。単純な作業には直接対応してもらいましょう。
`
        },
        {
          id: "mastery-context",
          title: "コンテキスト管理",
          content: `
## コンテキスト管理 — 長時間セッションの極意

### コンテキストウィンドウとは

Claude Codeには「コンテキストウィンドウ」という、一度に扱える情報量の上限があります。本でいえば「作業デスクの広さ」です。デスクが資料で埋まると、新しい資料を置くために古い資料を片付ける必要があります。

長い会話を続けると、古いメッセージが自動的に圧縮（要約）されます。これは正常な動作ですが、重要な情報が失われることもあります。

---

### コンテキスト管理の基本戦略

**1. CLAUDE.mdに重要な指示を書く**

CLAUDE.mdはセッション開始時に必ず読み込まれ、圧縮されても消えません。「常に守ってほしいルール」はここに書きましょう。

**2. 話題が変わったら \`/clear\`**

全く別のプロジェクトの話に移るなら、\`/clear\` でリセットしたほうが効率的です。前の話題の情報がノイズになることを防げます。

**3. 長くなったら \`/compact\`**

同じ話題を続けているが会話が長くなった場合は、\`/compact\` で圧縮します。AIが会話を要約して、重要な情報だけを残してくれます。

**4. 探索はサブエージェントに任せる**

コードの調査や検索結果は大量のテキストを消費します。サブエージェントに委任すれば、結果の要約だけがメインの会話に返ってくるため、コンテキストを節約できます。

---

### よくある問題と対策

| 症状 | 原因 | 対策 |
|---|---|---|
| AIが前に話した内容を忘れる | コンテキストが圧縮された | 重要な情報はCLAUDE.mdに書く |
| 応答が遅くなる | コンテキストが大きすぎる | \`/compact\` で圧縮する |
| 同じ間違いを繰り返す | 修正指示が圧縮で消えた | メモリに保存する or CLAUDE.mdに追記 |
| 大きなファイルの編集で混乱 | 一度に多くの変更 | 変更を小さく分割して段階的に行う |

---

### 実践的なセッション管理パターン

**短いセッション（30分以内）:**
特に工夫は不要。普通に会話するだけでOK。

**中程度のセッション（1-2時間）:**
- 1時間経ったら \`/compact\` を検討
- 大きな作業の節目でcommitする
- 次のタスクに移る前に「ここまでの状況をまとめて」

**長時間のセッション（2時間以上）:**
- タスクごとにセッションを分ける
- 重要な決定事項はメモリに保存
- 実装 → テスト → コミットの小さなサイクルを繰り返す
`
        },
        {
          id: "mastery-commands",
          title: "カスタムコマンドの実践",
          content: `
## カスタムコマンド — 自分だけの指示ライブラリ

### 基本のおさらい

カスタムコマンドは、よく使う指示をファイルに保存して、\`/コマンド名\` で呼び出せる機能です。

保存場所:
- **グローバル:** \`~/.claude/commands/コマンド名.md\`（全プロジェクト共通）
- **プロジェクト:** \`プロジェクト/. claude/commands/コマンド名.md\`（そのプロジェクト専用）

---

### 実践的なコマンドライブラリ

実際に60以上のアプリを運用する中で整備したコマンドライブラリの例を紹介します。

**開発系:**
| コマンド | ファイルの中身（指示内容） | 用途 |
|---|---|---|
| \`/engineer\` | 開発チームとしてコード実装 | 機能追加・修正 |
| \`/fix-issue\` | GitHub Issueを分析して修正 | バグ対応 |
| \`/review\` | コード変更をレビュー | 品質チェック |
| \`/qa-review\` | QAチーム全体でレビュー | リリース前検証 |

**リサーチ系:**
| コマンド | 用途 |
|---|---|
| \`/research\` | Webで調査してまとめる |
| \`/deep-research\` | 複数ソースで徹底調査 |
| \`/academic-search\` | 学術論文を検索 |

**運用系:**
| コマンド | 用途 |
|---|---|
| \`/briefing\` | 朝のブリーフィング（予定・タスク・メール） |
| \`/slack-catchup\` | Slackの最新状況を確認 |
| \`/status\` | プロジェクトの現状確認 |
| \`/save-research\` | 調査結果をダッシュボードに保存 |

---

### コマンドファイルの書き方のコツ

**1. 役割を明確にする:**
\`\`\`markdown
あなたは○○の専門家です。以下の手順で作業してください:
1. ...
2. ...
\`\`\`

**2. 引数を使う:**
コマンドファイル内で \`$ARGUMENTS\` と書くと、コマンド呼び出し時の引数が代入されます。

\`\`\`markdown
# /fix-issue コマンド
GitHub Issue $ARGUMENTS を分析して修正してください。
\`\`\`

使い方: \`/fix-issue 42\` → 「GitHub Issue 42 を分析して修正してください」

**3. 段階的な指示を書く:**
\`\`\`markdown
以下の手順で作業してください:
1. まず現状を分析する
2. 計画を提示して承認を得る
3. 実装する
4. テストする
5. GitHubに保存する
\`\`\`

---

### コマンドを増やしていく方法

最初から大量のコマンドを作る必要はありません:

1. **まず3つ** — よく使う操作を3つだけコマンド化する
2. **使いながら追加** — 「これもコマンドにしたい」と思ったら追加
3. **定期的に整理** — 使わなくなったコマンドは削除

**実体験のポイント:** 80以上のコマンドを持つ環境でも、日常的に使うのは10〜15個程度です。残りは「たまに使う特殊コマンド」として、必要なときだけ呼び出しています。
`
        },
        {
          id: "mastery-workflow",
          title: "実践的な開発ワークフロー",
          content: `
## 実践的な開発ワークフロー — 60アプリ運用から学んだ型

### 7段階循環モデル

60以上のアプリを開発・運用する中で確立した開発ワークフローを紹介します。これは「Claude Codeに任せきりにする」のではなく、「人間とAIが最適な分担で協力する」ためのフレームワークです。

<div class="diagram"><div class="diagram-title">7段階循環開発モデル</div><div class="diagram-body"><div class="arch"><div class="arch-box local"><div class="arch-icon">&#128221;</div><div class="arch-label">Stage 0: 仕様</div><div class="arch-desc">何を作るか決める</div></div><div class="arch-arrow">→</div><div class="arch-box local"><div class="arch-icon">&#128270;</div><div class="arch-label">Stage 1: 調査</div><div class="arch-desc">ベストプラクティスを調べ、設計する</div></div><div class="arch-arrow">→</div><div class="arch-box cloud"><div class="arch-icon">&#9881;</div><div class="arch-label">Stage 2: 実装</div><div class="arch-desc">コードを書く</div></div><div class="arch-arrow">→</div><div class="arch-box cloud"><div class="arch-icon">&#9989;</div><div class="arch-label">Stage 3: QA</div><div class="arch-desc">品質検証</div></div><div class="arch-arrow">→</div><div class="arch-box local"><div class="arch-icon">&#128295;</div><div class="arch-label">Stage 4: 改善</div><div class="arch-desc">QA結果を反映</div></div><div class="arch-arrow">→</div><div class="arch-box cloud"><div class="arch-icon">&#128640;</div><div class="arch-label">Stage 5: デプロイ</div><div class="arch-desc">公開・保存</div></div><div class="arch-arrow">→</div><div class="arch-box local"><div class="arch-icon">&#128065;</div><div class="arch-label">Stage 6: 観測</div><div class="arch-desc">使って改善点を見つける</div></div></div></div></div>

---

### 各ステージの詳細

**Stage 0 — 仕様策定（人間主導）**

何を作るかを自然言語で定義します。このステップを飛ばすと「思っていたのと違う」という手戻りが頻発します。

\`\`\`
経費管理アプリを作りたい。
- 社員が領収書の写真をアップロードする
- AIが金額と項目を自動認識する
- 月末にPDFレポートを出力する
まず仕様を整理して。
\`\`\`

**Stage 1 — 調査・設計（AI主導、人間承認）**

AIがベストプラクティスを調査し、技術選定と設計を提案します。人間が承認してから次に進みます。

**Stage 2 — 実装（AI主導）**

承認された設計に基づいてコードを書きます。テストも同時に作成します。

**Stage 3 — 品質検証（専門エージェント）**

**重要:** 実装したAIとは別のエージェントが検証します。自分で作ったものを自分でレビューすると、バイアスがかかるためです。

- 機能テスト：動作確認
- UXレビュー：使いやすさ
- セキュリティチェック：脆弱性

**Stage 4 — 改善（最大3ラウンド）**

QAで見つかった問題を修正します。3ラウンド以内に収まらない場合は、仕様（Stage 0）か設計（Stage 1）に問題がある可能性が高いので、戻って見直します。

**Stage 5 — デプロイ（承認→公開）**

Git push → Vercelが自動デプロイ → 使い方ガイドの更新 → Notionに記録。

**Stage 6 — 観測（次のサイクルへ）**

公開後の利用状況を見て、次の改善サイクルにフィードバックします。

---

### タスクの大きさによる使い分け

| レベル | 例 | 進め方 |
|---|---|---|
| **L1（フル管理）** | 新しいアプリの開発 | 全ステージを順番に。各ステップで確認 |
| **L2（部分委任）** | 既存アプリへの機能追加 | 計画を確認後、実装〜デプロイはAIに任せる |
| **L3（完全委任）** | ドキュメント更新、テスト追加 | 結果報告だけ受け取る |

---

### 実体験からのアドバイス

**1. 「まず計画を見せて」は最強の呪文**

大きな作業の前に必ずこの一言を入れましょう。AIが計画を立て、あなたが承認してから実行に移れます。手戻りが劇的に減ります。

**2. 小さく作って、小さくリリース**

一度に完璧なアプリを目指すのではなく、最小限の機能（MVP）でまず公開し、使いながら改善していく方が成功率が高いです。

**3. 保存は頻繁に**

大きな変更をした後は必ず「保存して」で Git に保存しましょう。万が一の時に前の状態に戻せます。

**4. 壊れたら戻せる**

GitHubに保存してあれば、どんな変更も取り消せます。怖がらずに実験してみましょう。

\`\`\`
前回のコミットに戻して（今の変更は取り消して）
\`\`\`
`
        }
      ]
    }
  ]
};

// Claude Code Operations Manual - Complete Rewrite based on research
// Structure: Experience-first, progressive disclosure, non-programmer audience

const MANUAL = {
  title: "Claude Code 実務マニュアル",
  subtitle: "完全版",
  version: "3.0",
  date: "2026年4月",

  parts: [
    // =====================================================================
    // PART 0: INTRODUCTION — 30秒で分かるClaude Code
    // =====================================================================
    {
      id: "intro",
      title: "はじめに",
      description: "Claude Codeとは何か、何ができるか",
      chapters: [
        {
          id: "intro-what",
          title: "Claude Codeとは",
          content: `
## Claude Codeとは

**Claude Codeは、日本語で「こういうものが欲しい」と伝えるだけで、実際に動くWebアプリを作ってくれるAIツールです。** プログラミングの知識は一切不要です。

たとえば、こんなことができます:

- 「助成金の情報を管理するデータベースを作って」→ 検索・フィルタ付きのWebアプリが30分で完成
- 「この会議の録音を文字起こしして、議事録を作って」→ AIが自動で要約・整理
- 「毎月の経費を記録して、月別にグラフ表示するアプリを作って」→ スマホでも使えるアプリが1時間で完成

---

### 誰のためのツールか

Claude Codeは、以下のような方に最適です:

- **NPO・NGOのスタッフ**: 助成金管理、イベント運営、会員管理など、業務を効率化するアプリを自分で作りたい
- **コンサルタント**: クライアント向けのダッシュボードや分析ツールを素早く作りたい
- **研究者**: データの整理・可視化、論文管理、調査ツールを自分の研究に合わせて作りたい
- **プログラミングは専門外だが、ITツールには日常的に触れている方**

---

### 実際に作れるもの（実例）

以下は、プログラミング未経験の状態からClaude Codeで実際に作り、運用しているアプリの例です。

| アプリ | 何をするか | 作成時間 |
|---|---|---|
| 助成金データベース | 3,669件の助成金情報を検索・フィルタ。締切順ソート | 約1時間 |
| 科研費申請書作成ツール | 研究テーマを入力するとAIが申請書の下書きを生成 | 約2時間 |
| 産学連携マッチング | 研究キーワードと企業ニーズを自動マッチング | 約3時間 |
| イベント管理アプリ | 参加者登録・QRコード受付・アンケート集計 | 約半日 |
| 会議録自動化ツール | 録音からTODOリストを自動抽出 | 約2時間 |

すべてインターネットに公開済みで、日常的に使っています。

---

### かかる費用

| 項目 | 費用 | 備考 |
|---|---|---|
| Claude Code本体 | 月額約$20〜（Claude Proプラン） | またはAPI従量課金（使った分だけ） |
| アプリの公開（Vercel） | 無料 | 個人利用の範囲内 |
| コードの保管（GitHub） | 無料 | プライベートリポジトリも無料 |
| データベース（必要時） | 無料 | Supabase、Turso等の無料枠 |

**最初にかかるお金はClaude Codeの利用料（月額約3,000円〜）だけです。** 他のサービスはすべて無料枠で始められます。

---

### このマニュアルの使い方

**初めての方は、上から順番に読み進めてください。** 「準備」「最初のアプリ」「公開」の3ステップで、最短1時間半でアプリをインターネットに公開できます。

| ステップ | 内容 | 所要時間 |
|---|---|---|
| 1. 準備する | ソフトのインストールとアカウント作成 | 約30分 |
| 2. アプリを作る | AIに指示してアプリを作成 | 30分〜1時間 |
| 3. 公開する | インターネットに公開してURLを共有 | 約10分 |

「困ったときは」のページは、エラーが出たときにいつでも参照してください。「もっと使いこなす」以降は、基本に慣れてから読めば十分です。

---

<div class="community-section" id="communitySection">
<div class="community-hero">
<span class="community-label">NPO法人ミラツクが運営する共創ネットワーク</span>
<h3>Living Futures Network</h3>
</div>
<div class="community-lead">AIとの共創で「まだ形になっていない未来」をつくる。<br>その実践のための場を運営しています。<br>※Living Futures Networkは招待制です。まずは、メルマガに登録してください。</div>
<div class="community-divider"></div>
<div class="community-form-wrap" id="communityForm">
<div class="com-steps-indicator"><div class="com-step-dot active" id="comDot1"></div><div class="com-step-dot" id="comDot2"></div></div>
<div class="community-step active" id="comStep1">
<div class="com-field">
<input type="email" class="com-input" id="comEmail" placeholder=" " autocomplete="email">
<label class="com-label">メールアドレス</label>
</div>
<button class="com-btn com-btn-primary" onclick="comNextStep('')">次へ <span class="btn-arrow">&rarr;</span></button>
<div class="com-trust">マニュアル更新、実践事例、AI共創の最新事例をお届けします</div>
</div>
<div class="community-step" id="comStep2">
<div class="com-row">
<div class="com-field">
<input type="text" class="com-input" id="comName" placeholder=" " autocomplete="name">
<label class="com-label">氏名</label>
</div>
<div class="com-field">
<input type="text" class="com-input" id="comOrg" placeholder=" " autocomplete="organization">
<label class="com-label">所属（任意）</label>
</div>
</div>
<label class="com-consent"><input type="checkbox" id="comConsent" checked> メールマガジン配信に同意します。配信停止はいつでも可能です。</label>
<button class="com-btn com-btn-primary" onclick="submitCommunity()" id="comSubmit">Living Futures Networkのメルマガに登録する</button>
</div>
</div>
<div class="community-success" id="communitySuccess">
<div class="success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
<h4>ようこそ、コミュニティへ</h4>
<p>確認メールをお送りしました。<br>一緒に未来を作っていきましょう。</p>
</div>
</div>
`
        }
      ]
    },

    // =====================================================================
    // PART 1: MINIMAL SETUP — 最小限の準備
    // =====================================================================
    {
      id: "setup",
      title: "準備する",
      description: "最短で使い始めるための最小限のセットアップ",
      chapters: [
        {
          id: "setup-mac",
          title: "Macの準備（15分）",
          content: `
## Macの準備

Claude Codeを使うために、Macにいくつかのソフトウェアをインストールします。やることは「コマンドをコピーして貼り付ける」だけです。

---

### ステップ1: ターミナルを開く

「ターミナル」は、文字を入力してパソコンに指示を出すアプリです。Claude Codeはこの中で動きます。

**開き方:**
1. キーボードで \`Command\` + \`Space\` を同時に押す
2. 「ターミナル」と入力する
3. 表示された「ターミナル」をクリック

黒い（または白い）ウィンドウが開きます。ここに文字を入力して \`Enter\` を押すと、指示が実行されます。

**安心ポイント:**
- 実行中の操作を止めたいときは \`Ctrl\` + \`C\` を押せば止まります
- 間違ったコマンドを入力しても、パソコンが壊れることはありません
- パスワード入力時、画面には何も表示されませんが、入力されています

---

### ステップ2: Homebrewをインストールする

Homebrewは「ソフトのインストールを簡単にするツール」です。このあとの手順で使います。

ターミナルに以下を**まるごとコピー**して貼り付け、\`Enter\` を押します:
\`\`\`
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
\`\`\`

- 「Password:」と表示されたら → Macのログインパスワードを入力して \`Enter\`
- 「Press RETURN to continue」と表示されたら → \`Enter\`
- 数分待ちます（たくさん文字が流れますが正常です）

**確認:**
\`\`\`
brew --version
\`\`\`
「Homebrew 4.x.x」と表示されれば成功です。

「command not found: brew」と出た場合は、以下を実行してください:
\`\`\`
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
\`\`\`

---

### ステップ3: Node.jsをインストールする

Webアプリを動かすためのソフトです。

\`\`\`
brew install node
\`\`\`

**確認:** \`node --version\` で「v20」以上が出ればOK。

---

### ステップ4: 確認

以下の2つがインストールされていれば、準備完了です。

| ソフト | 確認コマンド | 役割 |
|---|---|---|
| Homebrew | \`brew --version\` | 他のソフトのインストールを簡単にする |
| Node.js | \`node --version\` | Webアプリを動かすエンジン |

PythonとGitはMacに最初から入っています（\`python3 --version\`、\`git --version\` で確認できます）。
`
        },
        {
          id: "setup-accounts",
          title: "アカウントを作る（15分）",
          content: `
## アカウントを作る

3つのアカウントを作ります。すべて無料です。

| サービス | 役割 | 例えると |
|---|---|---|
| **Anthropic** | AIの頭脳を使うための鍵 | 図書館の利用カード |
| **GitHub** | 作ったファイルの保管場所 | クラウドの書庫 |
| **Vercel** | アプリをインターネットに公開する場所 | Webサイトのホスティング |

---

### 1. Anthropic アカウント（AIの鍵を取得する）

1. ブラウザで <a href="https://console.anthropic.com/" target="_blank" rel="noopener">console.anthropic.com</a> を開く
2. 「Sign up」でアカウントを作成
3. ログイン後、左メニューの「API Keys」をクリック
4. 「Create Key」→ 名前を入力（例: 「work」）→ 作成
5. 表示されたキー（\`sk-ant-\` で始まる長い文字列）を**必ずコピー**

**重要:** このキーは一度しか表示されません。必ずこの時点でコピーしてください。

**キーを安全に保存する:**
\`\`\`
security add-generic-password -s "ANTHROPIC_API_KEY" -a "anthropic" -w "sk-ant-ここにコピーしたキーを貼り付ける"
\`\`\`

保存できたか確認:
\`\`\`
security find-generic-password -s "ANTHROPIC_API_KEY" -w
\`\`\`
キーが表示されれば成功。

---

### 2. GitHub アカウント（ファイルの保管場所）

1. <a href="https://github.com/signup" target="_blank" rel="noopener">github.com</a> で「Sign up」
2. メールアドレス、パスワード、ユーザー名を設定
3. メール認証を完了

**ターミナルからGitHubを使えるようにする:**
\`\`\`
brew install gh
gh auth login
\`\`\`

質問に答えます:
1. 「What account...?」→ **GitHub.com**
2. 「What is your preferred protocol?」→ **HTTPS**
3. 「Authenticate Git...?」→ **Yes**
4. 「How would you like to authenticate?」→ **Login with a web browser**
5. 表示される8桁のコードをメモ → ブラウザでコードを入力

**確認:** \`gh auth status\` で「Logged in」と表示されれば成功。

---

### 3. Vercel アカウント（アプリの公開場所）

1. <a href="https://vercel.com/signup" target="_blank" rel="noopener">vercel.com</a> で「Sign Up」
2. 「Continue with GitHub」を選択（GitHubと自動連携）

これだけで完了です。
`
        },
        {
          id: "setup-install",
          title: "Claude Codeをインストールする（5分）",
          content: `
## Claude Codeをインストールする

ターミナルで以下を実行します:

\`\`\`
curl -fsSL https://claude.ai/install.sh | bash
\`\`\`

**別の方法（上がうまくいかない場合）:**
\`\`\`
brew install --cask claude-code
\`\`\`

**確認:**
\`\`\`
claude --version
\`\`\`
バージョン番号が表示されれば成功です。

---

### 初回起動

適当なフォルダに移動してClaude Codeを起動します:
\`\`\`
mkdir ~/projects/apps/my-first-app
cd ~/projects/apps/my-first-app
claude
\`\`\`

初回はブラウザが開いてAnthropicアカウントでのログインを求められます。ログインすれば、次回以降は自動です。

---

### 準備完了！

ここまでで、Claude Codeを使う準備は整いました。次の章で、実際にアプリを作ります。

| 確認項目 | コマンド |
|---|---|
| Homebrewが入っている | \`brew --version\` |
| Node.jsが入っている | \`node --version\` |
| GitHubにログイン済み | \`gh auth status\` |
| Claude Codeが入っている | \`claude --version\` |
| Anthropic APIキーを保存した | \`security find-generic-password -s "ANTHROPIC_API_KEY" -w\` |
`
        }
      ]
    },

    // =====================================================================
    // PART 2: FIRST APP — 最初のアプリを作る
    // =====================================================================
    {
      id: "first-app",
      title: "最初のアプリを作る",
      description: "実際にAIに指示してアプリを作る体験",
      chapters: [
        {
          id: "app-walkthrough",
          title: "実例: 経費管理アプリを作る",
          content: `
## 実例: 経費管理アプリを30分で作る

ここでは、「経費の記録・集計ができるWebアプリ」を実際に作る過程を、会話の全文付きで紹介します。同じ手順で、どんなアプリでも作れます。

---

### ステップ1: フォルダを作ってClaude Codeを起動する

ターミナルで:
\`\`\`
mkdir ~/projects/apps/expense-tracker
cd ~/projects/apps/expense-tracker
claude
\`\`\`

Claude Codeが起動すると、入力欄が表示されます。ここに日本語で指示を入力します。

---

### ステップ2: AIに依頼する

以下のように入力して \`Enter\` を押します:

\`\`\`
経費を管理するWebアプリを作ってください。

【機能】
- 日付、カテゴリ（交通費・会議費・消耗品など）、金額、メモを入力できる
- 登録した経費の一覧を表示する
- 月別の合計金額を表示する
- CSVファイルでダウンロードできる

【デザイン】
- シンプルで見やすいデザイン
- スマホでも使えるように

1つのHTMLファイルで完結させてください。
\`\`\`

---

### ステップ3: AIの提案を承認する

AIが「以下のファイルを作成します」と提案してきます。内容を確認して:
- \`y\` を押す → 承認（ファイルが作成される）
- \`n\` を押す → 拒否（やり直し）

**実際の会話例:**
\`\`\`
Claude: index.htmlを作成します。経費入力フォーム、一覧表示、
       月別集計、CSV出力機能を含む単一ファイルアプリです。
       [ファイルの内容が表示される]

あなた: y

Claude: ファイルを作成しました。ブラウザで index.html を
       開いて確認してください。
\`\`\`

---

### ステップ4: ブラウザで確認する

Finderで \`~/projects/apps/expense-tracker/index.html\` をダブルクリックするとブラウザで開きます。

アプリが表示されたら、実際に使ってみてください:
1. 日付、カテゴリ、金額を入力して「追加」ボタンを押す
2. 一覧に表示されることを確認
3. 月別集計を確認

---

### ステップ5: 修正を依頼する

気になる点があれば、Claude Codeに伝えます:
\`\`\`
以下を修正してください:
- テーブルの文字をもう少し大きくして
- カテゴリに「通信費」「交際費」を追加して
- 金額に3桁区切りのカンマを表示して
\`\`\`

AIが修正を提案するので、\`y\` で承認。ブラウザをリロード（\`Command\` + \`R\`）して確認します。

**修正のコツ:**
- 何度でも修正できます。納得いくまで繰り返してください
- スクリーンショットを撮って（\`Command\` + \`Shift\` + \`4\`）Claude Codeに渡すと、さらに正確に修正してくれます
- 「ここの色を変えたい」のような抽象的な指示より「ヘッダーの背景色を#7A4033にして」のように具体的に伝えると正確です

---

### ステップ6: 保存する

完成したら:
\`\`\`
GitHubに保存してください
\`\`\`

AIが自動でGitHubにファイルを保存します。これで、パソコンが壊れてもファイルは安全です。

---

### おめでとうございます！

経費管理アプリが完成しました。この時点では自分のパソコンの中だけで動いています。次の章で、インターネットに公開する方法を説明します。
`
        },
        {
          id: "app-templates",
          title: "すぐ使える依頼テンプレート",
          content: `
## すぐ使える依頼テンプレート

Claude Codeへの最初の依頼文は、アプリの出来を大きく左右します。以下のテンプレートをコピーして、自分の目的に書き換えてください。

---

### 基本テンプレート

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
○○のスタッフ○名。ITに詳しくない。

【デザイン】
シンプルで余白が多く、見やすいデザイン。
スマホでも使えるように。
\`\`\`

---

### 業務別テンプレート

**イベント参加者管理:**
\`\`\`
イベントの参加者を管理するWebアプリを作ってください。

- 参加者の名前、所属、メールアドレス、参加区分（登壇者/一般）を登録できる
- 参加者一覧を表示し、検索・フィルタできる
- 参加者数の集計を表示する
- CSVでエクスポートできる

スマホでも操作できるデザインにしてください。
\`\`\`

**アンケート集計:**
\`\`\`
アンケート結果を集計・可視化するWebアプリを作ってください。

- CSVファイルをアップロードすると、自動で集計する
- 設問ごとの回答分布をグラフ（棒グラフ・円グラフ）で表示
- 自由記述の回答を一覧表示
- 集計結果をPDFでダウンロード可能

データはブラウザ内に保存（サーバー不要）。
\`\`\`

**書籍・文献管理:**
\`\`\`
読んだ本や論文を管理するWebアプリを作ってください。

- タイトル、著者、出版年、カテゴリ、メモを登録
- タグで分類できる
- キーワードで全文検索できる
- 「読みたい」「読書中」「読了」のステータス管理

データはSQLiteに保存。
\`\`\`

---

### 依頼のコツ

| やること | やらないこと |
|---|---|
| **何を実現したいか**を伝える | 実装方法を細かく指定する |
| 使う人の技術レベルを伝える | 何も言わない（AIは技術者向けに作ってしまう） |
| まず最小限の機能で始める | 全機能を一度に頼む |
| 「まず計画を見せて」で確認する | いきなり「全部作って」 |

**大きな変更をする前は、必ず「まず計画を見せて」と伝えましょう。** AIが作業方針を提示してくれるので、方向性を確認してから実行に移せます。これだけで「思っていたのと違う」という手戻りが大幅に減ります。

<div class="cta-inline" id="ctaInline1"><div class="cta-inline-text"><span class="cta-il">LIVING FUTURES NETWORK</span><p>実践事例やテンプレートの最新情報をメールでお届けします</p></div><div class="cta-inline-form"><input type="email" placeholder="メールアドレス" autocomplete="email"><button onclick="submitInlineCta('ctaInline1')">登録</button></div></div>
`
        }
      ]
    },

    // =====================================================================
    // PART 3: PUBLISH — 公開する
    // =====================================================================
    {
      id: "publish",
      title: "公開する",
      description: "作ったアプリをインターネットに公開する",
      chapters: [
        {
          id: "pub-github",
          title: "GitHubに保存する",
          content: `
## GitHubに保存する

GitHubは、作ったファイルをインターネット上に安全に保管する場所です。パソコンが壊れてもファイルが残り、変更の履歴も自動で記録されます。

---

### 保存方法

Claude Codeに「保存して」と伝えるだけです。AIが以下を自動で行います:

1. ファイルの変更を記録する
2. GitHubにアップロードする
3. 完了を報告する

**初めて保存するとき:**
\`\`\`
GitHubにプライベートリポジトリを作って保存してください
\`\`\`

AIが自動で:
- GitHubに専用の保管フォルダ（リポジトリ）を作成
- すべてのファイルをアップロード
- 以後の変更も自動で追跡

**2回目以降:**
\`\`\`
保存して
\`\`\`

これだけで、変更がGitHubに送信されます。

---

### ブラウザで確認する

\`github.com\` にログインすると、自分のリポジトリ一覧が見えます。リポジトリをクリックすれば、ファイルの中身や変更履歴を確認できます。普段は確認する必要はありませんが、「ちゃんと保存されているかな」と不安なときに便利です。

---

### 公開設定

| 設定 | 意味 | 使い分け |
|---|---|---|
| Private（非公開） | 自分だけがコードを見れる | 社内ツール、業務アプリ（通常はこちら） |
| Public（公開） | 誰でもコードを見れる | 公開ダッシュボード、資料サイト |

Claude Codeに「プライベートで」「パブリックで」と指定できます。指定しなければプライベートで作成されます。
`
        },
        {
          id: "pub-vercel",
          title: "インターネットに公開する",
          content: `
## インターネットに公開する

GitHubに保存しただけでは、自分のパソコンとGitHub上にファイルがあるだけです。他の人がブラウザからアクセスできるようにするには、Vercelで「公開」します。

---

### 公開方法

Claude Codeに伝えるだけです:
\`\`\`
Vercelにデプロイしてください
\`\`\`

AIが自動で:
1. GitHubに最新のファイルを送信
2. Vercelと接続
3. 公開完了後、URLを教えてくれる

公開されたURLの例:
\`\`\`
https://expense-tracker-abc123.vercel.app
\`\`\`

このURLを他の人に共有すれば、誰でもブラウザからアプリにアクセスできます。

---

### 更新の反映

一度Vercelと接続すれば、以降はGitHubに保存（\`保存して\`）するだけで、自動的に公開版も最新に更新されます。手動で「公開して」と言う必要はありません。

---

### 環境変数（AIの鍵をVercelに設定する）

アプリの中でAI機能を使っている場合、APIキーをVercelにも教える必要があります。

**設定方法:**
1. ブラウザで \`vercel.com\` にログイン
2. プロジェクトを選択 → 「Settings」→「Environment Variables」
3. 変数名と値を入力して「Save」

| よく設定する変数 | 何のため |
|---|---|
| ANTHROPIC_API_KEY | アプリ内でAI機能を使うため |
| SENDGRID_API_KEY | アプリからメールを送信するため |

Claude Codeに「Vercelの環境変数を設定して」と伝えれば、ターミナルからも設定できます。

---

### もう一つの公開方法: GitHub Pages

静的なサイト（HTMLファイルだけで動くもの）なら、GitHub Pagesでも公開できます。完全無料で、Claude Codeに「GitHub Pagesで公開して」と伝えるだけです。

| | Vercel | GitHub Pages |
|---|---|---|
| 向いているアプリ | サーバー処理が必要なアプリ | HTML/CSS/JSだけのアプリ |
| URL | xxx.vercel.app | ユーザー名.github.io/アプリ名 |
| 費用 | 無料（制限あり） | 完全無料 |
`
        }
      ]
    },

    // =====================================================================
    // PART 4: TROUBLESHOOTING — 困ったときは
    // =====================================================================
    {
      id: "trouble",
      title: "困ったときは",
      description: "よくある問題と対処法",
      chapters: [
        {
          id: "trouble-common",
          title: "よくあるエラーと対処法",
          content: `
## よくあるエラーと対処法

エラーが出ることは正常です。プログラミングでは「エラー → 修正 → 確認」の繰り返しが日常です。焦らず、以下の手順で対処してください。

---

### 基本の対処法（困ったらまずこれ）

**エラーメッセージが出たら、そのままClaude Codeに貼り付ける:**
\`\`\`
このエラーが出ました。修正してください:
[ここにエラーメッセージを貼り付け]
\`\`\`

多くの場合、AIが原因を特定して修正してくれます。

---

### インストール・セットアップ時のエラー

**「command not found: brew」**
→ Homebrewのパス設定が必要です:
\`\`\`
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
\`\`\`

**「command not found: node」**
→ Node.jsがインストールされていません:
\`\`\`
brew install node
\`\`\`

**「command not found: claude」**
→ Claude Codeのインストールをやり直してください:
\`\`\`
curl -fsSL https://claude.ai/install.sh | bash
\`\`\`

**パスワード入力で何も表示されない**
→ 正常です。画面には表示されませんが入力されています。そのまま入力して \`Enter\` を押してください。

---

### アプリ開発中のエラー

**「Address already in use」**
→ 同じポートで別のアプリが動いています。以下で止めてから再起動:
\`\`\`
lsof -ti:3000 | xargs kill
\`\`\`
（\`3000\` の部分は、エラーメッセージに表示されたポート番号に置き換え）

**「npm install」で大量のエラー**
→ 最後の行を確認してください。「added XX packages」と書かれていれば成功です。途中の警告（WARN）は問題ありません。最後が「ERR!」の場合は、AIに「npm installでエラーが出ました。解決してください」と伝えます。

**「APIキーが設定されていません」**
→ キーがKeychainに保存されているか確認:
\`\`\`
security find-generic-password -s "ANTHROPIC_API_KEY" -w
\`\`\`
キーが表示されない場合は、「アカウントを作る」の章に戻ってAPIキーを保存してください。

---

### Claude Codeの操作に関する問題

**AIが意図しない操作をしている:**
1. \`Escape\` キーを押す → AIの操作がキャンセルされます（最も安全）
2. それでも止まらなければ \`Ctrl\` + \`C\` を押す
3. 「直前の変更をすべて取り消して」と伝えれば元に戻せます

**AIが同じ間違いを繰り返す:**
\`\`\`
この方法では2回試しても直りません。
別のアプローチで解決してください。
\`\`\`

**セッションが長くなってAIの反応がおかしい:**
1. \`/compact\` と入力 → 会話が圧縮されてリフレッシュ
2. それでもダメなら \`/clear\` → 会話をリセットして新しく始める

**AIの許可を求めるダイアログが出た:**
→ 内容を確認して \`y\`（承認）を押してください。セキュリティのための確認です。

---

### 公開後のエラー

**デプロイしたのに古い画面のまま:**
1. \`Command\` + \`Shift\` + \`R\` でキャッシュクリアして再読み込み
2. ブラウザのシークレットウィンドウで開いてみる

**GitHubへのpushが失敗:**
→ Claude Codeに「pushが失敗しました。解決してください」と伝えればAIが自動で対処します。

---

### それでも解決しないとき

1. **新しいセッションで始める**: \`/clear\` でリセット。長い会話はAIの精度を下げることがあります
2. **問題を具体的に伝える**: 「動きません」ではなく「○○をクリックすると△△というエラーが表示される」
3. **スクリーンショットを渡す**: \`Command\` + \`Shift\` + \`4\` で撮影してClaude Codeにドラッグ&ドロップ
4. **エラーメッセージ全文をコピーして渡す**: 赤い文字をそのまま貼り付ける
`
        },
        {
          id: "trouble-faq",
          title: "FAQ（よくある質問）",
          content: `
## よくある質問

### Q. プログラミングの知識がなくても本当に使えますか？
はい。Claude Codeは日本語で指示するだけで動きます。コードの中身を理解する必要はありません。ただし、「何を作りたいか」を具体的に伝える力は必要です。

### Q. 作ったアプリが壊れたらどうなりますか？
GitHubに保存してあれば、いつでも前の状態に戻せます。Claude Codeに「前回のコミットに戻して」と伝えてください。

### Q. 費用はどれくらいかかりますか？
Claude Code本体の利用料（月額約$20〜のClaude Proプラン、またはAPI従量課金）が最低限必要です。GitHub、Vercel、データベースなどは無料枠で始められます。

### Q. 他の人と一緒に使えますか？
はい。GitHubのリポジトリを共有すれば、複数人で同じアプリを開発できます。ただし、同じファイルを同時に編集すると「コンフリクト（衝突）」が起きることがあります。その場合はClaude Codeに解決を依頼してください。

### Q. セキュリティは大丈夫ですか？
APIキー（各サービスの鍵）をコードの中に直接書かず、Keychainや環境変数で管理していれば安全です。本マニュアルの手順に従えば、基本的なセキュリティは確保されます。

### Q. アプリを作った後のメンテナンスは必要ですか？
使い続ける限り、定期的な更新が必要になることがあります。たとえば「新しい機能を追加したい」「表示がおかしくなった」場合は、Claude Codeで修正できます。アプリを放置しても壊れることは通常ありません。

### Q. 1つのHTMLファイルで作るアプリと、複数ファイルで作るアプリの違いは？
1つのHTMLファイルで完結するアプリは最もシンプルで、ブラウザで直接開けます。データの保存が不要な小さなツールに最適です。複数ファイルのアプリ（Next.jsなど）は、ログイン機能やデータベース連携が必要な本格的なアプリに使います。最初は1ファイルのアプリから始めることをおすすめします。

### Q. Claude Codeが作るコードの品質は信頼できますか？
基本的に高品質ですが、AIは完璧ではありません。特にセキュリティやデータ処理の正確性については、実際に動かして確認することが重要です。業務で使う場合は、公開前に動作確認を十分に行ってください。

<div class="cta-inline" id="ctaInline2"><div class="cta-inline-text"><span class="cta-il">LIVING FUTURES NETWORK</span><p>エラー対処法やTipsの最新情報をメールでお届けします</p></div><div class="cta-inline-form"><input type="email" placeholder="メールアドレス" autocomplete="email"><button onclick="submitInlineCta('ctaInline2')">登録</button></div></div>
`
        }
      ]
    },

    // =====================================================================
    // PART 5: EXPAND — もっと使いこなす
    // =====================================================================
    {
      id: "expand",
      title: "もっと使いこなす",
      description: "データベース、メール送信、外部サービスとの連携",
      chapters: [
        {
          id: "exp-database",
          title: "データベースを使う",
          content: `
## データベースを使う

アプリでデータを永続的に保存したい場合（会員情報、記録、履歴など）、データベースが必要です。「Excelの超強力版」と考えてください。

---

### どのデータベースを選ぶ？

Claude Codeに「○○を管理するアプリを作って」と伝えれば、AIが適切なものを選んでくれます。自分で選びたい場合は以下を参考にしてください。

| やりたいこと | 選ぶべきDB | 理由 |
|---|---|---|
| 自分のPCだけで使う | **SQLite** | 設定不要。ファイル1つで動く |
| Webに公開するアプリでデータ保存 | **Turso** | 無料枠が大きく設定が簡単 |
| ログイン機能も欲しい | **Supabase** | DB + ログイン機能がセット |
| リアルタイムでデータが更新される | **Firebase** | 全員の画面が同時に最新化 |

**迷ったら:** まずSQLiteで作り、公開するタイミングでTursoやSupabaseに移行するのが安全です。Claude Codeに「SQLiteからTursoに移行して」と伝えれば、AIが自動で変更してくれます。

---

### SQLite（最もシンプル）

設定不要。Claude Codeに「データはSQLiteで保存して」と伝えるだけ。アプリのフォルダに \`.db\` ファイルが作られます。

---

### Turso（公開アプリ向け）

1. <a href="https://turso.tech/" target="_blank" rel="noopener">turso.tech</a> でGitHubアカウントでサインアップ
2. ターミナルで:
\`\`\`
brew install tursodatabase/tap/turso
turso auth login
turso db create my-app-db
\`\`\`
3. 接続情報を取得:
\`\`\`
turso db show my-app-db --url
turso db tokens create my-app-db
\`\`\`
4. Vercelの環境変数に設定:
   - \`TURSO_DATABASE_URL\` → 表示されたURL
   - \`TURSO_AUTH_TOKEN\` → 表示されたトークン

---

### Supabase（ログイン機能付き）

1. <a href="https://supabase.com/dashboard" target="_blank" rel="noopener">supabase.com</a> でGitHubアカウントでサインアップ
2. 「New project」→ プロジェクト名を入力 → リージョンは「Northeast Asia (Tokyo)」→ 作成
3. 「Settings」→「API」から接続情報を取得

| 変数名 | 説明 |
|---|---|
| NEXT_PUBLIC_SUPABASE_URL | プロジェクトURL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | 公開用キー |
| SUPABASE_SERVICE_ROLE_KEY | 管理用キー（**絶対に公開しない**） |
`
        },
        {
          id: "exp-services",
          title: "外部サービスと連携する",
          content: `
## 外部サービスと連携する

アプリに特定の機能を追加したい場合、外部サービスのAPIを使います。Claude Codeに「○○の機能を追加して」と伝えれば、AIが適切なサービスを提案してくれます。

---

### よく使うサービス一覧

| サービス | 何ができるか | 費用 |
|---|---|---|
| **SendGrid** | アプリからメールを自動送信 | 月100通まで無料 |
| **Stripe** | クレジットカード決済 | 手数料のみ |
| **Slack API** | Slackにメッセージを送信 | 無料 |
| **Notion API** | Notionのページを操作 | 無料 |
| **Google Books API** | 書籍情報を検索 | 無料 |
| **Brave Search API** | Web検索機能を追加 | 月2,000回まで無料 |

---

### APIキーの管理方法（共通）

すべてのサービスで、手順は同じです:

1. サービスでアカウントを作る
2. APIキーを発行する
3. macOSのKeychainに安全に保存する:
\`\`\`
security add-generic-password -s "サービス名" -a "アカウント名" -w "キーの値"
\`\`\`
4. 公開アプリの場合、Vercelの環境変数にも設定する

**絶対にやってはいけないこと:**
- コードの中にAPIキーを直接書く → GitHubにアップロードしたときに漏洩する
- SlackやメールでAPIキーを送る → 他の人に見える可能性がある

---

### SendGrid（メール送信）のセットアップ例

1. <a href="https://signup.sendgrid.com/" target="_blank" rel="noopener">sendgrid.com</a> でアカウント作成
2. 「Settings」→「API Keys」→「Create API Key」→ キーをコピー
3. キーを保存:
\`\`\`
security add-generic-password -s "SENDGRID_API_KEY" -a "sendgrid" -w "SG.コピーしたキー"
\`\`\`
4. 送信元メールアドレスを認証:「Settings」→「Sender Authentication」→「Verify a Single Sender」

Vercelの環境変数に \`SENDGRID_API_KEY\`、\`SENDGRID_FROM_EMAIL\`、\`SENDGRID_FROM_NAME\` を設定すれば、公開アプリからもメール送信可能です。
`
        },
        {
          id: "exp-tips",
          title: "効果的な指示の出し方",
          content: `
## 効果的な指示の出し方

Claude Codeを使い込んで分かった、生産性を大きく上げるコツをまとめます。

---

### 1.「まず計画を見せて」で始める

大きな作業の前に、いきなり「作って」と言わず、まず計画を確認します。

\`\`\`
経費管理アプリに月別レポート機能を追加したい。
まず計画を見せてください。
\`\`\`

AIが「こうやって実装します」と方針を提示するので、確認してからOKを出します。

---

### 2. スクリーンショットを活用する

Claude Codeは画像を理解できます。「ここのデザインを変えたい」というとき、スクリーンショットを見せたほうが圧倒的に速く正確です。

\`Command\` + \`Shift\` + \`4\` で撮影して、Claude Codeにドラッグ&ドロップするだけです。

---

### 3. 段階的に作る

一度に完璧なアプリを目指すのではなく、「最小限 → 追加 → 追加」と段階的に作ります。

\`\`\`
まず基本の入力・一覧機能だけ作ってください。
追加機能は後から依頼します。
\`\`\`

---

### 4. 修正が2回失敗したら方向転換

同じ問題をAIが2回修正しても直らない場合:
\`\`\`
この方法では直りません。別のアプローチで試してください。
\`\`\`

---

### 5. セッションが長くなったら圧縮する

1時間以上の作業では \`/compact\` で会話を圧縮。話題が変わるなら \`/clear\` でリセット。

---

### 6. よく使う操作一覧

| やりたいこと | Claude Codeへの指示 |
|---|---|
| アプリを新規作成 | 「○○ができるWebアプリを作って」 |
| 機能を追加 | 「このアプリに○○機能を追加して」 |
| バグを修正 | 「○○をすると△△になる。□□になるように直して」 |
| GitHubに保存 | 「保存して」 |
| インターネットに公開 | 「Vercelにデプロイして」 |
| 変更を元に戻す | 「直前の変更を取り消して」 |
| 計画を見る | 「まず計画を見せて」 |
| 会話を圧縮 | \`/compact\` |
| 会話をリセット | \`/clear\` |
| 終了 | \`/exit\` または \`Ctrl+C\` を2回 |

<div class="cta-inline" id="ctaInline3"><div class="cta-inline-text"><span class="cta-il">LIVING FUTURES NETWORK</span><p>AI共創の上級テクニックや最新事例をメールでお届けします</p></div><div class="cta-inline-form"><input type="email" placeholder="メールアドレス" autocomplete="email"><button onclick="submitInlineCta('ctaInline3')">登録</button></div></div>
`
        }
      ]
    },

    // =====================================================================
    // PART 6: ADVANCED — 上級テクニック
    // =====================================================================
    {
      id: "advanced",
      title: "上級テクニック",
      description: "CLAUDE.md、コマンド、MCPサーバー連携など、生産性を上げる実践テクニック（10個以上のアプリを作った方向け）",
      chapters: [
        {
          id: "adv-claudemd",
          title: "CLAUDE.md（AIへの指示書）",
          content: `
## CLAUDE.md — AIが毎回読む指示書

CLAUDE.mdは、Claude Codeに「このプロジェクトではこういうルールで作業して」と伝えるファイルです。毎回のセッション開始時に自動で読み込まれます。

---

### なぜ必要か

セッションが変わるたびに「日本語で対応して」「シンプルなデザインにして」と繰り返す必要がなくなります。

---

### 初心者向けテンプレート

プロジェクトフォルダに \`CLAUDE.md\` というファイルを作り、以下を書きます:

\`\`\`markdown
# プロジェクトルール

- 日本語で対応してください
- シンプルで読みやすいコードを優先
- スマホ対応必須
- 完成したらGitHubに自動保存
- コミットメッセージは英語で feat:, fix:, docs: で始める
\`\`\`

Claude Codeに「CLAUDE.mdを作って」と依頼すれば、AIが作成してくれます。

---

### 配置場所

| 場所 | 効果 |
|---|---|
| プロジェクトフォルダ直下 | そのプロジェクトだけに適用 |
| \`~/.claude/CLAUDE.md\` | すべてのプロジェクトに共通適用 |

---

### Rulesファイル

CLAUDE.mdが大きくなったら、\`~/.claude/rules/\` フォルダにテーマ別のルールファイルを分離できます。
`
        },
        {
          id: "adv-commands",
          title: "コマンドとショートカット",
          content: `
## コマンドとショートカット

### よく使うコマンド

| コマンド | 何をするか |
|---|---|
| \`/help\` | 使い方ガイドを表示 |
| \`/clear\` | 会話をリセット |
| \`/compact\` | 会話を圧縮 |
| \`/exit\` | 終了 |
| \`/fast\` | 高速モードのオン/オフ |

---

### キーボードショートカット

| ショートカット | 動作 |
|---|---|
| \`Enter\` | メッセージを送信 |
| \`Escape\` | AIの操作をキャンセル |
| \`Shift + Tab\` | Plan Mode（計画モード）のオン/オフ |
| \`Ctrl + C\` | 強制終了（2回押す） |

---

### Plan Mode（計画モード）

\`Shift + Tab\` を押すと、AIは「計画だけ提示して、実行はしない」モードになります。大きな変更の前に方針を確認するのに便利です。

---

### カスタムコマンド

よく使う指示をファイルに保存して、\`/コマンド名\` で呼び出せます。

\`~/.claude/commands/review.md\` に:
\`\`\`
現在のブランチの変更をレビューしてください。
バグ、セキュリティ問題、改善点を指摘してください。
\`\`\`

これで \`/review\` と入力するだけでレビューが実行されます。
`
        },
        {
          id: "adv-mcp",
          title: "MCPサーバー（外部ツール連携）",
          content: `
## MCPサーバー — 外部ツールとの接続

MCPサーバーは、Claude Codeに「外部ツールを操作する能力」を追加する仕組みです。

| MCPサーバー | できること |
|---|---|
| GitHub | Issue管理、PR作成 |
| Playwright | ブラウザ操作、テスト |
| Notion | ページの検索・作成 |
| Slack | メッセージの送受信 |
| Google Workspace | Docs, Sheets, Calendar操作 |

Claude Codeに「SlackのMCPサーバーを設定して」と依頼すれば、AIが設定を手伝ってくれます。

**注意:** MCPサーバーを増やしすぎると起動が遅くなります。必要なものだけにしましょう。
`
        },
        {
          id: "adv-memory",
          title: "メモリとサブエージェント",
          content: `
## メモリ — セッションを超えた記憶

Claude Codeはセッションが終わると会話内容を忘れます。メモリシステムは、重要な情報を自動的にファイルに保存し、次のセッションで読み込むことで「共有知識」を蓄積します。

**記憶させたいことがあれば:**
\`\`\`
これを覚えておいて: APIキーはKeychainの「myapp-api」に保存してある
\`\`\`

作業中の修正指示やプロジェクトの重要な決定も、AIが自動的にメモリに保存します。

---

## サブエージェント — 専門家チーム

Claude Codeは、別の専門AIを呼び出して特定のタスクを委任できます。

| エージェント | 役割 |
|---|---|
| Explore | コードベースの調査 |
| researcher | Web調査 |
| reviewer | コードレビュー |
| security-auditor | セキュリティ監査 |

通常はClaude Codeが判断して自動的に起動しますが、明示的に指示することもできます:
\`\`\`
セキュリティレビューをしてほしい。専門のエージェントを使って。
\`\`\`

---

## コンテキスト管理

長い会話では、AIが以前の内容を忘れることがあります。対策:

- **CLAUDE.mdに重要ルールを書く** — 圧縮されても消えない
- **\`/compact\`で圧縮** — 同じ話題を続けるとき
- **\`/clear\`でリセット** — 話題を変えるとき
- **探索はサブエージェントに委任** — メインの会話をクリーンに保つ
`
        },
        {
          id: "adv-workflow",
          title: "実践的な開発ワークフロー",
          content: `
## 実践的な開発ワークフロー

60以上のアプリを開発・運用する中で確立した開発の型を紹介します。

---

### 7段階循環モデル

| Stage | やること | 誰が主導 |
|---|---|---|
| 0. 仕様 | 「何を作るか」を決める | あなた |
| 1. 調査・設計 | ベストプラクティスを調べ、設計する | AI（あなたが承認） |
| 2. 実装 | コードを書く | AI |
| 3. 品質検証 | 動作・デザイン・セキュリティを確認 | 別のAIエージェント |
| 4. 改善 | 問題を修正（最大3ラウンド） | AI |
| 5. デプロイ | GitHubに保存、Vercelに公開 | AI（あなたが承認） |
| 6. 観測 | 使いながら改善点を見つけ、次のサイクルへ | あなた |

---

### タスクの大きさによる使い分け

| レベル | 例 | 進め方 |
|---|---|---|
| L1（フル管理） | 新しいアプリ開発 | 各ステップで確認。「まず計画を見せて」 |
| L2（部分委任） | 機能追加 | 計画確認後、実装〜デプロイはAI任せ |
| L3（完全委任） | ドキュメント更新 | 結果報告だけ受け取る |

---

### 心得

1. **「まず計画を見せて」は最強の呪文** — 手戻りが劇的に減る
2. **小さく作って、小さくリリース** — 最小限で公開して、使いながら改善
3. **保存は頻繁に** — 大きな変更の後は必ず「保存して」
4. **壊れたら戻せる** — GitHubに保存してあれば「前回のコミットに戻して」で復元
5. **AIは副操縦士** — 完全に任せきりにせず、方向性はあなたが決める

---

<div class="community-section" id="communitySection2">
<div class="community-hero">
<span class="community-label">NPO法人ミラツクが運営する共創ネットワーク</span>
<h3>Living Futures Network</h3>
</div>
<div class="community-lead">AIとの共創で「まだ形になっていない未来」をつくる。<br>その実践のための場を運営しています。<br>※Living Futures Networkは招待制です。まずは、メルマガに登録してください。</div>
<div class="community-divider"></div>
<div class="community-form-wrap" id="communityForm2">
<div class="com-steps-indicator"><div class="com-step-dot active" id="comDot12"></div><div class="com-step-dot" id="comDot22"></div></div>
<div class="community-step active" id="comStep12">
<div class="com-field">
<input type="email" class="com-input" id="comEmail2" placeholder=" " autocomplete="email">
<label class="com-label">メールアドレス</label>
</div>
<button class="com-btn com-btn-primary" onclick="comNextStep('2')">次へ <span class="btn-arrow">&rarr;</span></button>
<div class="com-trust">マニュアル更新、実践事例、AI共創の最新事例をお届けします</div>
</div>
<div class="community-step" id="comStep22">
<div class="com-row">
<div class="com-field">
<input type="text" class="com-input" id="comName2" placeholder=" " autocomplete="name">
<label class="com-label">氏名</label>
</div>
<div class="com-field">
<input type="text" class="com-input" id="comOrg2" placeholder=" " autocomplete="organization">
<label class="com-label">所属（任意）</label>
</div>
</div>
<label class="com-consent"><input type="checkbox" id="comConsent2" checked> メールマガジン配信に同意します。配信停止はいつでも可能です。</label>
<button class="com-btn com-btn-primary" onclick="submitCommunity2()" id="comSubmit2">Living Futures Networkのメルマガに登録する</button>
</div>
</div>
<div class="community-success" id="communitySuccess2">
<div class="success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
<h4>ようこそ、コミュニティへ</h4>
<p>EMERGING FUTURE ── We already have.<br>一緒に未来を作っていきましょう。</p>
</div>
</div>
`
        }
      ]
    }
  ]
};

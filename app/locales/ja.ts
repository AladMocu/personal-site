import type { Translations } from "./en";

const ja: Translations = {
  nav: {
    about: "概要", skills: "スキル", work: "職歴",
    projects: "プロジェクト", contact: "連絡先", hire: "採用する",
  },
  hero: {
    eyebrow: "システムエンジニア · ボゴタ、コロンビア",
    roles: ["フルスタック開発者", "モバイルエンジニア", "クラウドアーキテクト", "システムエンジニア"],
    description: "React、.NET、Flutter、Azureでスケーラブルなシステムを構築。モバイルアプリからクラウドインフラまで — 確実にリリース。",
    cta_work: "実績を見る",
    cta_hello: "連絡する",
    scroll: "スクロール",
  },
  stats: [
    { label: "年の経験", sub: "2019年から" },
    { label: "企業", sub: "各業界" },
    { label: "公開アプリ", sub: "Playストア" },
    { label: "技術スタック", sub: "フルスタック" },
  ],
  skills: { section: "02 / スキル", heading: "技術スタック" },
  experience: {
    section: "03 / 経験",
    heading: "職歴",
    present: "現在",
    entries: [
      {
        role: "フルスタック開発者", type: "フルタイム",
        points: [
          "React/TypeScriptによるフルスタックWeb開発 — モジュール型スケーラブルなフロントエンド",
          ".NETによるバックエンドAPI開発 — セキュアで高性能なサービス",
          "Azureクラウド管理：各環境へのデプロイ、監視、インフラ整備",
          "Azure DevOpsによるCI/CDパイプライン — ビルド・テスト・デプロイの自動化",
          "Grafanaによる可観測性：ダッシュボード、アラート、信頼性監視",
          "Azure Service Bus：キュー/トピック設定、メッセージング、分散システムのトラブルシューティング",
        ],
      },
      {
        role: "フルスタック開発者", type: "フルタイム",
        points: [
          "React/Vite (TypeScript)による高速でモジュール型のフロントエンド開発",
          ".NETとDjangoによるバックエンドAPI — セキュアで保守性の高いサービス",
          "データベース設計・管理：スキーマ最適化、インデックス設計、パフォーマンスチューニング",
          "Dockerによるコンテナ化で環境の一貫性を確保",
          "CI/CDと統合したKubernetesオーケストレーションによる自動デプロイ",
        ],
      },
      {
        role: "Web開発講師", type: "パートタイム",
        points: [
          "外部参加者に向けたWeb開発入門の指導",
          "コース教材、実践演習、ハンズオンプロジェクトの設計",
          "多様な技術背景を持つ学生に合わせたコンテンツ調整",
        ],
      },
      {
        role: "モバイル開発者", type: "フルタイム",
        points: [
          "Flutterによるクロスプラットフォームモバイルアプリ — 高性能で直感的なUX",
          "Reactによるスケーラブルで保守性の高いWebアプリ開発",
          "GraphQLによるデータモデリングと最適化されたデータベース管理",
          "コンプライアンス基準に準拠した医療・健康データの収集・処理",
          "アプリストアへの自動デプロイを実現するCI/CDパイプライン",
          "EODおよびオンデマンドの分析パイプラインを含むデータエンジニアリング",
        ],
      },
      {
        role: "モバイル開発者", type: "フルタイム",
        points: [
          "Flutterによるクロスプラットフォームモバイルアプリ開発",
          "GCP上のクラウドネイティブアーキテクチャ：スケーラブル、セキュア、コスト最適化",
          "AWSからGCPへのワークロード移行とモダナイゼーション",
          "サービス指向原則に基づいたNext.jsフルスタックWebアプリ",
          "Azure Blob、SQL Server、Redisによる分散ストレージとキャッシング",
        ],
      },
      {
        role: "QAアナリスト", type: "フルタイム",
        points: [
          "全環境における品質保証 — 信頼性とUXの確保",
          "Google Error Reportingによるインシデント監視・管理",
        ],
      },
      {
        role: "フリーランス開発者", type: "フリーランス",
        points: [
          "動画配信ワークフロー向けソフトウェアツールの設計・管理",
          "SMTPによるセキュアなメールサービスの設定",
          ".NET Entity Frameworkを使用したMsSQLデータベースの設計・管理",
        ],
      },
    ],
    education: {
      degree: "システム・コンピューティング工学 学士",
      thesis: "機械学習を用いたOneM2M IoTデバイス向けIPSプロトタイプの実装",
    },
  },
  projects: {
    section: "04 / プロジェクト",
    heading: "主要プロジェクト",
    personal_label: "個人プロジェクト",
    featured: [
      {
        type: "Webプラットフォーム",
        description: "React/Vite、.NET、Djangoで構築したB2B Webプラットフォーム。DockerでコンテナH化し、KubernetesとCI/CDパイプラインで自動運用。",
      },
      {
        type: "モバイルアプリ",
        description: "Play Storeで公開中の音楽ストリーミングアプリ。GCPアーキテクチャ、Redisキャッシュ、Next.js WebをバックエンドにしたFlutterアプリ。",
      },
      {
        type: "アプリスイート · 3アプリ",
        description: "Flutterで構築した3つの医療・健康アプリ群（Florenz Health、Monaco、VitalLog）。医療環境向けコンプライアンス対応のデータ処理を実装。",
      },
    ],
    personal: [
      { description: "医療従事者と救急隊員向けのプライベート緊急アラームシステム。" },
      { description: "ベジタリアン・ビーガンへの移行に向けたパーソナライズレシピ付きダイエットプランナー。" },
      { description: "複数ドメインの可用性をリアルタイム通知で監視するサイトモニタリングサービス。" },
    ],
  },
  contact: {
    section: "05 / 連絡先",
    heading_1: "一緒に作ろう",
    heading_2: "何かを。",
    footer_role: "システムエンジニア",
    footer_location: "ボゴタ、コロンビア",
    footer_built: "Next.js & Framer Motionで構築",
    email: "メール", linkedin: "LinkedIn", phone: "電話",
  },
};

export default ja;

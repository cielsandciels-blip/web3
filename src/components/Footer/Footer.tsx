import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.megaFooter}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand & Info Column */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>株式会社ネクシア・コンサルティング</div>
            <p className={styles.brandDesc}>
              複雑化するグローバル経済における最適解を導き出し、<br />持続的な成長を支援するプロフェッショナルファーム。
            </p>
            <div className={styles.officeLinks}>
              <a href="#">東京</a>
              <a href="#">ニューヨーク</a>
              <a href="#">ロンドン</a>
              <a href="#">シンガポール</a>
            </div>
          </div>

          {/* Links Columns */}
          <div className={styles.linksCol}>
            <h4 className={styles.linkTitle}>専門領域</h4>
            <ul className={styles.linkList}>
              <li><a href="#">経営・全社戦略</a></li>
              <li><a href="#">デジタルトランスフォーメーション</a></li>
              <li><a href="#">サプライチェーン最適化</a></li>
              <li><a href="#">組織・人事マネジメント</a></li>
              <li><a href="#">サステナビリティ戦略（ESG）</a></li>
              <li><a href="#">リスクマネジメント</a></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.linkTitle}>業界・業種</h4>
            <ul className={styles.linkList}>
              <li><a href="#">金融サービス</a></li>
              <li><a href="#">ヘルスケア・ライフサイエンス</a></li>
              <li><a href="#">テクノロジー・メディア</a></li>
              <li><a href="#">消費財・リテール</a></li>
              <li><a href="#">製造・自動車</a></li>
              <li><a href="#">パブリックセクター</a></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.linkTitle}>インサイト・知見</h4>
            <ul className={styles.linkList}>
              <li><a href="#">最新の調査レポート</a></li>
              <li><a href="#">ホワイトペーパー</a></li>
              <li><a href="#">ポッドキャスト</a></li>
              <h4 className={styles.linkTitle} style={{marginTop: '2rem'}}>採用情報</h4>
              <li><a href="#">新卒・中途採用情報</a></li>
              <li><a href="#">ネクシアでの働き方</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; 2026 Nexia Consulting Group Inc. All Rights Reserved.
          </div>
          <div className={styles.legalLinks}>
            <a href="#">プライバシーポリシー</a>
            <a href="#">利用規約</a>
            <a href="#">クッキーポリシー</a>
            <a href="#">アクセシビリティ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      {/* Full-width premium background */}
      <div className={styles.heroBackground} style={{ backgroundImage: "url('/images/case_ma.png')" }}>
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.textContent}>
          <span className={styles.label}>株式会社ネクシア・コンサルティング</span>
          <h1 className={styles.title}>
            複雑化するグローバル経済に、<br />
            確かな最適解を。
          </h1>
          <p className={styles.description}>
            戦略策定からデジタル実装まで、不確実性の高い市場環境において<br className={styles.brDesktop} />
            日本企業が持続的な競争優位性を構築するための包括的な支援を行います。
          </p>
          <div className={styles.actions}>
            <a href="#expertise" className="btn-primary">
              コンサルティング領域を見る <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Dense News Ticker anchored at bottom */}
      <div className={styles.tickerBar}>
        <div className={`container ${styles.tickerContainer}`}>
          <div className={styles.tickerHeader}>最新のインサイト</div>
          <div className={styles.tickerContent}>
            <ul className={styles.tickerList}>
              <li>
                <span className={styles.date}>2026.04.15</span>
                <a href="#">生成AIが再編する金融業界のバリューチェーン</a>
              </li>
              <li className={styles.hiddenMobile}>
                <span className={styles.date}>2026.04.10</span>
                <a href="#">クロスボーダーM&Aにおけるガバナンス統合の要諦</a>
              </li>
            </ul>
          </div>
          <a href="#insights" className={styles.tickerMore}>一覧を見る &rarr;</a>
        </div>
      </div>
    </section>
  );
}

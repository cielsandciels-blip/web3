import { ArrowRight, FileText } from 'lucide-react';
import styles from './Insights.module.css';

const insightsData = [
  {
    type: 'Market Report',
    title: 'グローバルサステナビリティ開示基準の全容と対応戦略',
    date: '2026.04.12',
    author: 'ESG/気候変動プラクティス'
  },
  {
    type: 'Whitepaper',
    title: '次世代アーキテクチャへのシフト：マイクロサービスとデータメッシュ',
    date: '2026.04.05',
    author: 'テクノロジーコンサルティング本部'
  },
  {
    type: 'Article',
    title: '人的資本経営のROI測定手法に関する考察',
    date: '2026.03.28',
    author: '人事・組織コンサルティング'
  },
  {
    type: 'Market Report',
    title: 'APAC地域におけるM&AトレンドとクロスボーダーPMIの要諦',
    date: '2026.03.15',
    author: 'コーポレート戦略グループ'
  }
];

export default function Insights() {
  return (
    <section id="insights" className={`section ${styles.insightsSection}`}>
      <div className={`container ${styles.insightsLayout}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`section-title ${styles.darkTitle}`}>インサイト＆調査レポート</h2>
          <p className={styles.sectionDesc}>
            ネクシア・コンサルティングの各分野の専門家による、<br />最新の市場動向や経営アジェンダに対する深い洞察を提供します。
          </p>
          <a href="#" className="btn-outline" style={{ marginTop: '1.5rem' }}>すべてのインサイトを見る</a>
        </div>
        
        <div className={styles.insightsList}>
          {insightsData.map((insight, idx) => (
            <div key={idx} className={styles.insightItem}>
              <div className={styles.insightIcon}>
                <FileText size={20} />
              </div>
              <div className={styles.insightContent}>
                <div className={styles.insightMeta}>
                  <span className={styles.insightType}>{insight.type}</span>
                  <span className={styles.insightDate}>{insight.date}</span>
                </div>
                <h3 className={styles.insightTitle}>
                  <a href="#">{insight.title}</a>
                </h3>
                <div className={styles.insightAuthor}>{insight.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

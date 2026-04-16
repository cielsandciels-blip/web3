import { ArrowRight } from 'lucide-react';
import styles from './Cases.module.css';

const casesData = [
  {
    category: 'M&A / PMI',
    client: '大手精密機器メーカー',
    title: 'グローバルM&Aにおける統合推進（PMI）とシナジー創出基盤の構築',
    result: '買収後18ヶ月で年間150億円のコストシナジーを実現。共通IT基盤の完全統合。'
  },
  {
    category: 'Digital Transformation',
    client: '国内メガバンク',
    title: '基幹システムのモダナイゼーションとアジャイル開発組織の立ち上げ',
    result: '新サービスリリースまでのリードタイムを60%短縮。内製化率の向上。'
  },
  {
    category: 'Supply Chain',
    client: 'グローバル自動車部品メーカー',
    title: '地政学リスクを考慮したサプライチェーン・ネットワークの再構築',
    result: '調達リードタイムの安定化および為替変動リスクの極小化。'
  },
  {
    category: 'New Business',
    client: '大手小売業チェーン',
    title: '顧客データ統合による新たなリテール・メディア事業の創出',
    result: '新規事業による収益が全社利益の10%へ成長。顧客LTVの25%向上。'
  }
];

export default function Cases() {
  return (
    <section id="cases" className={`section ${styles.casesSection}`}>
      <div className={`container ${styles.casesLayout}`}>
        <div className={styles.header}>
          <h2 className="section-title">導入実績 (Client Cases)</h2>
          <p className={styles.headerDesc}>
            複雑な経営課題に対するアプローチと、具体的な創出価値の事例を紹介します。
          </p>
        </div>

        <div className={styles.caseList}>
          {casesData.map((caseItem, idx) => (
            <div key={idx} className={styles.caseRow}>
              <div className={styles.caseMeta}>
                <span className={styles.caseCategory}>{caseItem.category}</span>
                <span className={styles.caseClient}>{caseItem.client}</span>
              </div>
              <div className={styles.caseContent}>
                <h3 className={styles.caseTitle}>
                  <a href="#">{caseItem.title}</a>
                </h3>
                <div className={styles.caseResult}>
                  <strong>Impact:</strong> {caseItem.result}
                </div>
              </div>
              <div className={styles.caseAction}>
                <a href="#" className={styles.readMore}>
                  詳細を読む <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAll}>
           <a href="#" className="btn-primary">すべての実績を見る</a>
        </div>
      </div>
    </section>
  );
}

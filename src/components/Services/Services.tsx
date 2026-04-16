import { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import styles from './Services.module.css';

const expertiseData = [
  {
    id: 'strategy',
    title: 'Strategy & Corporate Finance',
    description: '不確実性の高い事業環境において、全社戦略の策定、ポートフォリオ変革、クロスボーダーM&Aによる非連続な成長軌道の構築を支援します。',
    capabilities: ['全社戦略・成長戦略', 'M&A・PMI', 'サステナビリティ戦略', '新規事業開発']
  },
  {
    id: 'digital',
    title: 'Digital & Technology',
    description: 'レガシーシステムからの脱却戦略およびクラウドネイティブアーキテクチャへの移行、AI/データアナリティクスを活用した新たなビジネスモデル構築を推進します。',
    capabilities: ['DXビジョン策定', 'ITモダナイゼーション', 'データ＆AI活用', 'サイバーセキュリティ']
  },
  {
    id: 'operations',
    title: 'Operations & Supply Chain',
    description: '地政学リスクに対応するサプライチェーンの再構築、BPOやデジタルアセット活用による抜本的なコスト削減とオペレーションエクセレンスを実現します。',
    capabilities: ['サプライチェーン最適化', '調達戦略', 'マニュファクチャリング', 'ゼロベース・オーガニゼーション']
  },
  {
    id: 'people',
    title: 'People & Organization',
    description: '変革を牽引する次世代リーダーの育成、多様性を活かす組織カルチャーの醸成、およびデータドリブンな人的資本経営への移行を支援します。',
    capabilities: ['チェンジマネジメント', 'タレントマネジメント', '次世代リーダー育成', '人事制度改革']
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(expertiseData[0].id);
  
  const activeData = expertiseData.find(e => e.id === activeTab);

  return (
    <section id="expertise" className={`section ${styles.expertiseSection}`}>
      <div className="container">
        <h2 className="section-title">専門領域 (Our Expertise)</h2>
        
        <div className={styles.denseLayout}>
          {/* Left Sidebar Menu */}
          <div className={styles.sidebar}>
            <ul className={styles.tabList}>
              {expertiseData.map((item) => (
                <li key={item.id}>
                  <button 
                    className={`${styles.tabBtn} ${activeTab === item.id ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span>{item.title}</span>
                    <ChevronRight size={16} className={styles.tabIcon} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Content Area */}
          <div className={styles.contentArea}>
            {activeData && (
              <div className={styles.activeContent}>
                <h3 className={styles.contentTitle}>{activeData.title}</h3>
                <p className={styles.contentDesc}>{activeData.description}</p>
                
                <h4 className={styles.capTitle}>コアカパビリティ</h4>
                <ul className={styles.capList}>
                  {activeData.capabilities.map((cap, idx) => (
                    <li key={idx}>
                      <ChevronRight size={12} className={styles.bullet} /> {cap}
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="btn-primary" style={{ marginTop: '2rem' }}>
                  領域の詳細を見る <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

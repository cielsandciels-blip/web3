import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import styles from './News.module.css';

const newsItems = [
  {
    date: '2026.04.10',
    category: 'お知らせ',
    title: 'アジア太平洋地域の「Fastest Growing Consulting Firms 2026」に選出'
  },
  {
    date: '2026.03.22',
    category: 'レポート',
    title: '【調査レポート】ジェネレーティブAIがもたらす金融業界の変革と未来予測'
  },
  {
    date: '2026.03.05',
    category: 'プレスリリース',
    title: '製造業向けサプライチェーン最適化ソリューション「Nexia-SCM」の提供を開始'
  },
  {
    date: '2026.02.18',
    category: 'お知らせ',
    title: '本社オフィス移転および増床に関するお知らせ'
  }
];

export default function News() {
  return (
    <section id="news" className={`section ${styles.newsSection}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">NEWS & INSIGHTS</h2>
          <p className="section-subtitle">
            最新情報や専門的な知見を発信しています。
          </p>
        </motion.div>

        <div className={styles.newsList}>
          {newsItems.map((item, index) => (
            <motion.a 
              href="#" 
              key={index}
              className={styles.newsItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.meta}>
                <span className={styles.date}>{item.date}</span>
                <span className={`${styles.category} ${
                  item.category === 'お知らせ' ? styles.catNotice :
                  item.category === 'レポート' ? styles.catReport : styles.catPress
                }`}>
                  {item.category}
                </span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.arrow}>
                <ChevronRight size={20} />
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          className={styles.centerAction}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#" className="btn-outline">一覧を見る</a>
        </motion.div>
      </div>
    </section>
  );
}

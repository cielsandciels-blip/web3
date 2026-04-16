import { motion } from 'framer-motion';
import styles from './Vision.module.css';

export default function Vision() {
  return (
    <section id="vision" className={`section ${styles.visionSection}`}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>VISION</h2>
            <h3 className={styles.catchphrase}>
              ビジネスの潜在力を解き放ち、<br />
              社会に持続可能な価値を。
            </h3>
            <p className={styles.text}>
              私たちNexia Consultingは、先行き不透明な時代において、
              確かな羅針盤となるべく設立されました。
              データに基づく論理的な戦略策定と、最新のテクノロジーを活用した実行支援により、
              クライアントの真の課題解決に伴走します。
            </p>
            <p className={styles.text}>
              戦略を描くだけでなく、現場に根付き、成果が生み出されるまで責任を持つ。
              それが私たちのコンサルティングの流儀であり、誇りです。
            </p>
            
            <div className={styles.ceoInfo}>
              <div className={styles.ceoSign}>
                Nexia Consulting 代表取締役CEO
                <strong>鈴木 健太</strong>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.imagePlaceholder}>
              {/* Premium office photo */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

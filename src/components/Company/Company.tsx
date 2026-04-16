import styles from './Company.module.css';

export default function Company() {
  return (
    <section id="company" className={`section ${styles.companySection}`}>
      <div className={`container ${styles.companyLayout}`}>
        <div className={styles.header}>
          <h2 className="section-title">会社概要 (Corporate Profile)</h2>
        </div>

        <div className={styles.profileContent}>
          <table className={styles.dataTable}>
            <tbody>
              <tr>
                <th>社名</th>
                <td>株式会社ネクシア・コンサルティング（NEXIA CONSULTING GROUP INC.）</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2015年4月1日</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>代表取締役社長 鈴木 健太</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>1億5,000万円</td>
              </tr>
              <tr>
                <th>従業員数</th>
                <td>1,250名（2026年4月現在）</td>
              </tr>
              <tr>
                <th>本社所在地</th>
                <td>〒100-0005<br />東京都千代田区丸の内2-7-2 JPタワー</td>
              </tr>
              <tr>
                <th>グローバル拠点</th>
                <td>ニューヨーク、ロンドン、シンガポール、上海</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

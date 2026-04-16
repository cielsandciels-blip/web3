import { useState } from 'react';
import { Search, Globe, ChevronDown, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Utility Bar */}
      <div className={styles.utilityBar}>
        <div className={`container ${styles.utilityContainer}`}>
          <div className={styles.utilityLinks}>
            <a href="#">Global Alumni</a>
            <a href="#">Media Center</a>
            <a href="#">Investor Relations</a>
          </div>
          <div className={styles.utilityActions}>
            <div className={styles.actionItem}>
              <Globe size={14} />
              <span>Japan - 日本語</span>
              <ChevronDown size={12} />
            </div>
            <div className={styles.actionItem}>
              <Search size={14} />
              <span>Search</span>
            </div>
            <a href="#contact" className={styles.loginBtn}>クライアント・ログイン</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        <div className={`container ${styles.navContainer}`}>
          <a href="#home" className={styles.logo}>
            NEXIA CONSULTING
          </a>

          <nav className={styles.desktopMenu}>
            <ul className={styles.menuList}>
              <li><a href="#expertise">専門領域 <ChevronDown size={12}/></a></li>
              <li><a href="#insights">インサイト <ChevronDown size={12}/></a></li>
              <li><a href="#cases">導入実績 <ChevronDown size={12}/></a></li>
              <li><a href="#careers">採用情報</a></li>
              <li><a href="#company">会社概要</a></li>
            </ul>
          </nav>

          <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Dense) */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <ul className={styles.mobileMenuList}>
            <li><a href="#expertise" onClick={() => setMobileMenuOpen(false)}>専門領域</a></li>
            <li><a href="#insights" onClick={() => setMobileMenuOpen(false)}>インサイト</a></li>
            <li><a href="#cases" onClick={() => setMobileMenuOpen(false)}>導入実績</a></li>
            <li><a href="#careers" onClick={() => setMobileMenuOpen(false)}>採用情報</a></li>
            <li><a href="#company" onClick={() => setMobileMenuOpen(false)}>会社概要</a></li>
            <li className={styles.mobileUtility}><a href="#">クライアント・ログイン</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

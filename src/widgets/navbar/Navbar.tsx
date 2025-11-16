import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* <Link ...> lebih baik untuk SEO & SPA 
        jika kamu menggunakan React Router.
        Untuk saat ini, kita pakai <a>.
      */}
      <div className={styles.navLinks}>
        <a href="/" className={styles.navButton}>
          HOME
        </a>
        <a href="/portofolio" className={styles.navButton}>
          PORTFOLIO
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
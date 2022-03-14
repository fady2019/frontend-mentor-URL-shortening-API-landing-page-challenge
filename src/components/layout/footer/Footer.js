import Container from '../../UI/Container';
import styles from './Footer.module.css';

import logo from '../../../assets/logo.svg';
import UList from '../../UI/UList';

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <Container className={styles['footer-container']}>
        <img className={styles.logo} src={logo} alt="shorten-logo" />

        <div className={styles['footer-content']}>
          <div>
            <h3>Features</h3>
            <UList
              list={[
                { id: 'link-shortening', val: 'Link Shortening' },
                { id: 'branded-links', val: 'Branded Links' },
                { id: 'analytics', val: 'Analytics' },
              ]}
            />
          </div>

          <div>
            <h3>Resources</h3>
            <UList
              list={[
                { id: 'blog', val: 'Blog' },
                { id: 'developers', val: 'Developers' },
                { id: 'support', val: 'Support' },
              ]}
            />
          </div>

          <div>
            <h3>Company</h3>
            <UList
              list={[
                { id: 'about', val: 'About' },
                { id: 'our-team', val: 'Our Team' },
                { id: 'careers', val: 'Careers' },
                { id: 'contact', val: 'Contact' },
              ]}
            />
          </div>

          <div className={styles.social}>
            <div className={`${styles.icon} ${styles['facebook-icon']}`}></div>
            <div className={`${styles.icon} ${styles['twitter-icon']}`}></div>
            <div className={`${styles.icon} ${styles['pinterest-icon']}`}></div>
            <div className={`${styles.icon} ${styles['instagram-icon']}`}></div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

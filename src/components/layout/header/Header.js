import React from 'react';

import styles from './Header.module.css';

import headerBg from '../../../assets/illustration-working.svg';

import Container from '../../UI/Container';
import Button from '../../UI/Button';
import Navbar from './Navbar';

const Header = props => {
  return (
    <div className={styles.header}>
      <img
        className={styles['header-bg']}
        src={headerBg}
        alt="illustration-working"
      />

      <Container className={styles['header-container']}>
        <Navbar />

        <div className={styles['header-content']}>
          <h1>More than just shorter links</h1>

          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>

          <Button className="btn1 filled">Get Started</Button>
        </div>
      </Container>
    </div>
  );
};

export default Header;

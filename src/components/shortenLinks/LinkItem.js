import React, { useState } from 'react';

import styles from './LinkItem.module.css';

import Button from '../UI/Button';

const LinkItem = props => {
  const [isCopied, setIsCopied] = useState(false);

  const copyShortenLinkHandler = event => {
    navigator.clipboard.writeText(props.link.shorten);
    setIsCopied(true);
  };

  return (
    <div className={styles['link-item']}>
      <div className={styles.links}>
        <span className={styles.link}>{props.link.original}</span>
        <span className={`${styles.link} ${styles['shorten']}`}>
          {props.link.shorten}
        </span>
      </div>

      <Button
        className={`btn2 filled ${isCopied && 'copied'}`}
        onClick={copyShortenLinkHandler}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </Button>
    </div>
  );
};

export default LinkItem;

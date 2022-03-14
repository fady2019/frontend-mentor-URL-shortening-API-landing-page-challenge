import styles from './StatisticsContent.module.css';

import BRIcon from '../../assets/icon-brand-recognition.svg';
import DRIcon from '../../assets/icon-detailed-records.svg';
import FCIcon from '../../assets/icon-fully-customizable.svg';

const StatisticsContent = props => {
  return (
    <div className={styles['statistics-content']}>
      <div className={styles.stat}>
        <div className={styles.icon}>
          <img src={BRIcon} alt="brand-recognition-icon" />
        </div>

        <h3>Brand Recognition</h3>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>

      <div className={styles.stat}>
        <div className={styles.icon}>
          <img src={DRIcon} alt="detailed-records-icon" />
        </div>
        <h3>Detailed Records</h3>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>

      <div className={styles.stat}>
        <div className={styles.icon}>
          <img src={FCIcon} alt="fully-customizable-icon" />
        </div>
        <h3>Fully Customizable</h3>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  );
};

export default StatisticsContent;

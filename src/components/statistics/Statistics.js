import styles from './Statistics.module.css';

import Container from '../UI/Container';
import StatisticsContent from './StatisticsContent';

const Statistics = props => {
  return (
    <Container className={styles.statistics}>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <StatisticsContent />
    </Container>
  );
};

export default Statistics;

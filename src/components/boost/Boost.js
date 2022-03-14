import styles from './Boost.module.css';

import Button from '../UI/Button';
import Container from '../UI/Container';

const Boost = props => {
  return (
    <div className={styles.boost}>
      <Container>
        <h2>Boost your links today</h2>
        <Button className="btn1 filled">Get Started</Button>
      </Container>
    </div>
  );
};

export default Boost;

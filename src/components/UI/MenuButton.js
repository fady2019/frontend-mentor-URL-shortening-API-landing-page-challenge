import styles from './MenuButton.module.css';

const MenuButton = props => {
  return (
    <button
      className={`${props.className} ${styles['menu-btn']} ${
        props.isOpened && styles.opened
      }`}
      onClick={props.onToggleMenu}
    >
      <span className={styles['menu-ham-before']}></span>
      <span className={styles['menu-ham']}></span>
      <span className={styles['menu-ham-after']}></span>
    </button>
  );
};

export default MenuButton;

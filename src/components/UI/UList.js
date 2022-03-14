import styles from './UList.module.css';

const UList = props => {
  return (
    <ul className={`${props.className} ${styles.ul}`}>
      {props.list && props.list.length > 0
        ? props.list.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.val}</a>
            </li>
          ))
        : props.children}
    </ul>
  );
};

export default UList;

import styles from './ShortenLinkList.module.css';

import LinkItem from './LinkItem';

const ShortenLinkList = props => {
  return props.linkList.map(link => <LinkItem key={link.id} link={link} />);
};

export default ShortenLinkList;

import { useEffect, useState } from 'react';

import styles from './ShortenLinks.module.css';

import Container from '../UI/Container';
import Modal from '../UI/Modal';

import ShortenLinksForm from './ShortenLinksForm';
import ShortenLinkList from './ShortenLinkList';

import useHTTP from '../../hooks/use-http';

const ShortenLinks = props => {
  const [shortenLinkList, setShortenLinkList] = useState([]);

  const apiBase = 'https://api.shrtco.de/v2/shorten?url=';

  const { request, response, error, resetError } = useHTTP();

  useEffect(() => {
    if (response) {
      setShortenLinkList(prev => {
        const isNewItemNotExist =
          prev.findIndex(item => item.id === response.id) === -1;

        if (isNewItemNotExist) {
          return [...prev, response];
        }

        return prev;
      });
    }
  }, [response]);

  const shortenLinkHandler = link => {
    request(apiBase + link);
  };

  return (
    <Container className={styles['shorten-links-container']}>
      {error && (
        <Modal onClose={resetError}>
          <p>{error}</p>
        </Modal>
      )}

      <ShortenLinksForm onShortenLink={shortenLinkHandler} />

      <ShortenLinkList linkList={shortenLinkList} />
    </Container>
  );
};

export default ShortenLinks;

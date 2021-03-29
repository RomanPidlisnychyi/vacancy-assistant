import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import styles from '../VacancyItem.module.css';

export default function CardBody({ children, scrollTo }) {
  useEffect(() => {
    scrollTo();
  }, [scrollTo]);
  return <Card.Body className={styles.cardBody}>{children}</Card.Body>;
}

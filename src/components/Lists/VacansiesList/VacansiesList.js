import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { VacancyItem } from './VacancyItem';
import { getReversedVacancies } from '../../../store/selectors/vacancySelectors';
import styles from './VacansiesList.module.css';

export default function VacansiesList() {
  const vacancies = useSelector(getReversedVacancies);
  return (
    <ListGroup className={styles.list}>
      {vacancies.length ? (
        vacancies.map(({ _id: id }) => <VacancyItem key={id} id={id} />)
      ) : (
        <ListGroup.Item>Nothing to show for you...</ListGroup.Item>
      )}
    </ListGroup>
  );
}

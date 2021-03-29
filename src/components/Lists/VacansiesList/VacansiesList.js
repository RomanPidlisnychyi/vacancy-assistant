import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { VacancyItem } from './VacancyItem';
import { getReversedVacancies } from '../../../store/selectors/vacancySelectors';
import styles from './VacansiesList.module.css';

export default function VacansiesList({ handleModal }) {
  const [eventKey, setEventKey] = useState(null);
  const vacancies = useSelector(getReversedVacancies);

  const handleEventKey = id => {
    if (id !== eventKey) {
      setEventKey(id);
      return;
    }

    setEventKey(null);
  };
  return (
    <ListGroup className={styles.list}>
      {vacancies.length ? (
        vacancies.map(({ _id: id }) => (
          <VacancyItem
            key={id}
            id={id}
            eventKey={eventKey}
            handleEventKey={handleEventKey}
            handleModal={handleModal}
          />
        ))
      ) : (
        <ListGroup.Item>Nothing to show for you...</ListGroup.Item>
      )}
    </ListGroup>
  );
}

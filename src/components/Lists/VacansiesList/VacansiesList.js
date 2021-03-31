import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    <TransitionGroup
      component={ListGroup}
      className={styles.list}
      in={vacancies.length}
    >
      {vacancies && vacancies.length ? (
        vacancies.map(vacancy => (
          <CSSTransition key={vacancy._id} classNames={styles} timeout={250}>
            <VacancyItem
              vacancy={vacancy}
              eventKey={eventKey}
              handleEventKey={handleEventKey}
              handleModal={handleModal}
            />
          </CSSTransition>
        ))
      ) : (
        <CSSTransition classNames={styles} timeout={250}>
          <ListGroup.Item>Nothing to show for you...</ListGroup.Item>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { VacancyItem } from './VacancyItem';
import { getVacancies } from '../../../store/selectors/vacancySelectors';
import styles from './VacansiesList.module.css';

export default function VacansiesList() {
  const vacancies = useSelector(getVacancies);
  return (
    <ListGroup>
      {vacancies.length ? (
        vacancies.map(({ _id: id }) => <VacancyItem key={id} id={id} />)
      ) : (
        <VacancyItem />
      )}
    </ListGroup>
  );
}

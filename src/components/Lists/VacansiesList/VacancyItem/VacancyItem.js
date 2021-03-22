import { ListGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getVacancy } from '../../../../store/selectors/vacancySelectors';
import { onDeleteVacancy } from '../../../../store/operations/vacancyOperations';
import styles from './VacancyItem.module.css';

export default function VacancyItem({ id }) {
  const dispatch = useDispatch();
  const vacancy = useSelector(state => getVacancy(state, id));
  const handleBtn = () => {
    dispatch(onDeleteVacancy(id));
  };
  return vacancy ? (
    <ListGroup.Item>
      {vacancy.companyName}
      <Button onClick={handleBtn} variant="outline-danger" size="sm">
        &#10006;
      </Button>
    </ListGroup.Item>
  ) : (
    <ListGroup.Item>Create your first vacancy</ListGroup.Item>
  );
}

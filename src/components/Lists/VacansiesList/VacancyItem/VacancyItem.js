import { ListGroup, Button, Card, Accordion } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { BtnControl } from './BtnControl';
import { getVacancy } from '../../../../store/selectors/vacancySelectors';
import { onDeleteVacancy } from '../../../../store/operations/vacancyOperations';
import styles from './VacancyItem.module.css';

export default function VacancyItem({ id }) {
  const dispatch = useDispatch();
  const vacancy = useSelector(state => getVacancy(state, id));

  const { date, companyName, URL, status } = vacancy;

  const handleBtn = () => {
    dispatch(onDeleteVacancy(id));
  };
  return (
    <ListGroup.Item className={styles.item}>
      <Accordion>
        <Card>
          <Card.Header className={`${styles.cardHeader} ${styles[status]}`}>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              className={styles.mainButton}
            >
              {date}
              {companyName}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={styles.cardBody}>
              <BtnControl />
              {/* <Button onClick={handleBtn} variant="outline-danger" size="sm">
                &#10006;
              </Button> */}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ListGroup.Item>
  );
}

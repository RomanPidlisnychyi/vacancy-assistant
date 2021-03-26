import { ListGroup, Button, Card, Accordion } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BtnControl } from './BtnControl';
import { getVacancy } from '../../../../store/selectors/vacancySelectors';
import { getStatuses } from '../../../../store/selectors/statusesSelectors';
import { prepareVacancy } from '../../../../utils/prepareVacancy';
import styles from './VacancyItem.module.css';

export default function VacancyItem({ id, eventKey, handleEventKey }) {
  const vacancy = useSelector(state => getVacancy(state, id));
  const statuses = useSelector(getStatuses);

  const { date, companyName, status, URL } = vacancy;

  const { day, mounth } = date;

  const myBtnInHeader = [status, 'change', 'delete'];

  const myBtnInCard = prepareVacancy(vacancy);

  const handleKey = ({ name }) => {
    if (name) {
      handleEventKey(`${id}${name}`);
      return;
    }
    handleEventKey(id);
  };
  return (
    <ListGroup.Item className={styles.item}>
      <Card>
        <Card.Header className={`${styles.cardHeader} ${styles[status]}`}>
          <BtnControl myBtn={['favorite']} id={id} handleKey={handleKey} />
          <Button
            variant="link"
            onClick={handleKey}
            className={styles.mainButton}
          >
            {day}.{mounth}
            {companyName}
          </Button>
          <BtnControl myBtn={myBtnInHeader} id={id} handleKey={handleKey} />
        </Card.Header>
        {eventKey === id && (
          <Card.Body className={styles.cardBody}>
            <BtnControl
              myBtn={myBtnInCard}
              id={id}
              handleKey={handleKey}
              URL={URL}
            />
          </Card.Body>
        )}

        {eventKey === `${id}${status}` && (
          <Card.Body className={styles.cardBody}>
            <BtnControl myBtn={statuses} id={id} handleKey={handleKey} />
          </Card.Body>
        )}
        {eventKey === `${id}delete` && (
          <Card.Body className={styles.cardBody}>
            <BtnControl
              myBtn={['remove', 'cancel']}
              id={id}
              handleKey={handleKey}
            />
          </Card.Body>
        )}
      </Card>
    </ListGroup.Item>
  );
}

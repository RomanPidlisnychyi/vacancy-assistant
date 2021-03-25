import { ListGroup, Button, Card, Accordion } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BtnControl } from './BtnControl';
import { getVacancy } from '../../../../store/selectors/vacancySelectors';
import { prepareVacancy } from '../../../../utils/prepareVacancy';
import styles from './VacancyItem.module.css';

export default function VacancyItem({ id, eventKey, handleEventKey }) {
  const vacancy = useSelector(state => getVacancy(state, id));

  const { date, companyName, status, URL } = vacancy;

  const myBtnInHeader = [status, 'delete'];

  const myBtnInCard = prepareVacancy(vacancy);
  const handleKey = () => {
    handleEventKey(id);
  };
  return (
    <ListGroup.Item className={styles.item}>
      <Accordion>
        <Card>
          <Card.Header className={`${styles.cardHeader} ${styles[status]}`}>
            <Button
              variant="link"
              onClick={handleKey}
              className={styles.mainButton}
            >
              {date}
              <a href={URL} target="_blanck">
                {companyName}
              </a>
            </Button>
            <BtnControl myBtn={myBtnInHeader} id={id} />
          </Card.Header>
          {eventKey === id && (
            <Card.Body className={styles.cardBody}>
              <BtnControl myBtn={myBtnInCard} id={id} />
            </Card.Body>
          )}
        </Card>
      </Accordion>
    </ListGroup.Item>
  );
}
